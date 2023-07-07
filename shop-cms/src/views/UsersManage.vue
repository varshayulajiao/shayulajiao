<template>
    <div>
        <el-card shadow="never">
            <template #header>
                <div class="card-header">
                    <el-form label-width="120px">
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
                <el-table-column prop="username" label="会员" width="380px" />
                <el-table-column prop="userlevel" label="会员等级" width="500px" />
                <el-table-column prop="time" label="登陆注册" width="400px" />
                <el-table-column prop="onoff" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.onOff" />
                    </template>
                </el-table-column>
                <el-table-column label="操作" fixed="right" width="180px">
                    <template #default="scope" class="table-foot">
                        <el-button type="primary" link @click="handleDrawer">修改</el-button>
                        <el-popconfirm title="是否要删除该记录?" @confirm="handlerem(scope.$index)">
                            <template #reference>
                                <el-button type="primary" link>删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
                 
            </el-table>
           <el-pagination background layout="prev, pager, next" :total="1000" />      
         
        </el-card> 
       
                    
         
    </div>
</template>

<script setup>
import ListHeader from '../components/ListHeader.vue'
import { ref } from 'vue';
const keyWords = ref('')
const userLevel = ref('')
const onSubmit = () => {

}
const handleDrawer = () => {

}
const handlerem = (index) => {
    tableData.value.splice(index, 1)
}
const tableData = ref([
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
    },
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
    },
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
    },
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
    },
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
    },
    {
        username: '小明',
        userlevel: '黄金会员',
        time: '注册时间:2023-07-06 10:28:26',
        onoff: false,
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
.el-form {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.el-form .form-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.el-form .form-left .form-left-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.el-table {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.el-form .form-left .form-left-item .el-select {
    margin-left: 10px;
    width: 200px;
}
.el-pagination{
    margin-top: 20px;
  justify-content: center;
}

</style>