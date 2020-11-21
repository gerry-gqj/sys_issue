<template>
  <div class="main">
    <el-container>
      <el-aside width="auto"
                class="header-logo tap">
        <img class="logo"
             src=""
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
            <el-dropdown-item @click.native="userinfo">修改用户信息</el-dropdown-item>
            <el-dropdown-item @click.native="logout"
                              divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

      </el-aside>
    </el-container>
  </div>
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
    userinfo () {
      window.location.href = "/userinfo";
    },
    logout () {
      // this.$router.push('/');
      // 实现页面跳转和刷新页面

      this.$confirm('是否注销登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message(
          //   {
          //   type: 'success',
          //   message: '取消注册!'
          // },
          window.location.href = "/",
        );
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     // message: '已取消删除'
        //   });
      });
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
  padding: 0px 20px;
}
.logo {
  width: 200px;
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
/* .main {
  height: 1000px;
} */
</style>
