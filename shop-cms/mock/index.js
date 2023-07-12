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
        }
    },
    {
      url: '/api/sysUser',
      method: 'get',
      response() {
        //console.log(req.body)  // GET请求发送过来的数据
        return [
          {
            username: 'admin',
            userLevelId: 123,
            time: '注册时间:2023-07-06 10:28:26',
            onoff: false,
            drawer: false,
            password: 'admin',
            telephone: 15012341234,
            email: '15012341234@qq.com',
            id:1
          },
          {
            username: 'jack',
            userLevelId: 456,
            time: '注册时间:2023-07-06 10:28:26',
            onoff: false,
            drawer: false,
            password: 'jack',
            telephone: 15012341234,
            email: '15012341234@qq.com',
            id:2
          },
          {
            username: 'aa',
            userLevelId: 456,
            time: '注册时间:2023-07-06 10:28:26',
            onoff: false,
            drawer: false,
            password: 'aa',
            telephone: 15012341234,
            email: '15012341234@qq.com',
            id:3
          },
          {
            username: 'bb',
            userLevelId: 456,
            time: '注册时间:2023-07-06 10:28:26',
            onoff: false,
            drawer: false,
            password: 'bb',
            telephone: 15012341234,
            email: '15012341234@qq.com',
            id:4
          },
          {
            username: 'cc',
            userLevelId: 456,
            time: '注册时间:2023-07-06 10:28:26',
            onoff: false,
            drawer: false,
            password: 'cc',
            telephone: 15012341234,
            email: '15012341234@qq.com',
            id:5
          }
        ]
      } 
    }
]