<template>
    <div>
        <el-card>
            <el-row>
            <el-col :span="12">
                <el-form  ref="ruleFormRef" :model="ruleForm">
                <el-form-item label="关键词" >
                    <el-input v-model="ruleForm.keyword" placeholder="管理员昵称" />
                </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12" class="header-btn-box">
                <el-form-item >
                        <el-button type="primary" @click="submitForm(ruleFormRef)">
                            搜索
                        </el-button>
                        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                    </el-form-item>
            </el-col>
            </el-row>
            <ListHeader />
            <el-table :data="tableData" stripe table-layout="auto">
                <el-table-column label="管理员">
                    <template #default="scope">
                    <div class="admin-box">
                        <div class="img-box">
                            <img :src="scope.row.url">
                        </div>
                        <div>
                            <div>{{ scope.row.username }}</div>
                            <div style="font-size: 12px;">ID：{{ scope.row.id }}</div>
                        </div>
                    </div>
                    </template>
                </el-table-column>  
                <el-table-column prop="onoff" label="状态" >
                    <template #default="scope">
                        <el-switch v-model="scope.row.onOff" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" align="right"  >
                    <template #default="scope" class="table-foot">
                        <el-button type="primary" link @click="handleDrawer(scope.$index)">修改</el-button>
                        <el-popconfirm title="是否要删除该记录?" @confirm="handlerem(scope.$index)">
                            <template #reference>
                                <el-button type="primary" link>删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <el-drawer v-for="item in tableData" v-model="item.drawer" title="修改">
                <el-form label-width="120px" class="demo-ruleForm" status-icon>
                    <el-form-item label="用户名">
                        <el-input type="text" v-model="tableData[formIndex].username" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="tableData[formIndex].password" />
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload class="avatar-uploader"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="item.url" :src="item.url" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <!-- 修改抽屉的下拉选择框 -->

                    <el-form-item label="状态">
                        <el-switch v-model="item.onoff" />
                    </el-form-item>

                </el-form>
                <template #footer>
                    <div style="flex: auto">
                        <el-button type="primary">提交</el-button>
                        <el-button>取消</el-button>
                    </div>
                </template>
            </el-drawer>
        </el-card>
    </div>
</template>

<script setup>  
import {ref,reactive} from 'vue'
import ListHeader from '../components/ListHeader.vue'
const ruleFormRef=ref(null)
const ruleForm=reactive({
    keyword:''
})
const submitForm =  (formEl) => {
  if (!formEl) return
   formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!',ruleForm)
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

//表格数据部分
const formIndex = ref('')
const handleDrawer = (index) => {
    tableData.value[index].drawer = true
    formIndex.value = index

}
const handlerem = (index) => {
    tableData.value.splice(index, 1)
}
const tableData = ref([
    {
        username: 'xiaoming',
        onoff: false,
        drawer: false,
        password: '',
        id:200,
        url:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg'
    },
    {
        username: 'xiaoming',
        onoff: false,
        drawer: false,
        password: '',
        id:200,
        url:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg'
    },
    {
        username: 'xiaobai',
        onoff: false,
        drawer: false,
        password: '',
        id:200,
        url:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg'
    },
    {
        username: 'xiaoming',
        onoff: false,
        drawer: false,
        password: '',
        id:200,
        url:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af03d1b2aeb.jpg'
    }
])
//修改抽屉的内容部分
const handleAvatarSuccess = (data) => {
    console.log(data)
}
const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg'&&rawFile.type !== 'image/png') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}
</script>

<style scoped>
:deep(.header-btn-box .el-form-item__content){
    justify-content: flex-end;
}
:deep(.el-input__wrapper){
    width: 250px;
    flex-grow: unset;
}
.img-box{
    height: 40px;
    width: 40px;
    overflow: hidden;
    margin-right:10px
}
.img-box img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
.admin-box{
    display: flex;
}
.avatar-uploader .avatar {
    width: 100px;
    height: 100px;
    display: block;
}

.avatar-uploader :deep(.el-upload) {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader :deep(.el-upload:hover) {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    text-align: center;
}
</style>