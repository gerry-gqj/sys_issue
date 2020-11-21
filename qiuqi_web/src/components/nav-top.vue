
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
      <el-dropdown><span>
          <a class="user"
             @click="ModifyUserInformation"><span class="userimg">
              <el-avatar icon="el-icon-user-solid"
                         class="headerLogo"></el-avatar>
            </span>
            <span class="username">{{user}}</span>
          </a></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改用户信息</el-dropdown-item>
          <el-dropdown-item @click.native="logout"
                            divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

    </el-aside>
  </el-container>
</template>

<script>
import router from '@/router';
export default {
  data () {

    return {
      user: 'user',
      activeIndex: "1",
    };
  },
  methods: {
    // handleSelect (key, keyPath) {
    //   console.log(key, keyPath);
    // },
    ModifyUserInformation () {
      this.user = 'User';
    },
    logout () {
      // this.$router.push('/');
      // 实现页面跳转和刷新页面
      window.location.href = "/";
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

.user {
  font-size: 12px;
  min-height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 20px; */
  margin-top: 5px;
  color: #202046;
  white-space: normal;
}
/* .username {
  text-align: left;
  font-size: 10px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
} */

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
