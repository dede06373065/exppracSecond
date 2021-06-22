const express = require('express')
const app = express()

const tasks = []
let id = 1

app.use(express.json())//看看有没有body，如果有的话变成对象放在req.body中；
app.get('/', (req, res) => {
    res.send('Practice!')
})

app.get('/tasks', (req, res) => {
    const tasks = req.body
    res.send(tasks)
})//查找所有的tasks

app.post('/tasks', (req, res) => {
    const { des } = req.body
    const task = { id: id++, des: des, done: false }
    tasks.push(task)
    res.send(task)
})//实现post操作

app.get('/tasks/:id', (req, res) => {
    const studentId = req.params
    tasks.map((item,index)=>{
        if(item.id===studentId){
            return res.send(item)
        }

    })
    

})

app.get('/task/:id', (req, res) => {

})

app.listen(3000, (req, res) => {
    console.log('Success in port 3000!')
})