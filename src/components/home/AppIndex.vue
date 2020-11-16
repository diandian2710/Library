<template>
  <div style="margin-top: 40px">
    <side-menu id="side-menu"></side-menu>
    <div class="home">
      <div id="header-div">
        <div style="height: 150px">
          <h3>this is the main page</h3>
        </div>
        <carousel></carousel>
        <quick-nav style="float: right;margin-top: -450px;margin-right: 480px"></quick-nav>
      </div>
        <update-card id="update-card"></update-card>
      <about id="about"></about>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel'
import QuickNav from './QuickNav'
import About from "../commons/About";
import UpdateCard from './UpdateCard'
import SideMenu from './SideMenu'
export default {
  name: 'AppIndex',
  components: {Carousel, QuickNav,About, UpdateCard, SideMenu}
}
</script>

<style scoped>
.home {
  width: 990px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -20px;
}

#header-div {
  padding-bottom: 20px;
  padding-left: 5px;
  background-color: white;
}

#side-menu {
  position: fixed;
  margin-left: 50%;
  left: -800px;
  top: 100px;
}
</style>
