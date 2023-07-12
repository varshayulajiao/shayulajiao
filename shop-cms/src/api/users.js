import http from '../utils/http'

function login(data){
 return http.post('/sysUser/login',data)
}
function usersList(){
return http.post('/sysUser/list',{})
}
function addUser(data){
return http.post('/sysUser',data)
}
function deleteUser(data){
return http.delete('/sysUser',data)
}
export {
    login,
    usersList,
    addUser
}