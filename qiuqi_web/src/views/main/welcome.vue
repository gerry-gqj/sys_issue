<template>
  <div>
    <!-- <div class="front">
      <h1>欢迎回来，{{ user }}<br />您的身份是：{{ role }}</h1>
      <p>{{ currentTime }}</p>
    </div> -->
    <el-row :gutter="0" v-if="this.role == '普通员工'">
      <el-col :span="18" :offset="2"
        ><div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>我的创建的 Issue</span>
              <!-- <el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              > -->
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </div></el-col
      >
      <!-- <el-col :span="8" :offset="2"
        ><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>我收到的 Issue</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{ "列表内容 " + o }}
            </div>
          </el-card>
        </div></el-col
      > -->
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      role: "",
      user: "",
      currentTime: "",
    };
  },
  mounted() {
    this.role = localStorage.getItem("role");
    // this.name = localStorage.gettItem("username");
    this.user = localStorage.getItem("username");
    // let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
    // this.timer = setInterval(() => {
    //   _this.date = new Date(); // 修改数据date
    // }, 1000)
  },
  //  beforeDestroy() {
  //   if (this.timer) {
  //     clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
  //   }
  // }
};
</script>
  
<style>
.el-col {
  border-radius: 4px;
}
/* .bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>