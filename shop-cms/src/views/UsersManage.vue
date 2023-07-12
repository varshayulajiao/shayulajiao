<template>
    <div>
        <el-card >
            <template #header>
                <div class="card-header">
                    <el-form label-width="120px" class="form-box" ref="searchFormRef" >
                        <el-form-item label="关键词">
                                <el-input v-model="searchRuleForm.keyWords" placeholder="手机号/邮箱/会员昵称" />
                        </el-form-item>
                        <el-form-item label="会员等级" v-if="isShow">
                            <el-select v-model="searchRuleForm.userLevel" placeholder="请选择会员等级">
                                <el-option label="钻石会员" value="钻石会员" />
                                <el-option label="黄金会员" value="黄金会员" />
                                <el-option label="白银会员" value="白银会员" />
                                <el-option label="普通会员" value="普通会员" />
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit(searchRuleForm)">搜索</el-button>
                            <el-button @click="resetForm(searchRuleForm)">重置</el-button>
                            <el-button @click="isShow=true" v-if="!isShow">展开<el-icon><ArrowDown /></el-icon></el-button>
                            <el-button @click="isShow=false" v-else>收起<el-icon><ArrowUp /></el-icon></el-button>
                        </el-form-item>
                    </el-form>
                    <ListHeader />
                </div>
            </template>
            <el-table :data="pageDataRef" stripe table-layout="auto">
                <el-table-column label="会员"  >
                    <template #default="scope">
                       <div>{{ scope.row.username }}</div>
                       <div style="font-size: 12px;">ID：{{ scope.row.id }}</div>
                    </template>
                </el-table-column>  
                <el-table-column prop="userlevel" label="会员等级"  />
                <el-table-column prop="time" label="登陆注册"  />
                <el-table-column prop="onoff" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.onOff" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" >
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
            <el-drawer v-for="item in pageDataRef" v-model="item.drawer" title="修改">
                <el-form label-width="120px" class="demo-ruleForm" status-icon>
                    <el-form-item label="用户名">
                        <el-input type="text" v-model="tableData[formIndex].username" />
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="tableData[formIndex].password" />
                    </el-form-item>
                    <el-form-item label="昵称">
                        <el-input type="text" v-model="tableData[formIndex].username" />
                    </el-form-item>
                    <el-form-item label="头像">
                        <el-upload class="avatar-uploader"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :show-file-list="false"
                            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>
                    <!-- 修改抽屉的下拉选择框 -->
                    <el-form-item label="会员等级">
                            <el-select v-model="searchRuleForm.userLevel" placeholder="请选择会员等级">
                                <el-option label="钻石会员" value="钻石会员" />
                                <el-option label="黄金会员" value="黄金会员" />
                                <el-option label="白银会员" value="白银会员" />
                                <el-option label="普通会员" value="普通会员" />
                            </el-select>
                    </el-form-item>
                    <el-form-item label="手机">
                        <el-input type="text" v-model="tableData[formIndex].telephone" />
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input type="text" v-model="tableData[formIndex].email" />
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-switch v-model="switchValue" />
                    </el-form-item>

                </el-form>
                <template #footer>
                    <div style="flex: auto">
                        <el-button type="primary">提交</el-button>
                        <el-button>取消</el-button>
                    </div>
                </template>
            </el-drawer>
            <el-pagination background layout="prev, pager, next" :total="tableDataRef?.length" :page-size="pageSize" @current-change="handleClick"/>
        </el-card>
    </div>
</template>

<script setup>
import ListHeader from '../components/ListHeader.vue'
import {usersList} from '../api/users'
import { ref,computed,reactive} from 'vue';
const searchRuleForm=reactive({
    keyWords:'',
    userLevel:''
})
const searchFormRef=ref(null)
const isShow=ref(false)

const formIndex = ref('')
const switchValue = ref(false)
const imageUrl = ref('')

const onSubmit = (formEl) => {
    tableDataRef.value= tableData.value.filter((item)=>item.username.includes(formEl.keyWords))
    console.log(tableDataRef.value)
}
const resetForm=(formEl)=>{
    formEl.keyWords=''
    formEl.userLevel=''
}
const handleDrawer = (index) => {
    tableData.value[index].drawer = true    
    formIndex.value = index

}
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
const handlerem = (index) => {
    tableData.value.splice(index, 1)
}
const tableData = ref([])
//请求用户列表
usersList().then((val)=>{
    console.log(val)
    const data=val.data
    data.forEach((item)=>{
        tableData.value.push({
        username: item.username,
        userlevel: item.userLevelId,
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: item.password,
        telephone: item.phone,
        email: item.email,
        id:item.id
        })
    })
})
//分页功能
const pageSize=ref(10)
const startPage=ref(0)
/* const tableDataRef=computed(()=>{
        return tableData.value.filter((item)=>item.username.includes(searchRuleForm.keyWords))
    }) */
const tableDataRef=ref(null)
const pageDataRef=computed(()=>{//slice包前不包后 起始索引0 截止索引2 得到的是0,1
    if(tableDataRef.value!=null){
      return  tableDataRef.value.slice(startPage.value*pageSize.value,(startPage.value+1)*pageSize.value)
    }else{
        return tableData.value
    }
})
const handleClick=((index)=>{
    console.log(index)
    startPage.value=index-1
})
</script>

<style scoped>
.form-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-box .form-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.form-box .form-left .form-left-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.el-table {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.form-box .form-left .form-left-item .el-select {
    margin-left: 10px;
    width: 200px;
}

.el-pagination {
    margin-top: 20px;
    justify-content: center;
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