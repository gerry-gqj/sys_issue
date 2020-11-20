<template>
  <div>
    <h4 style="text-align:center;">账户管理</h4>
    <!-- <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr>
    <el-container>
      <div style="text-align:center;width:1200px">
        <el-form ref="form"
                 :inline="true"
                 :model="formInline"
                 class="demo-form-inline">
          <el-form-item label="用户ID">
            <el-input v-model="formInline.UserId"
                      :fetch-suggestions="querySearch1"
                      placeholder="请输入用户ID"
                      style="width: 250px; height:auto"
                      @select="handleSelect"
                      maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="用户姓名">
            <el-input v-model="formInline.UserName"
                      :fetch-suggestions="querySearch2"
                      placeholder="请输入用户姓名"
                      style="width: 250px; height:auto"
                      @select="handleSelect"
                      maxlength="30"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="gocount">查询</el-button>
            <el-button @click="clearvalues">清空</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        UserId: "",
        UserName: "",
      }

    };
  },
  methods: {
    gocount () {
      window.location.href = "./count";
    },
    clearvalues () {
      this.formInline.UserId = "";
      this.formInline.UserName = "";
    }
  },
};
</script>





