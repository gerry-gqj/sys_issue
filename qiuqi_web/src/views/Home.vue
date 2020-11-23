<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="front">
      <el-container>
        <el-header>GBA Issue管理系统</el-header>
        <!-- <el-main>
        <el-row>
          <el-button @click="FormRegistered()"
                     round>注册</el-button>
          <el-button round
                     @click="FormLogin()">登陆</el-button>
        </el-row>
      </el-main> -->
        <el-card class="box-card">
          <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->

          <!-- <el-tab-pane label="注册" name="first">
       <el-button @click="FormRegistered()"
                   round>注册</el-button>
    </el-tab-pane> -->
          <h2 class="title">登录</h2>
          <!-- 登录模块 -->
          <!-- <el-tab-pane label="登录" name="second"> -->
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名：" prop="id">
              <el-input v-model="ruleForm.id"></el-input>
            </el-form-item>
            <el-form-item label="输入密码：" prop="pass1">
              <el-input
                type="password"
                v-model="ruleForm.pass1"
                autocomplete="off"
                maxlength="30"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="Login('ruleForm')"
                >登录
              </el-button>
              <el-button @click="FormRegistered()">注册</el-button>
              <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
            </el-form-item>
          </el-form>
          <!-- <el-button round
                   @click="FormLogin()">登陆</el-button> -->
          <!-- </el-tab-pane> -->
          <!-- </el-tabs> -->
        </el-card>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      imgSrc: require("../assets/imgs/5.gif") /*用来设置背景图片 */,
      activeName: "second",
      // dialogVisible2: true,
      // dialogVisible3: false,
      ruleForm: {
        // name: '',
        // pass: '',
        // checkPass: '',
        // mail: '',
        delivery: false,
        type: [],
        // resource: '',
        // desc: '',
        id: "",
        loginid: "",
        pass1: "",
      },
      rules: {
        id: [
          { required: true, message: "请输入系统ID", trigger: "blur" },
          { max: 30, message: "长度在 30 个字符", trigger: "blur" },
        ],

        pass1: [{ required: true, validator: validatePass, trigger: "blur" }],

        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { max: 30, message: "长度在 30 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    // FormLogin () {
    //   this.$router.push("main");
    //   // window.location.href = "./main";
    // },
    FormRegistered() {
      // 路由跳转到注册页面
      // this.$router.push("Registered");
      window.location.href = "/Registered";
    },
    // handleClick (tab, event) {
    //   console.log(tab, event);
    // },

    //用户登录
    Login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              "http://120.78.176.2:8080/loginregister/login",
              this.$qs.stringify({
                name: this.ruleForm.id,
                password: this.ruleForm.pass1,
              })
            )
            .then((res) => {
              if (res.data.status == "登陆成功") {
                //登录成功后路由到主页面
                this.$message(
                  {
                    type: "success",
                    message: "登录成功",
                  },
                  // window.location.href = "/",
                  (window.location.href = "/main")
                  // this.$router.push("main"),
                );
                // window.location.href = "./main";
              } else {
                this.$message(
                  {
                    type: "error",
                    message: "登录失败，请检查账号密码!",
                  }
                  // window.location.href = "/",
                );
                // alert('输入信息有误!请重新输入');
                // 密码错误返回登录页面
                // this.$router.push("/");
                // window.location.href = "/Login";
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    // resetForm (formName) {
    //   this.$refs[formName].resetFields();
    // }
  },
};
</script>

<style>
.el-header {
  color: #333;
  text-align: center;
  line-height: 150px;
  font-style: inherit;
  font-size: 35px;
}

.el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
  font-style: inherit;
  font-size: 30px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  /* text-align: center; */
  /*line-height: 160px;*/
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.box-card {
  width: 480px;
  height: 300px;
  margin: 100px;
  align-self: center;
  /* position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto; */
}

.title {
  text-align: center;
}

/* 图片背景样式 */
.background {
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
  z-index: -1;
  position: absolute;
  /* filter: alpha(Opacity=85);
  -moz-opacity: 0.85;
  opacity: 0.85; */
}

/* 图片和内容的层叠显示 */
.front {
  z-index: 1;
  /* position: absolute; */
  /* 设置透明度 */
  filter: alpha(Opacity=85); /*兼容ie*/
  -moz-opacity: 0.85;
  opacity: 0.9;
}
</style>
