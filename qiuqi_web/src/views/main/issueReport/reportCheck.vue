<template>
  <div>
    <h4 style="text-align:center;width:1200px">Issue报表查询</h4>
    <!-- <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr>
    <el-container>
      <div style="width:1200px;text-align:center">
        <el-form :inline="true"
                 :model="formInline"
                 class="demo-form-inline">
          <el-form-item label="">
            <el-input v-model="formInline.UserId"
                      placeholder="请输入用户ID"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="
                      formInline.UserName"
                      placeholder="请输入用户姓名">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="goreport">查询</el-button>
            <el-button @click="clearvalues">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-container>
    <div>
      <!-- 路由容器 -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        UserId: "",
        UserName: ""
      }
    };
  },
  methods: {
    goreport () {
      window.location.href = "/main/reportcheck/report";
    },
    clearvalues () {
      this.formInline.UserId = "";
      this.formInline.UserName = "";
    }
  }
};
</script>