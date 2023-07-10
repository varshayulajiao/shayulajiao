import {defineStore} from 'pinia'
import {ref} from 'vue'

const useLogin=defineStore('user',()=>{
        const username=ref('')
        const token=ref('')
        const NowToken=(payload)=>{
            token.value=payload
        }
        const NowUsername=(payload)=>{
            username.value=payload
        }
        return{
            username,
            token,
            NowToken,
            NowUsername
        }
},{
  persist:true
})

export default useLogin