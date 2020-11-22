<template>
  <div>
    <h3 style="text-align: center;">Issue 查询</h3>
    <!-- <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr>
    <el-row :gutter="1">
      <el-col :span="6"
              offset="1">
        <div class="grid-content bg-purple">
          Issue No
          <el-input v-model="issueno"
                    placeholder=""
                    style="text-align:center; width:150px"
                    maxlength="30"
                    clearable></el-input>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span>Issue状态<el-select v-model="issuserank"
                       placeholder="请选择"
                       style="text-align:center; width:150px"
                       clearable>
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select></span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>
            创建时间
            <el-date-picker v-model="createtime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>至
            <el-date-picker v-model="createtimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span>
        </div>
      </el-col>

    </el-row>
    <el-row :gutter="0">
      <el-col :span="6"
              offset="1">
        <div class="grid-content bg-purple">
          <span>创建人
            <el-input v-model="createtor"
                      style="text-align:center; width:150px"
                      clearable
                      maxlength="30px"></el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span><span>修改人</span>
            <el-input v-model="modifier"
                      style="text-align:center; width:150px"
                      clearable
                      maxlength="10"></el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>修改时间&#12288;
            <el-date-picker v-model="changetime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>至
            <el-date-picker v-model="changetimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable
                            maxlength="30"></el-date-picker>
          </span>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-col :xs="20"
              :sm="20"
              :md="20"
              :lg="20"
              :xl="20"
              style="text-align: center">
        <div class="button">
          <el-button type="primary"
                     @click="golist">查询</el-button>
          <el-button @click="clearvalues">清空</el-button>
        </div>
      </el-col>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: "选项1",
          label: "最高",
        },
        {
          value: "选项2",
          label: "较高",
        },
        {
          value: "选项3",
          label: "一般",
        },
        {
          value: "选项4",
          label: "低",
        },
      ],
      issueno: "",
      issuserank: "",
      createtime: "",
      createtimeto: "",
      createtor: "",
      modifier: "",
      changetime: "",
      changetimeto: "",
      value: "",
      pickerOptions0: {
      },
    };
  },
  methods: {
    golist () {
      this.$router.push("/main/check/list");
      // window.location.href = "/main/check/list";
    },
    clearvalues () {
      this.issueno = "";
      this.issuserank = "";
      this.createtime = "";
      this.createtimeto = "";
      this.createtor = "";
      this.modifier = "";
      this.changetime = "";
      this.changetimeto = "";
    }
  },
};
</script>


<style>
.el-col {
  border-radius: 4px;
}

#create {
  width: 1000px;
  margin: 50px 150px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>










<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="Issue No">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="创建人">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
</el-form>










