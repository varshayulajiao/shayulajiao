<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="header-left">
                <h2 class="header-h2">电商管理后台</h2>
                <div class="menu-lockBox">
                <el-icon v-if="!isCollapse" class="lock-icon" @click="isCollapse=true"><Unlock  /></el-icon>
                <el-icon v-else class="lock-icon" @click="isCollapse=false"><Lock/></el-icon>
                <el-icon class="reload-icon" @click="reload"><Refresh /></el-icon>
                </div>
                </div>
                <!-- header 右侧用户部分 -->
                <div class="user">
                    <el-icon @click="screen" class="screen-icon"><FullScreen /></el-icon>
                    <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                <el-dropdown >
                    <span class="el-dropdown-link">
                    <span>username:</span>
                    <el-icon class="el-icon--right" style="color:white"><arrow-down /></el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="drawer = true">修改密码</el-dropdown-item>
                        <el-dropdown-item @click="handleRemoveLogin">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                </div>
                <!-- 修改密码表单部分 -->
                <el-drawer
                    v-model="drawer"
                    title="修改密码"
                >
                <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                    status-icon
                >
                    <el-form-item label="旧密码" prop="oldPassword">
                    <el-input type="password" v-model="ruleForm.oldPassword" />
                    </el-form-item>
                    <el-form-item label="新密码" prop="newPassword">
                    <el-input type="password" v-model="ruleForm.newPassword" />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="confirmPassword">
                    <el-input type="password" v-model="ruleForm.confirmPassword" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div style="flex: auto">
                        <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                        <el-button  @click="resetForm(ruleFormRef)">取消</el-button>
                    </div>
                    </template>
                </el-drawer>

            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu default-active="/home" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                        @close="handleClose" router>
                        <!-- 主控台 home -->
                        <el-sub-menu index="/index">
                            <template #title>
                                <el-icon>
                                    <HelpFilled />
                                </el-icon>
                                <span>后台面板</span>
                            </template>
                            <el-menu-item index="/home">
                                <el-icon><House /></el-icon>
                                <span>主控台</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <!-- 商品管理 goodsmanage classmanage -->
                        <el-sub-menu index="/goods">
                            <template #title>
                                <el-icon>
                                    <Goods />
                                </el-icon>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item index="/goodsmanage">
                                <el-icon><ShoppingTrolley /></el-icon>
                                <span>商品管理</span>
                            </el-menu-item>
                            <el-menu-item index="classmanage">
                                <el-icon><Files /></el-icon>
                                <span>商品分类</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <!-- 用户管理 usersmanage userslevel -->
                        <el-sub-menu index="/users">
                            <template #title>
                                <el-icon>
                                    <User />
                                </el-icon>
                                <span>用户管理</span>
                            </template>
                            <el-menu-item index="/usersmanage">
                                <el-icon><UserFilled /></el-icon>
                                <span>用户管理</span>
                            </el-menu-item>
                            <el-menu-item index="/userslevel">
                                <el-icon><Histogram /></el-icon>
                                <span>会员等级</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <!-- 订单管理 ordermanage -->
                        <el-sub-menu index="/order">
                            <template #title>
                                <el-icon>
                                    <Box />
                                </el-icon>
                                <span>订单管理</span>
                            </template>
                            <el-menu-item index="/ordermanage">
                                <el-icon><Reading /></el-icon>
                                <span>订单管理</span>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <el-tabs
                    v-model="editableTabsValue"
                    type="card"
                    editable
                    class="demo-tabs"
                    @edit="handleTabsEdit"
                >
                        <el-tab-pane
                        v-for="item in editableTabs"
                        :key="item.name"
                        :label="item.title"
                        :name="item.name"
                        >
                        {{ item.content }}
                        </el-tab-pane>
                </el-tabs>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import {ref,reactive} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()

const isCollapse=ref(false)
const drawer=ref(false)

const handleOpen=()=>{

}
const handleClose=()=>{

}
const reload=()=>{
    location.reload()
}
const handleRemoveLogin=()=>{
    router.push('/login')
}
//修改密码表单部分 还差新密码和重复密码验证是否相同功能
const ruleFormRef=ref(null)
const ruleForm=reactive({
    oldPassword:'',
    newPassword:'',
    confirmPassword:''
})
const rules=reactive({
    oldPassword: [
        { required: true, message: '旧密码不能为空', trigger: 'blur' }
    ],
    newPassword: [
        { required: true, message: '新密码不能为空', trigger: 'blur' },
    ],
    confirmPassword:[
        { required: true, message: '重复密码不能为空', trigger: 'blur' },
    ]
})
const submitForm = async (formEl) => {  
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
  drawer.value=false
}
//标签页部分 未完成功能
let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: '',
  },
  {
    title: 'Tab 2',
    name: '2',
    content: '',
  },
])

const handleTabsEdit = (
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
//网页全屏功能
import screenfull from 'screenfull'
const screen=()=>{
  screenfull.toggle()
}
</script>

<style scoped>
.el-header {
    background-color: cornflowerblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.el-aside{
    height: calc(100vh - 60px);
    overflow: unset;
    background: #f1f1f1;
}
.el-menu{
    height: 100%;
    box-shadow: 5px 0px 2px rgba(195, 192, 192, 0.1);
}
.menu-lockBox{
    margin-left: 50px;
}
.lock-icon{
    color:white;
    cursor: pointer;
    height: 60px;
    width: 50px;
}
.lock-icon:hover{
    background: rgb(120, 167, 255);
}
.header-h2{
    color:white
}
.el-main{
    background: #f1f1f1;
}
.reload-icon{
    color:white;
    cursor: pointer;
    height: 60px;
    width: 50px;
}
.reload-icon:hover{
    background: rgb(120, 167, 255);
}
.header-left{
    display: flex;
    align-items: center;
}
.user{
    display: flex;
    align-items: center;
}   
.user .el-avatar{
    margin-right: 10px;
}
.el-dropdown-link{
    outline: none;
    display: flex;
    align-items: center;
}
.el-dropdown-link span{
    color:white;
    font-weight: bold;
}
.el-drawer__footer{
    text-align: left;
}
.screen-icon{
    color:white;
    cursor: pointer;
    height: 60px;
    width: 50px;
}
.screen-icon:hover{
    background: rgb(120, 167, 255);
}

</style>