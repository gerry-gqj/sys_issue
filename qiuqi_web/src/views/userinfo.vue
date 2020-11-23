<template>
  <div>
    <!-- <el-dialog title="账号注册"
                 :visible.sync="dialogVisible1"
                 width="30%"
                 :before-close="handleClose"> -->

    <div class="main">
      <el-row>
        <el-col :span="12" :offset="12">
          <div class="grid-content"></div>

          <el-card class="box-card">
            <h2 class="title">修改用户信息</h2>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="登录ID：" prop="loginid">
                <el-input v-model="ruleForm.loginid" disabled></el-input>
              </el-form-item>
              <el-form-item label="姓名：" prop="name">
                <el-input
                  v-model="ruleForm.name"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item label="邮箱：" prop="mail">
                <el-input
                  v-model="ruleForm.mail"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item label="输入密码：" prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  maxlength="30"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input
                  type="password"
                  v-model="ruleForm.checkPass"
                  autocomplete="off"
                  maxlength="30"
                  show-password
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >提交</el-button
                >
                <el-button @click="goback">取消</el-button>
              </el-form-item>
            </el-form>
          </el-card>
          <!-- </el-dialog> -->
        </el-col>
      </el-row>
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
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible1: true,

      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
        mail: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        id: "",
        loginid: "",
        pass1: "",
      },
      rules: {
        id: [
          { required: true, message: "请输入系统ID", trigger: "blur" },
          { max: 30, message: "长度在 30 个字符", trigger: "blur" },
        ],
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          // { pattern: /^(?![a-zA-Z]+$)(?![A-Z\W_]+$)(?![a-z\W_]+$)[a-zA-Z\W_]{8,30}$/, message: '密码为大小写字母，特殊符号必须包含三种，长度为 8 - 30位' }
        ],
        pass1: [{ required: true, validator: validatePass, trigger: "blur" }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { max: 30, message: "长度在 30 个字符", trigger: "blur" },
        ],
        mail: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { max: 30, message: "长度在 30 个字符", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        loginid: [{ max: 30, message: "长度在 30 个字符", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
            .post(
              "http://120.78.176.2:8080/loginregister/register",
              this.$qs.stringify({
                email: this.ruleForm.mail,
                name: this.ruleForm.name,
                password: this.ruleForm.pass,
                userID: this.ruleForm.loginid,
              })
            )
            .then(function (res) {
              if (res.data.status == "注册成功") {
                alert("注册成功，现在返回登录页面");
                window.location.href = "./";
              } else if (res.data.status == "用户名已存在") {
                alert("用户名已存在！请重新输入");
                window.location.href = "./Registered";
              } else {
                alert("输入信息有误!请重新输入");
                window.location.href = "/Registered";
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          alert("注册失败!");
          return false;
        }
      });
    },
    // resetForm (formName) {
    //   this.$refs[formName].resetFields();
    // },
    goback() {
      this.$confirm("此操作将会放弃修改，是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      }).then(() => {
        this.$message(
          {
            type: "success",
            message: "修改失败，成功返回!",
          },
          this.$router.go(-1)
        );
        // }).catch(() => {
        //   this.$message({
        //     type: 'info',
        //     // message: '已取消删除'
        //   });
      });
    },

    // handleClose (done) {
    //   this.$confirm('确认关闭？')
    //     .then(_ => {
    //       done();
    //       window.location.href = "./";
    //     })
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
  line-height: 160px;
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
  height: 100%;
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

.main {
  background-color: #4654cccc;
}
</style>