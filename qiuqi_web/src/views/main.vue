<template>
  <div>
    <el-container>
      <!-- header部分 -->
      <el-header>
        <navtop></navtop>
      </el-header>

      <el-container>
        <!-- aside部分 -->
        <leftNav></leftNav>
        <el-card class="box-card">
          <el-main>
            <!-- main部分 -->
            <router-view />
            <!-- 路由容器 -->
          </el-main>
        </el-card>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from "../components/nav.vue";
import navtop from "../components/nav-top.vue";
export default {
  components: {
    navtop,
    leftNav,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
/* * {
  background-color: aqua;
} */
.el-main {
  margin: 0px;
  padding: 0px;
  background-color: #fafafafd;
}
.el-header,
.el-footer {
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f1f1;
}
.el-container {
  height: 100%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  padding: 10px;
  margin: 10px;
}
</style>