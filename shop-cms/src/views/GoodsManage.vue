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
                    <el-form-item label="商品分类">
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
                    </el-form-item>
                </el-col>
            </el-row>
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
</style>