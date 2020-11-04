

<template>
  <div>
    <el-menu
      :default-active="currentPath"
      router
      mode="horizontal"
      background-color="white"
      text-color="#222"
      active-text-color="red"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <el-input
        placeholder="快速搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
        v-model="keywords">
      </el-input>
      <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 40px;color: #222;padding: 10px"></i>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: 'Main Page'},
        {name: '/jotter', navItem: 'Note Book'},
        {name: '/library', navItem: 'Library'},
        {name: '/login', navItem: 'Setting'}
      ],
      keywords: ''
    }
  },
  computed: {
    hoverBackground () {
      return '#ffd04b'
    },
    currentPath () {
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    }
  },
  methods: {
    logout(){
      var _this = this
      this.$axios.get('/logout').then(resp => {
        if(resp.data.code === 200){
          _this.$store.commit('logout')
          _this.$router.replace('/login')
        }
      })
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
span {
  pointer-events: none;
}
.el-icon-switch-button {
  cursor: pointer;
  outline:0;
}
</style>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
