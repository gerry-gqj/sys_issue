<template>
  <div>
    <el-container>
      <el-header>GBA Issue管理系统</el-header>
      <el-row>
        <el-button @click="FormRegistered()"
                   round>注册</el-button>
        <el-button round
                   @click="FormLogin()">登陆</el-button>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {
    FormLogin () {
      window.location.href = "./Login";
    },
    FormRegistered () {
      window.location.href = "./Registered";
    },
  },
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 80px;
  font-style: inherit;
  font-size: 35px;
}

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  font-style: inherit;
  font-size: 30px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
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


