
<template>
  <el-container>
    <el-aside width="auto"
              class="header-logo tap">
      <img class="logo"
           src="../assets/imgs/user2.jpg"
           alt="Logo" />
    </el-aside>
    <h1>GBA Issue管理系统</h1>
    <el-aside width="auto"
              class="header-logo tap">
      <el-avatar icon="el-icon-user-solid"
                 class="headerLogo"></el-avatar>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style scoped>
.el-aside {
  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  width: 80px;
}

.headerLogo,
.logo {
  cursor: pointer;
}
</style>
