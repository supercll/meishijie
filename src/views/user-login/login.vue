<template>
  <div class="login-section">
    <!-- :rules="rules" -->
    <el-form 
      label-position="top"
      :model="ruleForm" status-icon 
       ref="ruleForm" label-width="100px" class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {login} from '@/service/api'
import { setTimeout } from 'timers';
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name: '',
        checkPass: ''
      },
      rules: {
        checkPass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let loginData = await login(this.ruleForm);
          if(loginData.code !== 0) {
            this.$message({
              message: '用户或密码输入错误，请重新输入',
              type: 'error'
            });
            return;
          }

          if(loginData.code === 0){
            localStorage.setItem('token', loginData.token);
            this.$message({
              message: '登录成功',
              type: 'success'
            });
            this.$router.push({
              name: 'home'
            })
            this.$store.commit('changeLogin', true);
          }

          
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="stylus">
.login-section
  padding 0px 20px
</style>
