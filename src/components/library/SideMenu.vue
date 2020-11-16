<template>
  <el-menu
    class="categories"
    default-active="0"
    @select="handleSelect"
    active-text-color="red">
    <el-menu-item index="0">
      <span slot="title">All</span>
    </el-menu-item>
    <el-menu-item index="1">
      <span slot="title">Literature</span>
    </el-menu-item>
    <el-menu-item index="2">
      <span slot="title">Popular</span>
    </el-menu-item>
    <el-menu-item index="3">
      <span slot="title">Culture</span>
    </el-menu-item>
    <el-menu-item index="4">
      <span slot="title">Life</span>
    </el-menu-item>
    <el-menu-item index="5">
      <span slot="title">Management</span>
    </el-menu-item>
    <el-menu-item index="6">
      <span slot="title">Science</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      cid: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.cid = key
      this.$emit('indexSelect')
    }
  }
}
</script>

<style scoped>
.categories {
  position: fixed;
  top: 100px;
  width: 150px;
}
</style>

