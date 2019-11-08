<template>
  <form class="registered" @submit.prevent="toSubmit" ref="forms">
    <!-- tab切换菜单 -->
    <div class="tab-menu">
      <span :class="['btn',checked?'':'checked']" @click="tabMenu(0)">注册</span>
      <span :class="['btn',checked?'checked':'']" @click="tabMenu(1)">登录</span>
    </div>

    <div class="registered" v-show="!checked">
      <input type="text" placeholder="请输入用户名" v-model="forms.username">
      <input type="text" placeholder="请输入邮箱" v-model="forms.email">
      <input type="password" placeholder="请输入密码" v-model="forms.password">
    </div>
    <div class="registered" v-show="checked">
      <input type="text" placeholder="请输入邮箱/用户名" v-model="login.login_id" >
      <input type="password" placeholder="请输入密码" v-model="login.password">
    </div>

    <button type="submit" :disabled="submitStatus">提交</button>
  </form>
</template>

<script>
import XHR from '../api/'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      checked:0,
      submitStatus:false,
      forms: {
        username:'',
        email:'',
        password:''
      },
      login:{
        login_id:'',
        password:'',
      }
    }
  },
  computed: {
    mes () {
      return this.$store.state.mes
    }
  },
  created () {
  },
  methods: {
    ...mapMutations({
      add: 'SetMes' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    tabMenu(type){
      this.checked = type
    },
    // 接口请求
    toSubmit(e){
      this.submitStatus=true
      switch (this.checked) {
        case 0:
          XHR.emailRegister(this.forms).then(res=>{
            this.submitStatus=false
            console.log(23)
            if (res&&res.status===200) {
              console.log(res)
            }
          })
          break;
        case 1:
          XHR.login(this.login).then(res=>{
            this.submitStatus=false
            console.log(233)
            if (res&&res.status===200) {
              console.log(res)
            }
          })
          break;
      }
       
    },
  }
}
</script>

<style lang="less" scoped>
  .tab-menu{
      display: inline-block;
      line-height: 1;
      vertical-align: middle;
      font-size: 0;
      margin-bottom: 10px;
    .btn{
     line-height: 1;
      white-space: nowrap;
      vertical-align: middle;
      background: #fff;
      border: 1px solid #dcdfe6;
      font-weight: 500;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      margin: 0;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 0;
      border-left: 0;
      cursor: pointer;
      display: inline-block;
      &:first-child{
        border-left: 1px solid #dcdfe6;
        border-radius: 4px 0 0 4px;
        box-shadow: none!important;
      }
      &:last-child{
        border-radius: 4px 0 0 4px;
      }
    }
    .checked{
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
      box-shadow: -1px 0 0 0 #409eff;
    }
  }
  .registered{
    text-align: center;
    input{
      border:1px solid #999;
      font-size: 14px;
      display: block;
      margin:10px auto;
      height: 35px;
      padding: 5px;
      box-sizing: border-box;
      width: 70%;
    }
    button{
      margin-top: 10px;
      width: 70%;
      background: #41b883;
      height: 35px;
      color: #fff;
    }
  }
</style>
