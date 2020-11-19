<template>
  <div>
    <el-container>
      <el-header>GBA Issue管理系统</el-header>
      <el-main>
        <el-row>
          <el-button @click="FormRegistered()" round>注册</el-button>
          <el-button round @click="FormLogin()">登陆</el-button>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    FormLogin() {
      window.location.href = "./Login";
    },
    FormRegistered() {
      window.location.href = "./Registered";
    },
  },
};
</script>

<style>
* {
  background: #e9eef3;
}
.el-header {
  background: rgb(231, 193, 193);
  color: rgb(63, 24, 24);
  text-align: center;
  line-height: 80px;
  font-style: inherit;
  font-size: 35px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>


