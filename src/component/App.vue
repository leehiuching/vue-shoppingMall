<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'hello world'
      }
    }
  }
</script>

<style scoped>
h1 {
    font-size: 30px;
    color: red;
}
</style>