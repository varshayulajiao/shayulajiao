<template>
    <div class="b1">
        <!-- 搜索框 -->
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp关键词<el-input v-model="input" placeholder="要搜索的商品" class="a1" />
        <!-- 重置搜索按钮 -->
        <el-button class="a2">重置</el-button>
        <el-button type="primary" class="a2">搜索</el-button>
        <!-- 表格 -->
        <el-table :data="tableData" :border="parentBorder" style="width: 100%">
            <el-table-column type="expand">
                <template #default="props">
                    <p m="t-0 b-2">
                        <img style="border-radius: 50%; margin-left: 120px; width: 50px;"
                            src="https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/userpic/6.jpg"
                            alt="">
                        u********rr 2019-09-01 20:34:27
                    </p>
                    <p m="t-0 b-2" style="margin-left: 188px;">
                        商品不错哦
                    </p>
                    <p m="t-0 b-2">
                        <img style="margin-left: 188px;"
                            src="	https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/demo101.jpg"
                            alt="">
                    </p>
                    <p m="t-0 b-2">
                        <el-input style="margin-left: 188px;"
                            v-model="textarea" 
                            :rows="2" type="textarea"
                            placeholder="评论" />
                    </p>
                    <p m="t-0 b-2" style="margin-left: 188px; margin-top: 5px;">
                        <el-button type="primary">
                            回复
                        </el-button>
                        <el-button>
                            取消
                        </el-button>
                    </p>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="ID" width="80" />
            <el-table-column prop="name1" label="商品" width="300">
                <img src="https://yanxuan-item.nosdn.127.net/4c536c4ea486f8d5c8a172bfaaf5b680.png"
                     alt=""  >
                    小米-天鹅绒柔暖四件套
            </el-table-column>
            <el-table-column prop="name2" label="评价信息" width="250">
                用户：u********rr 
                <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" />
            </el-table-column>
            <el-table-column prop="name3" label="评价时间" width="200" />
            <el-table-column prop="name4" label="是否显示" width="180">
                <template #default="scope">
                    <el-switch v-model="scope.row.value1" />
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 输入框
const input = ref('')
// 滑块
const value1 = ref(true)
// 输入框
const textarea = ref('')
// 评价信息
const value = ref(3.7)
// 列表
const parentBorder = ref(false)
const childBorder = ref(false)
const tableData = [
    {
        name: '168',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '165',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '111',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '54',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '99',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '123',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
    {
        name: '88',
        name1: '',
        name2: '用户：u****r',
        name3: '2019-09-01 20:34:27',
        value1: 'false'
    },
]

</script>

<style scoped>
.a1 {
    width: 400px;
    margin-left: 10px;
    /* margin-top: 20px; */
}

.a2 {
    float: right;
    margin-left: 10px;
}

.b1{
    background: white;
    padding-top: 30px;
}

img {
    width: 70px;
}
</style>