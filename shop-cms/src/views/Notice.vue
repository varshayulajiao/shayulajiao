<template>
    <el-main class="a3">

        <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
            新增
        </el-button>

        <el-drawer v-model="drawer" title="新增" size="50%">
            <div>
                <span style="color: red;">*</span>公告标题
                <el-input v-model="input" placeholder="公告标题"/>
                <span style="color: red;">*</span>公告内容
                <el-input v-model="input1" placeholder="公告内容" />
                <el-button type="primary" style="margin-top: 15px;" @click="onAddItem">提交</el-button>
                <el-button type="primary" style="margin-top: 15px;" @click="drawer = false">取消</el-button>
            </div>
        </el-drawer>

        <el-icon class="a1">
            <Refresh />
        </el-icon>

        <el-table :data="tableData">
            <el-table-column prop="date" label="公告标题" width="300" />
            <el-table-column prop="name" label="发布时间" align="center" />
            <el-table-column label="操作" align="right">
                <template #default="scope">
                    <el-button plain type="primary" style="margin-left: 16px"
                        @click="handleModifyDrawer(scope.$index, scope.row)">修改</el-button>
                    <el-button @click="handleCarouselDrawer(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-drawer v-for="item,index in tableData" v-model="item.drawer1" title="修改" :with-header="false">
            修改
            <div>
                <span style="color: red;">*</span>公告标题
                <el-input v-model="input2" />
                <span style="color: red;">*</span>公告内容
                <el-input v-model="input3" />
                <el-button type="primary" style="margin-top: 15px;" @click="ontijiao(index)">提交</el-button>
                <el-button type="primary" style="margin-top: 15px;" @click="item.drawer1 = false">取消</el-button>
            </div>
        </el-drawer>

        <el-pagination background layout="prev, pager, next" :total="10" class="a4">
        </el-pagination>
    </el-main>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { ElMessage } from 'element-plus'
import dayjs from 'dayjs'

const input = ref('')
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const drawer = ref(false)
const innerDrawer = ref(false)
const now = new Date()

const onAddItem = () => {
    now.setDate(now.getDate() + 1)
    tableData.value.unshift({
    date: input.value,
    name: dayjs(now).format('YYYY-MM-DD hh:mm:ss'),
    address: '',
    drawer1: false
})
}
const ontijiao = (index) => {
    tableData.value[index].date = input2.value
}

const handleModifyDrawer = (index, row) => {
    tableData.value[index].drawer1 = !tableData.value[index].drawer1
    console.log(tableData[index])
}
const handleCarouselDrawer = (index, row) => {
    ElMessageBox.confirm(
        '是够删除该纪录?',
        {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning',
        },
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '删除成功',
            })
            tableData.value.splice(index, 1)
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消成功',
            })
        })
}

const handleClose = (done: () => void) => {
    ElMessageBox.confirm('You still have unsaved data, proceed?')
        .then(() => {
            done()
        })
        .catch(() => {
            // catch error
        })
}

const tableData = ref([
    {
        date: 'ad',
        name: '2023-07-07 13:35:58',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: '21',
        name: '2023-07-07 00:51:03',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: '222',
        name: '2023-07-06 19:44:07',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'c9',
        name: '2023-07-06 18:01:07',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'c8',
        name: '2023-07-06 18:01:00',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'c7',
        name: '2023-07-06 18:00:54',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'c6',
        name: '2023-07-06 18:00:48',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'c5',
        name: '2023-07-06 18:00:42',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'cs4',
        name: '2023-07-06 18:00:34',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
    {
        date: 'cs3',
        name: '2023-07-06 18:00:29',
        address: 'No. 189, Grove St, Los Angeles',
        drawer1: false
    },
])
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
</style> 