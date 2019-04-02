<template>
  <div>
    <div @click="funStop">.stop：<span @click.stop="noStop">阻止往上冒泡</span></div>
    <br><a href="#" @click.prevent="prevent">.prevent</a>
    <br><div @click.self="funStop">.self：<span @click="noStop">只针对当前元素，不往上冒泡也不会穿透</span></div>
    <!-- <br><a href="#" @click.self="funStop">.self</a> -->
    <br><div @click.once="funStop">.once:只执行一次点击事件</div>
  </div>
</template>
<script>
export default {
  name:'',
  data:()=>({
    msg:''
  }),
  methods: {
    funStop(){
      console.log(1)
    },
    noStop(){
      console.log(2)
    },
    prevent(){
      console.log('不跳转')
    }
  },
}
</script>

<style scope>
  *{
    word-break: break-all;
  }
</style>
