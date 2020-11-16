<template>
    <el-menu
      default-active="1"
      style="width: 170px">
      <a href="#update-card">
        <el-menu-item index="2">
          <span slot="title">Update</span>
        </el-menu-item>
      </a>
      <a href="#code">
        <el-menu-item index="3">
          <span slot="title">Check Code</span>
        </el-menu-item>
      </a>
      <a href="#about">
        <el-menu-item index="4">
          <span slot="title">About Me</span>
        </el-menu-item>
      </a>
    </el-menu>
</template>

<script>
  export default {

  }
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
