<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane label="代付款" name="PaymentOnBehalf"></el-tab-pane>
            <el-tab-pane label="待发货" name="ToBeShipped"></el-tab-pane>
            <el-tab-pane label="已发货" name="Shipped"></el-tab-pane>
            <el-tab-pane label="已完成" name="Completed"></el-tab-pane>
            <el-tab-pane label="已关闭" name="CLOSED"></el-tab-pane>
            <el-tab-pane label="退款中" name="refunding"></el-tab-pane>
        </el-tabs>
    </div>
    <el-card>
        <el-row>
            <el-col :span="8">
                <el-form  ref="ruleFormRef" :model="ruleForm">
                <el-form-item label="订单编号" class="goodsName-el-item">
                    <el-input v-model="ruleForm.orderNumber" placeholder="订单编号  " />
                </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8" v-if="isShow">
                <el-form-item label="收货人" class="goodsName-el-item" >
                    <el-input v-model="ruleForm.consignee" placeholder="收货人  " />
                </el-form-item>
            </el-col>
            <el-col :span="8" v-if="isShow">
                <el-form-item label="手机号" class="goodsName-el-item" >
                    <el-input v-model="ruleForm.phone" placeholder="手机号 " />
                </el-form-item>
            </el-col>
            <el-col :span="8" v-if="isShow">
                <el-form-item label="开始时间" class="goodsName-el-item" >  
                    <el-date-picker
                    v-model="ruleForm.startTime"
                    type="datetime"
                    placeholder="开始时间"
                    />
                </el-form-item>
            </el-col>
            <el-col :span="8" v-if="isShow">
                <el-form-item label="结束时间" class="goodsName-el-item">
                    <el-date-picker
                    v-model="ruleForm.endTime"
                    type="datetime"
                    placeholder="结束时间"
                    />
                </el-form-item>
            </el-col>
            <el-col :span="8" :class="{'el-col-offset':!isShow}">
                <el-form-item class="btn-right">
                        <el-button type="primary" @click="submitForm(ruleFormRef)">
                            搜索
                        </el-button>
                        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                        <el-button @click="isShow=true" v-if="!isShow">展开<el-icon><ArrowDown /></el-icon></el-button>
                        <el-button @click="isShow=false" v-else>收起<el-icon><ArrowUp /></el-icon></el-button>
                    </el-form-item>
            </el-col>
            </el-row>
            <el-button type="danger">批量删除</el-button>
            <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                
            >
                <el-table-column type="selection" width="55" />
                <el-table-column label="商品" width="350">
                <template #default="scope">
                    <div class="all">
                        <div class="top">
                            <div class="top-left">
                                <P>订单号</P>
                            <small>20211209234311144192</small>
                            </div>
                            <div class="top-right">
                                <P>下单时间</P>
                            <small>2021-12-09 23:43:11</small>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="img" style="width:30px;height: 30px;">
                                <img src="https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5984928facd569ef906becba3469810b.png" alt="" style="width:30px;height: 30px;">
                            </div>
                            <p class="text-blue-500">小米-百支酒店风抱枕套</p>
                        </div>
                    </div>
                </template>
                </el-table-column>
                <el-table-column label="实付款" property="xxx" width="100"></el-table-column>
                <el-table-column label="买家" width="100" >
                        <template #default="scope">
                            <p>user2</p>
                            <small>(用户ID：4)</small>
                        </template>
                </el-table-column>
                <el-table-column label="交易状态" width="150">
                    <template #default="scope">
                        <div style="margin-bottom: 5px;">付款状态：
                            <el-tag>支付宝支付</el-tag>
                        </div>
                        <div style="margin-bottom: 5px;">发货状态：<el-tag class="ml-2" type="info">未发货</el-tag></div>
                        <div>收货状态：<el-tag class="ml-2" type="info">未收货</el-tag></div>
                     </template>
                </el-table-column>
                <el-table-column label="操作" width="450"> 
                    <template #default="scope" >
                        <a class="btn-text" @click="handleModifyDrawer(scope.$index,scope.row)">订单详情</a>
                        <a class="btn-text" @click="handleCarouselDrawer(scope.$index,scope.row)">订单发货</a>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
</template>

<script setup>
//导航分类
import {ref,reactive} from 'vue'
const activeName=ref('all')
const ruleFormRef=ref(null)
const ruleForm=reactive({
    orderNumber:'',
    consignee:'',
    phone:'',
    startTime:'',
    endTime:''
})
const handleClick=()=>{ 

}
//导航分类--按钮部分
const isShow=ref(false)
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
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
//table订单渲染部分
const multipleTableRef = ref(null)
const multipleSelection = ref(null)

const handleSelectionChange = (val) => {
  multipleSelection.value = val
}

const tableData = [
  {
    xxx:'0.10'
  },
  {
   xxx:'0.10'
  },
  {
    xxx:'0.10'
  },
  {
    xxx:'0.10'
  },
  {
    xxx:'0.10'
  },
  {
    xxx:'0.10'
  },
  {
    xxx:'0.10'
  },
]
</script>

<style scoped>
.el-col-offset{
    margin-left:33%
}
.btn-right :deep(.el-form-item__content){
    justify-content:flex-end;
}

.all .img{
    width:50px;
    height:50px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 5px;
}
.all .img img{
    width: 100%;
    height: 100%;
    object-fit: cover
}
.text-rose-500{
    --tw-text-opacity: 1;
    color: rgba(244,63,94,var(--tw-text-opacity));
}
.text-xs{
    font-size: .75rem;
    line-height: 1rem;
}
.text-gray-400{
    --tw-text-opacity: 1;
    color: rgba(156,163,175,var(--tw-text-opacity));
}
.btn-bottom{
    margin-bottom: 10px;
}
.state-danger-button{
    margin-left:0;
    margin-top:5px
}
.btn-text{
    cursor: pointer;
    font-size: .75rem;
    line-height: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    --tw-text-opacity: 1;
    color: rgba(96,165,250,var(--tw-text-opacity));
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.bottom{
    display: flex;
    
}
.text-blue-500{
    --tw-text-opacity: 1;
    color: rgba(59,130,246,var(--tw-text-opacity));
}
</style>