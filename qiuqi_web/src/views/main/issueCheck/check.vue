<template>
  <div>
    <h3 style="text-align: center;">Issue 查询</h3>
    <!-- <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr>
    <el-row :gutter="50">
      <!-- issue no -->
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>Issue No</p>
          <p>
            <el-input v-model="issueno"
                      placeholder=""
                      style="text-align:center;"
                      maxlength="1"></el-input>
          </p>
        </div>
      </el-col>
      <!-- issue等级 -->
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>Issue等级</p>
          <p>
            <el-select v-model="issuserank"
                       filterable
                       placeholder="请选择"
                       maxlength="30">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </p>
        </div>
      </el-col>

      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>创建时间</p>
          <p>
            <el-date-picker v-model="createtime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="width: 100%"></el-date-picker>
          </p>
        </div>
      </el-col>
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>至</p>
          <p>

            <el-date-picker v-model="createtimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="width: 100%"></el-date-picker>

          </p>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="50">
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>创建人</p>
          <p>
            <el-input v-model="createtor"></el-input>
          </p>
        </div>
      </el-col>
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>修改人</p>
          <p>
            <el-input v-model="modifier"
                      style="width: 100%"></el-input>
          </p>
        </div>
      </el-col>

      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>修改时间</p>
          <p>
            <el-date-picker v-model="changetime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="width: 100%"></el-date-picker>
          </p>
        </div>
      </el-col>

      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>至</p>
          <p>
            <el-date-picker v-model="changetimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="width: 100%"
                            maxlength="30"></el-date-picker>
          </p>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              style="text-align: center">
        <div class="button">
          <el-button type="primary"
                     @click="golist">查询</el-button>
          <el-button @click="clearvalues">清空</el-button>
        </div>
      </el-col>
    </div>
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






