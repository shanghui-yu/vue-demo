<template>
  <div>344</div>
</template>

<script>
import XHR from '../api/'
import { mapMutations } from 'vuex'
import { JSEncrypt } from 'jsencrypt'
export default {
  data () {
    return {
      datas: ''
    }
  },
  computed: {
    mes () {
      return this.$store.state.mes
    }
  },
  created () {
    this.encrypStr({
    "name":"名字。撒大声地撒多撒多撒多说的、，。。，，。、。，、、。2331！@##@#（）*……&……%￥……#@@#sdsdasdsadsad大萨达多胜多负少的“”；：「」【】",
    "request_time":123456789
  })
  },
  methods: {
     utf8 (inputStr) { //将中文转为UTF8
         var outputStr = "";
         for (var i = 0; i < inputStr.length; i++) {
           var temp = inputStr.charCodeAt(i);
           //0xxxxxxx
           if (temp < 128) {
             outputStr += String.fromCharCode(temp);
           }
           //110xxxxx 10xxxxxx
           else if (temp < 2048) {
             outputStr += String.fromCharCode((temp >> 6) | 192);
             outputStr += String.fromCharCode((temp & 63) | 128);
           }
           //1110xxxx 10xxxxxx 10xxxxxx
           else if (temp < 65536) {
             outputStr += String.fromCharCode((temp >> 12) | 224);
             outputStr += String.fromCharCode(((temp >> 6) & 63) | 128);
             outputStr += String.fromCharCode((temp & 63) | 128);
           }
           //11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
           else {
             outputStr += String.fromCharCode((temp >> 18) | 240);
             outputStr += String.fromCharCode(((temp >> 12) & 63) | 128);
             outputStr += String.fromCharCode(((temp >> 6) & 63) | 128);
             outputStr += String.fromCharCode((temp & 63) | 128);
           }
         }
         return outputStr;
       },
       toUnicode(str) {
         let reg = /^[\u4e00-\u9fa5]+$/
         let reg1 = /[^\x00-\x80]/g
         var newStr = ''
         for (let i = 0; i < str.length; i++) {
           // console.log(reg.test(str[i]))
           if (reg.test(str[i]) || reg1.test(str[i])) {
             newStr += '\\u' + str[i].charCodeAt(0).toString(16)
           } else {
             console.log(34);
             
             newStr += this.utf8(str[i])
           }
         }
         return newStr
       },
       encrypStr(str) {
         // adminInfo
        //  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        //  if (!userInfo) {
        //    this.$router.push({
        //      path: '/login'
        //    })
        //    this.$message.error('登录失效请重新登录')
        //    return
        //  }
         let postData = Object.assign({}, str)
         // console.log(postData)
         let txt = JSON.stringify(postData).replace(/\//g, '\\\/')
         let word = this.toUnicode(txt)
         console.log('加密前' + word)
         let newStr = this.$md5(word)
         console.log('md5', newStr)
         let encrypt = new JSEncrypt()
         // encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDEqjsrR6oIqtsZnctKhOrlDTSk1lU6o3YWBvAsNaRYd6riL8pmzlw5Be6IED2xCiMiWatsLmNTQfUM6Prkp/+GYoib3PeazRxCm/AKyt+p3EjYlIu16gRG/SUsFNqrLZgNngIIEIdTvwC+G1kur18/C6ptjeFsblheKbQjBAWwQIDAQAB-----END PUBLIC KEY-----')
         encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDEqjsrR6oIqtsZnctKhOrlDTSk1lU6o3YWBvAsNaRYd6riL8pmzlw5Be6IED2xCiMiWatsLmNTQfUM6Prkp/+GYoib3PeazRxCm/AKyt+p3EjYlIu16gRG/SUsFNqrLZgNngIIEIdTvwC+G1kur18/C6ptjeFsblheKbQjBAWwQIDAQAB-----END PUBLIC KEY-----')

         // 加签
         let data = encrypt.encrypt(newStr)
         return data
       }
  }
}
</script>

<style scoped>

</style>
