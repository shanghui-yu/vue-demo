<template>
  <div>
    {{vuexDemo}}<br>
    <button @click="setMsg">更改vuex使用Action</button><br><br>
    {{message}}<br>
    <button @click="SetMesB(2)">使用mutations无阻碍更改</button><br><br>
    <button @click="add(1)">更改vuex中mutations的方法名</button><br><br>
  </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
export default {
  name:'',
  data:()=>({
    msg:'',
    count:1
  }),
  computed: {
    ...mapState({
      message: state => state.b.mess,
      vuexDemo:state=>state.a.mes,
    })
  },
  /**
   * @Author: yushanghui
   * @description: 使用vuex的mapMutations 数组里面的就是story对象里面的mutations里面的方法名 调用的时候正常使用 正常传参
   * @Date: 2019-04-02 16:11:34
   */
  methods: {
    ...mapMutations(['SetMesB']),
    ...mapMutations({
      add:'SetMesB'
    }),
    setMsg (){
      this.$store.dispatch('SetMesA',this.count++)
    }
  },
}
</script>

<style scope>
  *{
    word-break: break-all;
  }
  button{
    border:1px solid #e5e5e5;
  }
</style>
