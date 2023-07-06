<template>
    <el-row>
        <el-col :span="16" class="left-bg">
            <div class="left-title">
                <div class="left-font">欢迎光临</div>
            </div>
        </el-col>
        <el-col :span="8" class="right-bg">
            <div class="right-title">
                <div class="right-font">欢迎回来</div>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" status-icon>
                    <el-form-item label="用户名" prop="username"  class="right-input">
                        <el-input v-model="ruleForm.username"  placeholder="请输入用户名"/>
                    </el-form-item>
                    <el-form-item label="密码" prop="password"  class="right-input">
                        <el-input v-model="ruleForm.password" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item class="right-footer">
                        <el-button size="large" type="primary" @click="submitForm(ruleFormRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { ref, reactive } from 'vue';
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
            console.log('submit!', ruleForm)
        } else {
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
    background-color: rgba(0, 0, 255, 0.7)
}

.right-bg {
    background-color: white;
}
.right-bg .right-title{
    margin: 350px auto;

}
.left-bg .left-title {
    margin: 400px auto;
    font-size: 40px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.right-bg .right-title .right-font{
     font-weight: bold;
     font-size: 36px;
     color: #000;
     margin-bottom: 50px;
     margin-left: 230px;
}
.right-bg .right-title .el-form{
    margin-left: 100px;
}
.right-bg .right-title .right-input{
    width: calc(100% - 120px);
}
.right-bg .right-title .right-footer{
margin-left: 20px;
}
.right-bg .right-title .right-footer .el-button{
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border-radius: 20px;
}
.left-bg .left-title .left-font {
    font-weight: bold;
}

</style>