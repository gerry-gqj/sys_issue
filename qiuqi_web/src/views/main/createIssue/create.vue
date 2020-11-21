<template>
  <div id="create">
    <div>
      <h2>Issue题目</h2>

      <el-input type="text"
                placeholder="内容"
                v-model="title"
                maxlength="80"
                show-word-limit></el-input>
    </div>
    <!-- 基本信息栏 -->
    <h2>基本信息</h2>
    <hr style="border: 1px dashed #000; height: 1px" />
    <el-row :gutter="50">
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>Issue No.</p>
          <p>
            <el-input v-model="issueid"
                      placeholder="系统自动生成"
                      :disabled="true"></el-input>
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
            <el-input v-model="createtime"
                      placeholder="系统自动生成"
                      :disabled="true"></el-input>
          </p>
        </div>
      </el-col>
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>Issue类型</p>
          <p>
            <el-input v-model="issusetype"
                      placeholder="内容"
                      maxlength="30"></el-input>
          </p>
        </div>
      </el-col>
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
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
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
          <p>影响版本</p>
          <p>
            <el-input v-model="version"></el-input>
          </p>
        </div>
      </el-col>
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <p>计划修改时间</p>
          <p>
            <el-date-picker v-model="planTime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="width: 100%"></el-date-picker>
          </p>
        </div>
      </el-col>
    </el-row>
    <!-- 重现步骤栏 -->
    <div style="margin-bottom: 100px">
      <h2>重现步骤</h2>
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24">
        <div class="grid-content">
          <el-input type="textarea"
                    placeholder="请输入内容"
                    rows="5"
                    v-model="step"
                    maxlength="2000"
                    show-word-limit></el-input>
        </div>
      </el-col>
    </div>
    <!-- 指派修改人栏 -->
    <div>
      <h2>指派修改人栏</h2>
      <el-col :xs="12"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="6">
        <div class="grid-content">
          <el-input v-model="userid"
                    placeholder="内容"></el-input>
        </div>
      </el-col>
      <br /><br />
    </div>
    <!-- 提交按钮 -->
    <div>
      <el-col :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              style="text-align: center">
        <el-button round @click="createIssue()">提交</el-button>
      </el-col>
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
      username:"",
      title: "",
      issueid: "",
      createtime: "",
      issuserank: "",
      issusetype: "",
      version: "",
      planTime: "",
      realtime: "",
      step: "",
      userid: "",
      value: "",
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
    };
  },
  mounted() {
    this.username = localStorage.getItem('username')
    console.log(this.username)
  },
  methods:{
    //获取当前时间
    gettime(){
      const date = new Date();
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      return date.getFullYear() + "-" + month + "-" + strDate
          + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
    //新增Issue接口--post
    createIssue(){
      const time = this.gettime();
      this.$axios.post('http://120.78.176.2:8080/issue/createIssue',
          this.$qs.stringify({
            creater: this.username,
            level: this.issuserank,
            plantime:time,
            step:this.step,
            title:this.title,
            type:this.issusetype,
            userID:parseInt(this.userid),
            version:this.version
          }))
          .then((res) => {
            console.log(res.data)
            if (res.data.status === "创建成功") {
              this.$message({
                type: 'success',
                message: '创建成功'
              });
            }else {
              this.$message({
                type: 'error',
                message: '创建失败'
              });
            }
          }).catch(function (error) {
        console.log(error);
      });
    }
  }
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
