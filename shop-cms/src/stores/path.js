import {defineStore} from 'pinia'
import {ref} from 'vue'

const useRoutePath=defineStore('path',()=>{
        const path=ref('')
        const tabList = ref([
          {
            title: '后台首页',
            path:'/home'
          }
        ])
        const NowPath=(payload)=>{
            path.value=payload
        }
        const PushTabList=(payload)=>{
          tabList.value.push(payload)
        }
        const NowTabList=(payload)=>{
          tabList.value=payload
        }
        return{
            path,
            tabList,
            NowPath,
            NowTabList,
            PushTabList
        }
},{
  persist:true
})

export default useRoutePath