<template>
  <el-switch
    v-model="value"
    active-text="views">
  </el-switch>
</template>

<script>
  export default {
    name: 'ViewSwitch',
    data () {
      return {
        value: true
      }
    }
  }
</script>

<style scoped>

</style>
