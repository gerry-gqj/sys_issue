<template>
  <div class="menu">
    <el-aside width="210px">
      <el-menu default-active="this.$route.path"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               router>
        <el-menu-item index="/main/create"
                      v-if="this.role != '经理'">
          <i class="el-icon-menu"></i>
          <span slot="title">创建 Issue</span>
        </el-menu-item>
        <el-menu-item index="/main/reportCheck"
                      v-if="this.role =='超级Admin'||'经理'">
          <i class="el-icon-document"></i>
          <span slot="title">Issue 报表</span>
        </el-menu-item>
        <el-menu-item index="/main/countCheck"
                      v-if="this.role == '超级Admin'">
          <i class="el-icon-location"></i>
          <span slot="title">账户管理</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Issue 查询</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/main/check">修改人</el-menu-item>
            <el-menu-item index="/main/checkmycreate">创建人</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  data () {
    return {
      role: "",
    };
  },
  mounted () {
    this.role = localStorage.getItem("role");
    console.log(this.role);
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
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
  border-right: 1px solid #f5f1f1;
}
</style>

