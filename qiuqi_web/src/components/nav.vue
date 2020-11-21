<template>
  <div class="menu">
    <el-aside width="200px">
      <el-row class="tac">
        <el-col>
          <el-menu default-active="this.$route.path"
                   class="el-menu-vertical-demo"
                   router>
            <el-menu-item index="/main/create">
              <i class="el-icon-menu"></i>
              <span slot="title">创建新 Issue</span>
            </el-menu-item>
            <el-menu-item index="/main/reportCheck">
              <i class="el-icon-document"></i>
              <span slot="title">Issue 报表</span>
            </el-menu-item>
            <el-menu-item index="/main/countCheck">
              <i class="el-icon-location"></i>
              <span slot="title">账户管理</span>
            </el-menu-item>
            <el-menu-item index="/main/check">
              <i class="el-icon-setting"></i>
              <span slot="title">Issue 查询</span>
            </el-menu-item>
          </el-menu>

        </el-col>
      </el-row>
    </el-aside>
  </div>
</template>


<script>
export default {
  data () {
    return {};
  },
  methods: {
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

