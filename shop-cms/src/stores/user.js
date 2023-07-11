import {defineStore} from 'pinia'
import {ref} from 'vue'

const useLogin=defineStore('user',()=>{
        const username=ref('')
        const password=ref('')
        const NowPassword=(payload)=>{
            password.value=payload
        }
        const NowUsername=(payload)=>{
            username.value=payload
        }
        return{
            username,
            password,
            NowPassword,
            NowUsername
        }
},{
  persist:true
})

export default useLogin