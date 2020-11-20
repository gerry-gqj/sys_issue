<template>
  <div>
    <el-dialog title="账号注册"
               :visible.sync="dialogVisible1"
               width="30%"
               :before-close="handleClose">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="登录ID："
                      prop="loginid">
          <el-input v-model="ruleForm.loginid"></el-input>
        </el-form-item>
        <el-form-item label="姓名："
                      prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱："
                      prop="mail">
          <el-input v-model="ruleForm.mail"></el-input>
        </el-form-item>
        <el-form-item label="输入密码："
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                    maxlength="30"
                    show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                    maxlength="30"
                    show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {

      if (value === '') {
        callback(new Error('请输入密码'));


      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      dialogVisible1: true,

      ruleForm: {
        name: '',
        pass: '',
        checkPass: '',
        mail: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        id: '',
        loginid: '',
        pass1: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入系统ID', trigger: 'blur' },
          { max: 30, message: '长度在 30 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' },
          // { pattern: /^(?![a-zA-Z]+$)(?![A-Z\W_]+$)(?![a-z\W_]+$)[a-zA-Z\W_]{8,30}$/, message: '密码为大小写字母，特殊符号必须包含三种，长度为 8 - 30位' }
        ],
        pass1: [
          { required: true, validator: validatePass, trigger: 'blur' }],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { max: 30, message: '长度在 30 个字符', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { max: 30, message: '长度在 30 个字符', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        loginid: [

          { max: 30, message: '长度在 30 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('http://120.78.176.2:8080/loginregister/register',
            this.$qs.stringify({
              email: this.ruleForm.mail,
              name: this.ruleForm.name,
              password: this.ruleForm.pass,
              userID: this.ruleForm.loginid
            }))
            .then(function (res) {
              if (res.data.status == "注册成功") {
                alert('注册成功，现在返回登录页面');
                window.location.href = "./";
              }
              else if (res.data.status == "用户名已存在") {
                alert('用户名已存在！请重新输入');
                window.location.href = "./Registered";
              }
              else {
                alert('输入信息有误!请重新输入');
                window.location.href = "/Registered";
              }
            }).catch(function (error) {
              console.log(error);
            });

        } else {
          alert('注册失败!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          window.location.href = "./";
        })

    }
  }
}
</script>
<style>
</style>
