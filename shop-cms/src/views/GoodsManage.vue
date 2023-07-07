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
                    <el-form-item>
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
            <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" />
                <el-table-column label="商品">
                <template #default="scope">
                    <div class="all">
                        <div class="img">
                            <img src="http://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/62af04afe39fa.jpg">
                        </div>
                        <div class="text">
                            <p>商品名称</p>
                            <span class="text-rose-500">￥最低销售价格</span>
                            <span class="text-rose-500">￥最低原价</span>
                        </div>
                    </div>
                </template>
                </el-table-column>
                <el-table-column label="实际销量" property="xxx"></el-table-column>
                <el-table-column property="name" label="商品状态" width="120" />
                <el-table-column property="address" label="审核状态" />
                <el-table-column label="操作" width="400px">
                    <template #default="scope">
                        <a class="btn-text">修改</a>
                        <a class="btn-text">商品规格</a>
                        <a class="btn-text">设置轮播图</a>
                        <a class="btn-text">商品详情</a>
                        <a class="btn-text">删除</a>
                        
                    </template>
                </el-table-column>
            </el-table>
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    xxx:'123'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    xxx:'456'
  }
]
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
    height:50px
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
</style>