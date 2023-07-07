<template>
    <div>
        <el-card shadow="never">
            <template #header>
                <ListHeader />
            </template>
            <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="userlevel" label="会员等级" width="380px" />
                <el-table-column prop="discount" label="折扣率（%）" width="500px" />
                <el-table-column prop="levelcount" label="等级序号" width="400px" />
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
                <el-form label-width="120px" status-icon>
                    <el-form-item label="等级名称">
                        <el-input type="text" v-model="tableData[formIndex].userlevel" />
                    </el-form-item>
                    <el-form-item label="等级权重">
                        <el-input type="text" v-model="tableData[formIndex].levelcount" />
                    </el-form-item>
                    <el-form-item label="是否启用">
                        <el-switch v-model="switchValue" />
                    </el-form-item>
                    <el-form-item label="升级条件">
                        <el-form-item label="累计消费满">
                            <el-input type="text" v-model="tableData[formIndex].cumnlativeCon" style="width:150px" />
                            <el-tag class="ml-2" type="info">元</el-tag>
                        </el-form-item>
                        <el-form-item label="累计次数满">
                            <el-input type="text" v-model="tableData[formIndex].cumnlativeCou" style="width:150px" />
                            <el-tag class="ml-2" type="info">次</el-tag>
                        </el-form-item>
                    </el-form-item>
                    <el-form-item label="折扣率（%）">
                        <el-input type="text" v-model="tableData[formIndex].discount" style="width:150px" />
                        <el-tag class="ml-2" type="info">%</el-tag>
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
const formIndex = ref('')
const switchValue = ref(false)
const onSubmit = () => {

}
const handleDrawer = (index) => {
    tableData.value[index].drawer = true
    formIndex.value = index

}
const handlerem = (index) => {
    console.log(index)
    tableData.value.splice(index, 1)
}
const tableData = ref([
    {
        userlevel: '普通会员',
        discount: '0',
        levelcount: '0',
        onoff: false,
        drawer: false,
        cumnlativeCon: '100',
        cumnlativeCou: '1'
    },
    {
        userlevel: '青铜会员',
        discount: '0',
        levelcount: '10',
        onoff: false,
        drawer: false,
        cumnlativeCon: '200',
        cumnlativeCou: '2'
    },
    {
        userlevel: '白银会员',
        discount: '95',
        levelcount: '20',
        onoff: false,
        drawer: false,
        cumnlativeCon: '300',
        cumnlativeCou: '3'
    },
    {
        userlevel: '黄金会员',
        discount: '90',
        levelcount: '30',
        onoff: false,
        drawer: false,
        cumnlativeCon: '1000',
        cumnlativeCou: '5'
    },
    {
        userlevel: '钻石会员',
        discount: '80',
        levelcount: '40',
        onoff: false,
        drawer: false,
        cumnlativeCon: '2000',
        cumnlativeCou: '8'
    },
    {
        userlevel: '王者会员',
        discount: '60',
        levelcount: '50',
        onoff: false,
        drawer: false,
        cumnlativeCon: '5000',
        cumnlativeCou: '10'
    },

])

</script>

<style scoped>
.el-table {
    display: flex;
    align-items: center;
    justify-content: space-between;

}
.el-pagination{
    justify-content: center;
    margin-top: 20px;
}
</style>