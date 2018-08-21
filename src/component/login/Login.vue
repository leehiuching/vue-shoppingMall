<template>
  <div>
    登陆
  </div>
</template>

<script>
  export default {
    created () {
      this.$http.get(this.$api.islogin).then(res => {
        console.log(res.data);
      })
    } 
  }
</script>

<style scoped>

</style>