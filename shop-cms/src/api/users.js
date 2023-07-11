import http from '../utils/http'

function login(data){
 return http.post('/sysUser/login',data)
}
function usersList(){
return http.get('/sysUser/list',{})
}
export {
    login,
    usersList
}