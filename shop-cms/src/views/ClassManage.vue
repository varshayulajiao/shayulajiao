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
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="id" label="ID"  />
                <el-table-column label="商品封面"  >
                    <template #default="scope" class="table-foot">
                        <img :src=scope.row.imgurl  style="width: 80px;height: 80px;">        
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="商品名称" />
                <el-table-column label="操作" fixed="right" >
                    <template #default="scope" class="table-foot">
                        <el-popconfirm title="是否要删除该记录?" @confirm="handlerem(scope.$index)">
                            <template #reference>
                                <el-button type="primary" link>删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
            <template #footer>
                <el-button type="primary" @click="dialogValue = true" >关联</el-button>
                <el-button>取消</el-button>
            </template>
           
                <el-dialog
                    v-model="dialogValue"
                    title="商品选择"
                    align-center
                >
                <el-table
                    ref="multipleTableRef"
                    :data="foodsData"
                    style="width: 100%"
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="商品"  >
                    <template #default="scope">
                        <div style="display: flex;">
                            <div style="margin-right: 20px;">
                                <img :src=scope.row.imgurl  style="width: 80px;height: 80px;"> 
                            </div>
                            <div>
                                <h3 style="color: black;">{{ scope.row.name }}</h3>
                                <p style="color: #ccc;font-size: 10px;">分类：{{ scope.row.foodclass }}</p>
                                <p style="color: #ccc;font-size: 10px;">创建时间：{{ scope.row.time }}</p>
                            </div>
                        </div>            
                    </template>
                </el-table-column>
                   
                    <el-table-column property="inventory" label="总库存" width="120" />
                    <el-table-column  label="价格（元）" show-overflow-tooltip  align="right">
                        <template #default="scope" >
                        <div>
                           <span style="color: red;">{{ scope.row.price }}</span>|<span>{{ scope.row.curentPrice }}</span>
                        </div>            
                    </template>
                    </el-table-column>
                </el-table>
                <el-pagination background layout="prev, pager, next" :total="1000"  style="justify-content: center;"/>
                    <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogValue = false">取消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">
                        确定
                        </el-button>
                    </span>
                    </template>
                </el-dialog>
        </el-drawer>
        <el-drawer v-for="item ,index in data" v-model="item.drawer1" :title="titlename1" direction="rtl"> 
            <el-form
                   
                >
                    <el-form-item label="分类名称" >
                    <el-input type="text" v-model="data[index].name" />
                    </el-form-item>  
                </el-form> 
            <template #footer>
                <el-button type="primary" >提交</el-button>
                <el-button>取消</el-button>
            </template>
            
        </el-drawer>
    </el-card>
</template>

<script setup>
import ListHeader from '../components/ListHeader.vue'
import { ref } from 'vue'

const dialogValue = ref(false)
const handleNodeClick = () => {

}
const handlepro = (index) => {
    data.value[index].drawer = true
    titlename.value = '推荐产品'
}
const handleref = (index) => {
    console.log(index)
    console.log(data.value[index].name)
    data.value[index].drawer1 = true
    titlename1.value = '修改'
}
const handlerem = (index) => {
 data.value.splice(index,1)
}
const titlename = ref('')
const titlename1 = ref('')
const data = ref([
    { name: '手机数码', value: true, drawer: false, id: 0 ,drawer1:false},
    { name: '运动旅行', value: true, drawer: false, id: 1 ,drawer1:false}, 
    { name: '居家生活', value: true, drawer: false, id: 2 ,drawer1:false},
    { name: '智能家电', value: true, drawer: false, id: 3 ,drawer1:false},
    { name: '电器服务', value: true, drawer: false, id: 4 ,drawer1:false},
])
const foodsData = ref([
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
    {    
        time:'2023-07-08 10:56:13',
        foodclass:'手机数码',
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明',
        inventory:100,
        price:'￥10.00',
        curentPrice:'￥5.00'
    },
])
const tableData = ref([
    {    
        id:200,
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明'
    },
    {    
        id:200,
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明'
    },
    {    
        id:200,
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明'
    },
    {    
        id:200,
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明'
    },
    {    
        id:200,
        imgurl:'http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg',
        name:'小明'
    },
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