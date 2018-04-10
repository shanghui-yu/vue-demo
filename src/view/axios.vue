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
    }
  }
}
</script>

<style scoped>

</style>
