<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="全部" name="all"></el-tab-pane>
            <el-tab-pane label="审核中" name="inReview"></el-tab-pane>
            <el-tab-pane label="出售中" name="onSale"></el-tab-pane>
            <el-tab-pane label="已下架" name="offshelf"></el-tab-pane>
            <el-tab-pane label="库存预警" name="inventoryWarning"></el-tab-pane>
            <el-tab-pane label="回收站" name="recycleBin"></el-tab-pane>
        </el-tabs>
        <el-card class="box-card">
            <el-row>
                <el-col :span="8">
                    <el-form  ref="ruleFormRef" :model="ruleForm">
                        <el-form-item label="商品名称" class="goodsName-el-item">
                            <el-input v-model="ruleForm.name" placeholder="商品名称" />
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="商品分类" v-if="isShow">
                        <el-select v-model="ruleForm.class" placeholder="请选择商品分类">
                            <el-option label="手机数码" value="手机数码" />
                            <el-option label="运动旅行" value="运动旅行" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
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
            <div class="btn-bottom">
                <el-button type="primary">新增</el-button>
                <el-button type="danger">批量删除</el-button>
                <el-button>上架</el-button>
                <el-button>下架</el-button>
            </div>
            <!-- 下面那块表格 -->
            <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                
            >
                <el-table-column type="selection" width="55" />
                <el-table-column label="商品" width="300">
                <template #default="scope">
                    <div class="all">
                        <div class="img">
                            <img src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg">
                        </div>
                        <div class="text">
                            <p>商品名称</p>
                            <span class="text-rose-500">￥10</span>
                            <el-divider direction="vertical" />
                            <span class="text-rose-500 text-xs">￥100</span>
                            <p class="text-xs text-gray-400">分类：运动旅行</p>
                            <p class="text-xs text-gray-400">创建时间：1970-01-01 08:33:41</p>
                        </div>
                    </div>
                </template>
                </el-table-column>
                <el-table-column label="实际销量" property="xxx" width="60"></el-table-column>
                <el-table-column label="商品状态" width="75" >
                        <template #default="scope">
                            <el-tag class="ml-2" type="danger">仓库</el-tag>
                        </template>
                </el-table-column>
                <el-table-column label="审核状态" width="100">
                    <template #default="scope">
                        <el-button type="success" plain class="state-success-button">审核通过</el-button>
                        <el-button type="danger" plain class="state-danger-button">审核拒绝</el-button>
                     </template>
                </el-table-column>
                <el-table-column label="库存数量" property="count">

                </el-table-column>
                <el-table-column label="操作" width="400px"> 
                    <template #default="scope">
                        <a class="btn-text" @click="handleModifyDrawer(scope.$index,scope.row)">修改</a>
                        <a class="btn-text" @click="handleCarouselDrawer(scope.$index,scope.row)">设置轮播图</a>
                        <a class="btn-text">商品详情</a>
                        <a class="btn-text">删除</a>
                    </template>
                </el-table-column>
            </el-table>
                    <!-- 修改的抽屉 -->
                <el-drawer
                    v-for="item in tableData"
                    v-model="item.modifyDrawer"
                    title="修改"
                >
                <el-form
                    ref="modifyRuleFormRef"
                    :model="modifyRuleForm"
                    label-width="120px"
                    class="demo-ruleForm"
                    status-icon
                >
                    <el-form-item label="商品名称" >
                    <el-input type="password" v-model="modifyRuleForm.goodsName" />
                    </el-form-item>
                    <el-form-item label="封面" >
                        <el-upload
                            class="avatar-uploader"
                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>
                    </el-form-item>
                    <!-- 修改抽屉的下拉选择框 -->
                    <el-form-item label="商品分类">
                        <el-select v-model="select_value">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                            />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品描述">
                    <el-input type="text" v-model="modifyRuleForm.goodsInfo" />
                    </el-form-item>
                    <el-form-item label="商品单位" >
                    <el-input type="text" v-model="modifyRuleForm.goodsUnit" style="width:100px"/>
                    </el-form-item>
                    <el-form-item label="总库存">
                    <el-input type="text" v-model="modifyRuleForm.goodsAllCount" style="width:150px"/>
                    <el-tag class="ml-2" type="info">件</el-tag>
                    </el-form-item>
                    <el-form-item label="库存预警">
                    <el-input type="text" v-model="modifyRuleForm.countDanger" style="width:150px"/>
                    <el-tag class="ml-2" type="info">件</el-tag>
                    </el-form-item>
                    <el-form-item label="最低销售">
                    <el-input type="text" v-model="modifyRuleForm.price" style="width:150px"/>
                    <el-tag class="ml-2" type="info">元</el-tag>
                    </el-form-item>
                    <el-form-item label="最低原价">
                    <el-input type="text" v-model="modifyRuleForm.originPrice" style="width:150px"/>
                    <el-tag class="ml-2" type="info">元</el-tag>
                    </el-form-item>
                    <el-form-item label="库存显示">
                        <el-radio-group v-model="countShow">
                            <el-radio label="是" border>是</el-radio>
                            <el-radio label="否" border>否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="是否上架">
                        <el-radio-group v-model="grounding">
                            <el-radio label="是" size="large" border>是</el-radio>
                            <el-radio label="否" size="large" border>否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div style="flex: auto">
                        <el-button type="primary">提交</el-button>
                        <el-button >取消</el-button>
                    </div>
                    </template>
                </el-drawer>
                <!-- 设置轮播图抽屉 -->
                <el-drawer
                    v-for="item in tableData"
                    v-model="item.carouselDrawer"
                    title="设置轮播图"
                >
                
                <template #footer>
                    <div style="flex: auto">
                        <el-button type="primary" >提交</el-button>
                        <el-button  >取消</el-button>
                    </div>
                    </template>
                </el-drawer>

        </el-card>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
const activeName = ref('all')

const handleClick=()=>{

}
//搜索表单部分
const ruleFormRef=ref(null)
const ruleForm=reactive({
    name:'',
    class:''
})
//按钮部分
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
//商品展示table部分
const multipleTableRef=ref(null)
const multipleSelection =ref(null)
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const tableData = ref([
  {
    xxx:'123',
    count:1000,
    modifyDrawer:false,
    carouselDrawer:false
  },
  {
    xxx:'456',
    count:200,
    modifyDrawer:false,
    carouselDrawer:false
  }
])
//表格操作部分抽屉功能--修改
const drawer=ref(false)
const handleModifyDrawer=(index,row)=>{
    tableData.value[index].modifyDrawer=!tableData.value[index].modifyDrawer
}
const handleCarouselDrawer=(index,row)=>{
    tableData.value[index].carouselDrawer=!tableData.value[index].carouselDrawer
}
const modifyRuleFormRef=ref(null)
const modifyRuleForm=reactive({
    goodsName:'',
    img:'',
    goodsClass:'',
    goodsInfo:'',
    goodsUnit:'件',
    goodsAllCount:'',
    countDanger:'',
    price:'',
    originPrice:'',
    countShow:'',
    grounding:'',
})
const imageUrl = ref('')

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
//下拉框
const select_value=ref('手机数码')
const options=ref([
{
    value: '手机数码',
    label: '手机数码',
  },
  {
    value: '运动旅行',
    label: '运动旅行',
  },
  {
    value: '居家生活',
    label: '居家生活',
  },
  {
    value: '智能家电',
    label: '智能家电',
  },
  {
    value: '电器家务',
    label: '电器家务',
  },
])
//库存显示 是否上架
const countShow=ref('是')
const grounding=ref('是')
</script>

<style scoped>
.main{
    height:100%;
    background: #fff;
}
.goodsName-el-item{
    width:300px;
    justify-content: center;
}
.el-row {
    justify-content: center;
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
.all{
    display:flex;
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
:deep(.el-drawer){
    width:40% !important
}
.btn-right :deep(.el-form-item__content){
    justify-content:flex-end;
}
</style>