<template>
<!--
  所有的元素必须不能直接在根节点下， template；需要嵌套一层
-->
  <div>
    <h1>个人信息</h1>
    {{$route.params.id}}
<!--    {{id}}-->
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile",

}
</script>

<style scoped>

</style>
