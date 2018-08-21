<template>
    <div>
        公共头部
        公共底部
        <!-- <router-view></router-view> -->
        <el-rate v-model="value2" :colors= "['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            value: 2
        }
    }
  }
</script>

<style scoped>

</style>