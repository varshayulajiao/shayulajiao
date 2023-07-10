<template>
    <el-row>
        <el-col :span="16" class="left-bg">
            <div class="left-title">
                <h2 class="left-font">欢迎光临</h2>
            </div>
        </el-col>
        <el-col :span="8" class="right-bg">
            <div class="right-title">
                <div class="right-font">
                    <h2>
                        欢迎回来
                    </h2>
                    <div class="right-divi">
                        <el-divider>
                            账号密码登录
                        </el-divider>
                    </div>

                </div>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
                    <div class="right-input">
                        <el-form-item prop="username" >
                            <el-input v-model="ruleForm.username" placeholder="请输入用户名" />
                        </el-form-item>
                    </div>
                    <div class="right-input">
                        <el-form-item prop="password" >
                            <el-input v-model="ruleForm.password" placeholder="请输入密码" />
                        </el-form-item>
                    </div>
                    <div class="right-footer">
                        <el-form-item >
                            <el-button size="large" type="primary" @click="submitForm(ruleFormRef)">
                                登录
                            </el-button>
                        </el-form-item>
                    </div>

                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {login} from '../api/users'
import {useRouter} from 'vue-router'
import useLogin from '../stores/user.js'
import { ElMessage } from 'element-plus'
const router=useRouter()
const Login =useLogin()
const ruleFormRef = ref(null)
const ruleForm = reactive({
    username: '',
    password: ''
})
const rules = reactive({
    username: [
        { required: true, message: '用户名不能为空', trigger: 'blur' },

    ],
    password: [
        { required: true, message: '密码不能为空', trigger: 'blur' },

    ]
})
const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid, fields) => {
        if (valid) {
            login(ruleForm).then((val)=>{
               if(val.data.errcode==0){
                    ElMessage.success('登录成功')
                    Login.NowUsername(val.data.username)
                    Login.NowToken(val.data.token)
                    router.push('/')
               }
            })
            console.log('submit!', ruleForm)
        } else {
            ElMessage.error('登录失败')
            console.log('error submit!', fields)
        }
    })
}
</script>

<style scoped>
.el-row {
    height: 970px;
}

.left-bg {
    background-color: rgba(0, 0, 255, 0.7);
    display: flex;
}

.right-bg {
    background-color: white;
    display: flex;
}

.right-bg .right-title {
    width: 100%;
    align-self: center;

}

.left-bg .left-title {
    width: 100%;
    align-self: center;


}

.right-bg .right-title .right-font {
    width: 100%;
}

.right-bg .right-title .right-font .right-divi {
    width: 100%;
    display: flex;
}

.right-bg .right-title .right-font h2 {
    font-weight: bold;
    font-size: 36px;
    color: #000;
    text-align: center;
}

.right-bg .right-title .right-font .el-divider {
    justify-self: center;
    margin-bottom: 50px;
}

.right-bg .right-title .right-font .el-divider :deep(.el-divider__text) {
    font-size: 20px;
    color: #ccc;
}
.right-bg .right-title .right-input {
    width: 80%;
}

.right-bg .right-title .right-footer {
    width:80%;
    display: flex;
  
}

.right-bg .right-title .right-footer .el-button {
   margin-left: 90px;
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border-radius: 20px;
}

.left-bg .left-title .left-font {
    font-size: 40px;
    color: white;
    font-weight: bold;
    text-align: center;
}
</style>