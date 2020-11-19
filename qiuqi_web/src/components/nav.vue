<template>
  <el-aside width="200px">
    <el-row class="tac">
      <el-col>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="goPage1">
            <i class="el-icon-menu"></i>
            <span slot="title">创建新 Issue</span>
          </el-menu-item>

          <el-menu-item index="2" @click="goPage2">
            <i class="el-icon-s-order"></i>
            <span slot="title">Issue 报表</span>
          </el-menu-item>

          <el-menu-item index="3" @click="goPage3">
            <i class="el-icon-s-order"></i>
            <span slot="title">账户管理</span>
          </el-menu-item>

          <el-menu-item index="3" @click="goPage4">
            <i class="el-icon-s-order"></i>
            <span slot="title">Issue 查询</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    goPage1() {
      window.location.href = "./create";
    },
    goPage2() {
      window.location.href = "./reportCheck";
    },

    goPage3() {
      window.location.href = "./countCheck";
    },

    goPage4() {
      window.location.href = "./check";
    },
  },
};
</script>


<style scoped>
.el-row {
  height: 100%;
}

.el-menu {
  border-right: none;
}
.el-aside {
  background: #545c64;
  border-right: 1px solid #f5f1f1;
  height: 800px;
}
</style>
