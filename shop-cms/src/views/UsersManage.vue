<template>
    <div>
        <el-card shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form label-width="120px" class="form-box">
                        <el-form-item label="关键词">
                            <div class="form-left">
                                <el-input v-model="keyWords" placeholder="手机号/邮箱/会员昵称" />
                                <div class="form-left-item">
                                    <div style="width: 200px;text-align: right;">会员等级</div>
                                    <el-select v-model="userLevel" class="m-2" placeholder="请选择会员等级" size="large">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </div>
                            </div>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">搜索</el-button>
                            <el-button>重置</el-button>
                        </el-form-item>
                    </el-form>
                    <ListHeader />
                </div>
            </template>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column label="会员" width="380px" >
                    <template #default="scope">
                       <div>{{ scope.row.username }}</div>
                       <div style="font-size: 12px;">ID：{{ scope.row.id }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="userlevel" label="会员等级" width="500px" />
                <el-table-column prop="time" label="登陆注册" width="400px" />
                <el-table-column prop="onoff" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.onOff" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="180px">
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
                        <el-select v-model="userLevel" class="m-2" placeholder="请选择会员等级" size="large">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
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
            <el-pagination background layout="prev, pager, next" :total="1000" />

        </el-card>



    </div>
</template>

<script setup>
import ListHeader from '../components/ListHeader.vue'
import { ref } from 'vue';
const keyWords = ref('')
const userLevel = ref('')
const formIndex = ref('')
const switchValue = ref(false)
const imageUrl = ref('')
const onSubmit = () => {

}
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
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
    {
        username: 'xiaoming',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
        drawer: false,
        password: '',
        telephone: '13112341234',
        email: '',
        id:200
    },
])
const options = ref([
    {
        value: '王者会员',
        label: '王者会员',
    },
    {
        value: '钻石会员',
        label: '钻石会员',
    },
    {
        value: '黄金会员',
        label: '黄金会员',
    },
    {
        value: '白银会员',
        label: '白银会员',
    },
    {
        value: '青铜会员',
        label: '青铜会员',
    },
    {
        value: '普通会员',
        label: '普通会员',
    },
])
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