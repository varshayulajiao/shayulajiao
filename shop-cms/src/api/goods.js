import http from '../utils/http'
function getGoodList (data){
    http.get('/api/product/list',data)
}

export {
    getGoodList

}