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
                
                <el-aside width="auto">
                    <el-menu default-active="/home" class="el-menu-vertical-demo" :collapse="isCollapse"  router >
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
                        <!-- 订单管理 ordermanage comment -->
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
                            <el-menu-item index="/comment">
                                <el-icon><ChatDotSquare /></el-icon>
                                <span>评论管理</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <!-- 其他模块 notice-->
                        <el-sub-menu index="/others">
                            <template #title>
                                <el-icon>
                                    <Cloudy />
                                </el-icon>
                                <span>其他模块</span>
                            </template>
                            <el-menu-item index="/notice">
                                <el-icon><Notification /></el-icon>
                                <span>公告管理</span>
                            </el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <!-- 导航标签 -->
                    <div class="main-tabs">
                        <el-tabs
                        v-model="activeTab"
                        type="card"
                        class="demo-tabs"
                        @tab-remove="removeTab"
                        @tab-change="changeTab"
                    >
                        <el-tab-pane
                        v-for="item in routePath.tabList"
                        :key="item.path"
                        :label="item.title"
                        :name="item.path"
                        :closable="item.path!='/home'"
                        >
                        
                        </el-tab-pane>
                    </el-tabs>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                        </span>
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="removeOther">关闭其他</el-dropdown-item>
                            <el-dropdown-item @click="removeAll">全部关闭</el-dropdown-item>
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    </div>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import {ref,reactive,watch} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()
//菜单开启关闭响应式数据
const isCollapse=ref(false)
const drawer=ref(false)

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
//标签页部分--tabs
import {useRoute,onBeforeRouteUpdate} from 'vue-router'
import useRoutePath from '../stores/path'
const routePath=useRoutePath()
const route =useRoute()
if(routePath.path){
    router.push(routePath.path)
}else{
    router.push('/home')
}
const activeTab = ref(route.path)
watch(route,(newVal)=>{
    activeTab.value=newVal.path
    routePath.NowPath(newVal.path)
})
function addTab(tab){
  let noTab=  routePath.tabList.findIndex((item)=>item.path==tab.path) ==-1
  if(noTab){
    routePath.PushTabList(tab)
    console.log(tab)
  }
}
onBeforeRouteUpdate((to,from)=>{
    addTab({
        title:to.meta.title,
        path:to.path
    })
})
const changeTab=(tab)=>{
    activeTab.value=tab
    router.push(tab)    
}

const removeTab = (t) => {
    let tabs=routePath.tabList
    let a=activeTab.value
    if(a==t){
        tabs.forEach((tab,index)=>{
            if(tab.path==t){
                const nextTab=tabs[index+1] || tabs[index-1]
                if(nextTab){
                    a=nextTab.path
                }
            }
        })
    }
    activeTab.value=a
    routePath.NowTabList(routePath.tabList.filter((tab)=>tab.path!=t))
}
const removeOther=()=>{
    console.log(route)
    const other=  routePath.tabList.filter((item)=>{
        return item.path==route.path||item.path=='/home'
    })
    routePath.NowTabList(other)
}
const removeAll=()=>{
    routePath.NowTabList([
  {
    title: '后台首页',
    path:'/home'
  }
])
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
.el-affix{
    height:calc(100vh - 60px);
    background: #f1f1f1;
}
.el-affix>div{
    height: 100%;
}
.el-menu{
    height: 100%;
    box-shadow: 5px 0px 2px rgba(195, 192, 192, 0.1)
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
    overflow: scroll;
    height: calc(100vh - 60px);
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
.main-tabs{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
:deep(.el-tabs--card>.el-tabs__header .el-tabs__item){
    background: #fff;
    margin-right: 5px;
    border-radius: 5px;
}
:deep(.el-tabs--card>.el-tabs__header .el-tabs__nav){
    border: 0;
}
.el-menu span{
    width: 200px;
}
</style>