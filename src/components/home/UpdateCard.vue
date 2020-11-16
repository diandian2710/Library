<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">Recent Update</span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">修改</el-button>-->
    </div>
    <div class="box">
        <el-timeline>
          <el-timeline-item timestamp="10/11/2020" placement="top">
            <el-card>
              <h4>Implement the article section</h4>
              <p>Neil submitted on 10/11/2020</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="5/11/2020" placement="top">
            <el-card>
              <h4>Deploy Shiro security framework</h4>
              <p>Neil submitted on 5/11/2020</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="27/10/2020" placement="top">
            <el-card>
              <h4>Refactored the project</h4>
              <p>Neil submitted on 27/10/2020</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="20/10/2020" placement="top">
            <el-card>
              <h4>Deploy front-end interceptor, migrate the database to mysql 8.0.15</h4>
              <p>Neil submitted on 20/10/2020</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="14/10/2020" placement="top">
            <el-card>
              <h4>Fuzzy query in search box</h4>
              <p>Neil submitted on 14/10/2020</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'UpdateCard'
  }
</script>

<style scoped>
  .box-card {
    margin-top: 5px;
    width: 988px;
    height: 1050px;
    text-align: left;
  }
  .box{
    height: 100%;
    overflow: auto;
  }

</style>
