<template>
    <el-row :gutter="15">
        <el-col :span="6">
            <el-card shadow="hover" class="card-head">
                 <div class="flex-box">
                     <div>支付订单</div>
                     <div class="color-box">年</div>
                 </div>
                <el-divider></el-divider>
                <h2>51</h2>
                <el-divider></el-divider>
                <div class="card-foot">
                    <span>总支付订单</span>
                    <span>51</span>
                </div>
            </el-card>    
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" class="card-head">
                 <div class="flex-box">
                    <div>订单量</div>  
                    <div class="color-box">周</div>
                </div> 
                <el-divider></el-divider>
                <h2>555</h2>
                <el-divider></el-divider>
                <div class="card-foot">
                    <span>转化率</span>
                    <span>60%</span>
                </div>
            </el-card>     
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" class="card-head">
                <div class="flex-box">
                    <div>销售额</div> 
                    <div class="color-box">年</div>
                </div> 
                <el-divider></el-divider>
                <h2>4</h2>
                <el-divider></el-divider>
                <div class="card-foot">
                    <span>总销售额</span>
                    <span>3.74</span>
                </div>
            </el-card>     
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" class="card-head">
                 <div class="flex-box"> 
                    <div>新增用户</div>
                    <div class="color-box">年</div>
                </div> 
                <el-divider></el-divider>
                <h2>17</h2>
                <el-divider></el-divider>
                <div class="card-foot">
                    <span>总用户</span>
                    <span>17人</span>
                </div>
            </el-card>     
        </el-col>
    </el-row>
    <el-row :gutter="15">
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon" @click="handleUser">
                        <el-icon color="blue"><Avatar /></el-icon>
                        <div class="icon-foot">用户</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon" @click="handleGoods">
                        <el-icon color="purple"><ShoppingCart /></el-icon>
                        <div class="icon-foot">商品</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon" @click="handleOrder">
                        <el-icon color="pink"><Box /></el-icon>
                        <div class="icon-foot">订单</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon">
                        <el-icon color="blue"><ChatLineSquare /></el-icon>
                        <div class="icon-foot">评价</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon">
                        <el-icon color="pink"><Picture /></el-icon>
                        <div class="icon-foot">图库</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon">
                        <el-icon color="blue"><Bell /></el-icon>
                        <div class="icon-foot">公告</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon">
                        <el-icon><Operation /></el-icon>
                        <div class="icon-foot">配置</div>
                    </el-card>
                </el-col>
                <el-col :span="3" shadow="hover">
                    <el-card class="card-icon">
                        <el-icon color="orange"><CreditCard /></el-icon>
                        <div class="icon-foot">优惠卷</div>
                    </el-card>
                </el-col>
            </el-row> 
            <el-row :gutter="15">
                <el-col :span="12" class="table-box">
                    <el-tabs
                        v-model="activeName"
                        type="card"
                        class="demo-tabs"    
                    >
                        <el-tab-pane label="近1个月" name="month">  
                        </el-tab-pane>
                        <el-tab-pane label="近1周" name="week">
                        </el-tab-pane>
                        <el-tab-pane label="近24小时" name="day"> 
                        </el-tab-pane>
                        <div ref="tabRef" class="table-bar">    
                        </div>
                    </el-tabs>
                </el-col>
                <el-col :span="12">
                    <el-card class="foot-card-box">
                        <div class="flex-box "> 
                            <div>店铺及商品提示</div> 
                            <div class="color-box">店铺及商品提示</div>
                        </div>
                        <el-divider></el-divider>
                        <el-row :gutter="15">
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">1</div>
                                    <div>审核中</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">29</div>
                                    <div>销售中</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">27</div>
                                    <div>已下架</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">2</div>
                                    <div>库存预警</div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-card>
                    <el-card>
                        <div class="flex-box"> 
                            <div>交易提示</div> 
                            <div class="color-box">需要立即处理的交易订单</div>
                        </div>
                        <el-divider></el-divider>
                        <el-row :gutter="15">
                            <el-col :span="6">
                                <el-card shadow="hover"  class="foot-card">
                                    <div class="card-number">171</div>
                                    <div>待付款</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">16</div>
                                    <div>代发货</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">1</div>
                                    <div>已发货</div>
                                </el-card>
                            </el-col>
                            <el-col :span="6">
                                <el-card shadow="hover" class="foot-card">
                                    <div class="card-number">17</div>
                                    <div>退款中</div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </el-card>
                    
                </el-col>
            </el-row>  
</template>

<script setup>
import {ref,watchEffect} from 'vue'
import {useRouter} from 'vue-router'
import * as echarts from 'echarts';
const tabRef=ref()
const activeName=ref('month')
let myChart;
const router = useRouter()
const handleUser = ()=>{
    router.push('/usersmanage')
}
const handleOrder = ()=>{
    router.push('/ordermanage')
}
const handleGoods = ()=>{
    router.push('/goodsmanage')
}
watchEffect(()=>{
    if(!myChart){
     myChart = echarts.init(tabRef.value);   
    }
myChart.setOption({
  title: {
    text: '订单数量'
  },
  tooltip: {},
  xAxis: {
    data:  ['0706', '0707', '0708', '0709', '0710', '0711','0712']
  },
  yAxis: {},
  series: [
    {
      name: '数量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20,50]
    }
  ]
});
},{
    flush:'post'
})
</script>

<style scoped>
.table-box{
    background: #fff;
    height: 420px;
}
.table-bar{
    width: 100%;
    height: 300px;
}
.el-card h2{
font-size: 30px;
font-weight: bold;
color: #aaa;
}
.el-card .card-foot{
    color: #aaa;
    display: flex;
    justify-content: space-between;
}
.card-head{
    margin-bottom: 20px;
}
.card-icon{
    margin-bottom: 20px;
}
.el-icon{
    width: 100%;
   text-align: center;
}
.icon-foot{
    text-align: center;
}
.flex-box{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
.color-box{
    padding:0 5px ;
    font-size: 12px;
    color: #f60;
   border-radius: 5px;
    border: 1px solid #f60;
}
.foot-card{
    background: #eee;
}
.foot-card div{
    text-align: center;
}
.foot-card .card-number{
    font-size: 30px;   
}
.foot-card-box{
    margin-bottom: 20px;
}
</style>