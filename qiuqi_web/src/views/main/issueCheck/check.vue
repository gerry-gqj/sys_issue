<template>
  <div>
    <!-- <h3 style="text-align: center">Issue 查询</h3>
    <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr />
    <el-row :gutter="0">
      <el-col :span="6" offset="1">
        <div class="grid-content bg-purple">
          <!-- Issue No
          <el-input v-model="issueno"
                    placeholder=""
                    style="text-align:center; width:150px"
                    maxlength="30"
                    clearable></el-input> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="Issue No">
              <el-input
                v-model="formLabelAlign.issueno"
                placeholder="请输入"
                style="text-align: center; width: 200px"
              ></el-input>
            </el-form-item>
            <el-form-item label="创建人">
              <el-input
                v-model="formLabelAlign.createtor"
                placeholder="请输入"
                style="text-align: center; width: 200px"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <!-- <span>Issue状态<el-select v-model="issuserank"
                       placeholder="请选择"
                       style="text-align:center; width:150px"
                       clearable>
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select></span> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="Issue状态">
              <el-select
                v-model="formLabelAlign.issuserank"
                placeholder="请选择"
                style="text-align: center; width: 200px"
                clearable
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="修改人">
              <el-input
                v-model="formLabelAlign.modifier"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                disabled
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <!-- <span>
            创建时间
            <el-date-picker v-model="createtime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="formLabelAlign.createtime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign.createtimeto)"
                style="text-align: center; width: 150px"
                clearable
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="修改时间">
              <el-date-picker
                v-model="formLabelAlign.changetime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign.changetimeto)"
                style="text-align: center; width: 150px"
                clearable
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="至">
              <el-date-picker
                v-model="formLabelAlign.createtimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign.createtime)"
                style="text-align: center; width: 150px"
                clearable
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="至">
              <el-date-picker
                v-model="formLabelAlign.changetimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign.changetime)"
                style="text-align: center; width: 150px"
                clearable
                maxlength="30"
              ></el-date-picker>
            </el-form-item>
          </el-form>
          <!-- <span>至
            <el-date-picker v-model="createtimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span> -->
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="0">
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
    </el-row> -->
    <div>
      <el-col
        :xs="22"
        :sm="22"
        :md="22"
        :lg="22"
        :xl="22"
        style="text-align: center"
      >
        <div class="button">
          <el-button type="primary" @click="golist">查询</el-button>
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
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "待修改",
        },
        {
          value: "选项2",
          label: "待验证",
        },
        {
          value: "选项3",
          label: "已关闭",
        },
      ],
      formLabelAlign: {
        issueno: "",
        issuserank: "",
        createtime: "",
        createtimeto: "",
        createtor: "",
        modifier: "",
        changetime: "",
        changetimeto: "",
      },
      value: "",
      labelPosition: "left",

      pickerOptions0(val) {
        return {
          disabledDate(time) {
            return time.getTime() > new Date(val).getTime();
          },
        };
      },
      pickerOptione0(val) {
        return {
          disabledDate(time) {
            return time.getTime() < new Date(val).getTime();
          },
        };
      },
    };
  },
  methods: {
    golist() {
      this.$router.push("/main/check/list");
      // window.location.href = "/main/check/list";
    },
    clearvalues() {
      this.formLabelAlign.issueno = "";
      this.formLabelAlign.issuserank = "";
      this.formLabelAlign.createtime = "";
      this.formLabelAlign.createtimeto = "";
      this.formLabelAlign.createtor = "";
      this.formLabelAlign.modifier = "";
      this.formLabelAlign.changetime = "";
      this.formLabelAlign.changetimeto = "";
    },
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