<template>
  <div >
    <h1>页面切换</h1>
    <router-link to="/tabPage/ceshiA" replace>Hello</router-link>
    <router-link to="/tabPage/ceshiB" replace>Bss</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
