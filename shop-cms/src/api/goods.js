import http from '../utils/http'
function getGoodList (){
    http.get('/api/product/list')
}

export {
    getGoodList

}