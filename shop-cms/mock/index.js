export default[
    {
        url: '/api/login',
        method: 'post',
        response(req) {
          //console.log(req.body)  // GET请求发送过来的数据
          if(req.body.username === 'admin' && req.body.password === 'admin') {
            return { errcode: 0, token: 'djfkjaskfjaks' ,username:req.body.username}
          }
          else {
            return { errcode: -1 }
          }
        },
      }
]