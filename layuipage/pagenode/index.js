const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');
app.use(cors())

const mockjs = require('mockjs');
let layuiData = mockjs.mock({
    'code': 0,
    "count": 100,
    'data|100': [
        {
            'id|+1': 0,
            'name': '@cname',
            'age|1-120': 5,
            'gender|1': ['男','女'],
            "addr": '@city',
            'money|1000-100000000':1 
        }
    ]
});

app.get('/paging', (req, res) => {
    // console.log(req.query);
    // console.log(layuiData);
    let start = (Number(req.query.page)-1)*Number(req.query.limit);
    let end = Number(req.query.page)*Number(req.query.limit);
    let myresult = {
        code:0,
        count:100,
        data:layuiData.data.slice(start,end)
    }
    res.send(myresult);
})


app.listen(port, () => console.log(`服务器已经启动了`))