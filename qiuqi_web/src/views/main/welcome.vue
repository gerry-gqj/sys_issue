<template>
  <div>
    <h1>欢迎回来，{{ user }}<br />您的身份是：{{ role }}</h1>
    <p>{{ currentTime }}</p>
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
</style>