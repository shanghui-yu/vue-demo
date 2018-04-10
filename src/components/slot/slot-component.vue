<template>
  <div>
    <h2>我是子组件的标题</h2>
    <slot>
      只有在没有要分发的内容时才会显示。(默认slot)
    </slot>
    <div>
      <slot name="ceshi-slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped>
</style>
