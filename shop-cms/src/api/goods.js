import http from '../utils/http'

function getGoodList(){
    return http.post('/product/list',{})
}
function getGoodCategory(){
    return http.post('/category/list',{})
}
function delGood(url){
    return http.delete(url)
}
function AddGood(data){
    return http.post('/product',data)
}

export{
    getGoodList,
    getGoodCategory,
    delGood,
    AddGood,

}