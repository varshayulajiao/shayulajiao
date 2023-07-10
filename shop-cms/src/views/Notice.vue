<template>
<<<<<<< HEAD
    <el-card>
        
=======
    <el-main class="a3">

>>>>>>> caa659e74e20b431ac8a1ad4ec3d04bb328f3219
        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            新增
        </el-button>

        <el-drawer v-model="drawer" title="新增" size="50%">
            <div>
                <span style="color: red;">*</span>公告标题
                <el-input v-model="input" placeholder="公告标题" />
                <span style="color: red;">*</span>公告内容
                <el-input v-model="input1" placeholder="公告内容" />
            </div>
        </el-drawer>

        <el-icon class="a1">
            <Refresh />
        </el-icon>
<<<<<<< HEAD
        <el-table :data="tableData">
            <el-table-column prop="date" label="公告标题" />
            <el-table-column prop="name" label="发布时间" />
=======

        <el-table :data="tableData">
            <el-table-column prop="date" label="公告标题" width="300" />
            <el-table-column prop="name" label="发布时间" width="180" />
>>>>>>> caa659e74e20b431ac8a1ad4ec3d04bb328f3219
            <el-table-column label="操作">
                <el-button><span class="a2">修改</span></el-button>
                <el-button><span class="a2">删除</span></el-button>
            </el-table-column>
        </el-table>

        <el-pagination background layout="prev, pager, next" :total="10" class="a4">
        </el-pagination>
    </el-card>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const input = ref('')
const input1 = ref('')

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('You still have unsaved data, proceed?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}
const tableData = [
    {
        date: 'ad',
        name: '2023-07-07 13:35:58',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '21',
        name: '2023-07-07 00:51:03',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '222',
        name: '2023-07-06 19:44:07',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'c9',
        name: '2023-07-06 18:01:07',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'c8',
        name: '2023-07-06 18:01:00',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'c7',
        name: '2023-07-06 18:00:54',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'c6',
        name: '2023-07-06 18:00:48',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'c5',
        name: '2023-07-06 18:00:42',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'cs4',
        name: '2023-07-06 18:00:34',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: 'cs3',
        name: '2023-07-06 18:00:29',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>
<style scoped>
.a1 {
    float: right;
    font-size: 20px;
}

.a2 {
    color: skyblue;
}

.a3 {
    background-color: white;
}

.a4 {
    justify-content: center;
}
:deep(.el-table tr){
display: flex;
justify-content: space-between;
width: 1310px;
}
:deep(.el-table tr th){
    margin-right: 100px;
}
</style>