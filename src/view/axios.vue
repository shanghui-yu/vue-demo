<template>
  <div >
    <h1>axios接口请求</h1>
    <span>{{mes}}</span>
    <div v-html="this.datas.content"></div>
  </div>
</template>

<script>
import XHR from '../api/'
import { mapMutations } from 'vuex'
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
    this.ceshiAxios()
    //  改变vuex里面的值
    setTimeout(()=>{
      this.add('asss')
    }, 1000)
    this.yuyue()
  },
  methods: {
    ...mapMutations({
      add: 'SetMes' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    // 接口请求
    ceshiAxios(){
      XHR.artcleDetail({'id':90637 }).then((res)=>{
        let {data ,status} = res.data
        this.datas = data
      })
    },
    yuyue(){
      function setUuid(key,value){
          document.cookie = key+'='+value+';domain=203.86.55.48'
          +';path=/;'
      }
      setUuid('JSESSIONID','2355ED42DA0667A5C7C68D516AE34D33')
      setUuid('bhhoa.session.id','adc91790ec26436eb41a041c27d5a532')
      var orderIdsList = new Array();
      orderIdsList.push('f1dd9765b1ae46abb16012290aad7c56');
      orderIdsList.push('1');

      var params = {
        businessList:orderIdsList.join(",")
      };
      XHR.shuayuyue(params).then((res)=>{
        console.log(res);
        
      })
    }
  }
}
</script>

<style scoped>

</style>
