import http from '../utils/http'

function login(data){
 return http.post('/sysUser/login',data)
}
function usersList(){
<<<<<<< HEAD
return http.get('/sysUser/list',{ })
=======
return http.get('/sysUser')
>>>>>>> 6a57aa9cb57144b90ab2e69e9c72967b47b89af6
}
export {
    login,
    usersList
}