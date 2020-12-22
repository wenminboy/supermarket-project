<template>
    <div id="show">
      <div class="login">
        <h1>花生米超市后台系统</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
        <el-form-item label="账号：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="pwd">
          <el-input v-model="ruleForm.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">免校检直接登录</el-button>
        </el-form-item>
      </el-form>
    </div>
       
    </div>
</template>
<style scoped>
  #show{
    background-image:url(../../public/img/1.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 1000px;
  }
 
  .login{
    width: 30%;
    height: 300px;
    background: rgba(255, 255, 255, 0.274);
    position: absolute;
    top: 30%;
    left: 40%;
    padding-right: 50px;
 
    
  }
  h1{
    color:white;
    text-align: center;
  }
  
</style>
<script>
        export default {
          data() {
            return {
              ruleForm: {
                name: '',
                pwd:'' 
              },
              rules: {
                name: [
                  { required: true, message: '请输入账号', trigger: 'blur' },         
                ],
                pwd: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                ],
              }
            };
          },
          methods: {
            submitForm() {
              sessionStorage.setItem('login',JSON.stringify(this.ruleForm))
              this.$router.push({
                path:'homePage'
              })
            },
          }
        }
      </script>