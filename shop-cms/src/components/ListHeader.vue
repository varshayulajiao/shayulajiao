<template>
    <div class="flex-box">
        <el-button type="primary" size="small">新增</el-button>
        <el-tooltip effect="dark" content="刷新数据" placement="top">
            <el-button class="icon-refresh">
                <el-icon :size="20" >
                    <Refresh />
                </el-icon>
            </el-button>
        </el-tooltip>
    </div>
</template>

<script setup>
</script>
<style scoped>
.flex-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icon-refresh{
    border: 0;
}
</style>