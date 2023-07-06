<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <h2 class="header-h2">电商管理后台</h2>
                <div class="menu-lockBox">
                <el-icon v-if="!isCollapse" class="lock-icon" @click="isCollapse=true"><Unlock  /></el-icon>
                <el-icon v-else class="lock-icon" @click="isCollapse=false"><Lock/></el-icon>
                <el-icon class="reload-icon" @click="reload"><Refresh /></el-icon>
                </div>
                <div class="user">
                    <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                />
                </div>  
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
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const isCollapse=ref(false)

const handleOpen=()=>{

}
const handleClose=()=>{

}
const reload=()=>{
    location.reload()
}
</script>

<style scoped>
.el-header {
    background-color: cornflowerblue;
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
.el-header{
    display: flex;
    align-items: center;
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
    margin-left: 20px;
    cursor: pointer;
    height: 60px;
    width: 50px;
}
.reload-icon:hover{
    background: rgb(120, 167, 255);
}
.user{
   justify-self: flex-end;
}
</style>