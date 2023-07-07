<template>
    <el-card shadow="never">
        <template #header>
            <div class="card-header">
                <ListHeader />
            </div>
        </template>
        <el-tree :data="data" :props="{ label: 'name' }" @node-click="handleNodeClick" node-key="id">
            <template #default="{ node, data }">
                <div class="custom-tree-node">
                    <span>{{ node.label }}</span>
                    <div>
                        <el-button text type="primary" @click="handlepro(data.id)">推荐产品</el-button>
                        <el-switch v-model="data.value" />
                        <el-button text type="primary" @click="handleref(data.id)">修改</el-button>
                        <el-popconfirm title="是否要删除当前分类?" @confirm="handlerem">
                            <template #reference>
                                <el-button text type="primary">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </div>
                </div>
            </template>
        </el-tree>
        <el-drawer v-for="item in data" v-model="item.drawer" :title="titlename" direction="rtl">
            <el-form :model="form">
                <el-form-item>
                    <el-input label="Area" />
                </el-form-item>
                <el-form-item>
                    <el-select placeholder="Please select activity area">
                        <el-option label="Area1" value="shanghai" />
                        <el-option label="Area2" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <el-button>取消</el-button>
            <el-button>提交</el-button>
        </el-drawer>
    </el-card>
</template>

<script setup>
import ListHeader from '../components/ListHeader.vue'
import { ref } from 'vue'
const form = ref([])
const handleNodeClick = () => {

}
const handlepro = (index) => {
    data.value[index].drawer = true
    titlename.value = '推荐产品'
}
const handleref = (index) => {

    data.value[index].drawer = true
    titlename.value = '修改'
}
const handlerem = () => {

}
const titlename = ref('')
const data = ref([
    { name: '手机数码', value: true, drawer: false, id: 0 },
    { name: '手机数码', value: true, drawer: false, id: 1 },
    { name: '手机数码', value: true, drawer: false, id: 2 },
    { name: '手机数码', value: true, drawer: false, id: 3 },
    { name: '手机数码', value: true, drawer: false, id: 4 }
])
</script>

<style scoped>
.custom-tree-node {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
}
</style>