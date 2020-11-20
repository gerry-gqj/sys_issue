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
        <el-main>
          <!-- main部分 -->
          <router-view />
          <!-- 路由容器 -->
        </el-main>
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
  data () {
    return {};
  },
  methods: {},
};
</script>

<style>
.el-main {
  background-color: #f5eff5cc;
}

.el-header,
.el-footer {
  background-color: #545c64;
  box-sizing: border-box;
  /* border-bottom: 1px solid #f5f1f1; */
}

.el-container {
  height: 100%;
}
</style>