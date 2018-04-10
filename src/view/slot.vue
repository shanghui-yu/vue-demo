<template>
  <div>
    <h1>我是父组件的标题</h1>
    <slot-component>
      <p>这是一些初始内容</p>
      <p slot="ceshi-slot">具名卡槽</p>
    </slot-component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      slots: false
    }
  },
  components: {
    SlotComponent: (resolve) => {
      // 异步组件写法
      setTimeout(() => {
        require(['../components/slot/slot-component.vue'], resolve)
      }, 3000)
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
