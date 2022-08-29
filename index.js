const express = require('express')
const cors = require('cors')
const router = require('./src/api/routes/users')
const bodyParser = require("body-parser");
const port = 3000

const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3001',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true,
}))

app.use('/', router)
app.use(bodyParser.json());
app.listen(port, (err) =>{
  if(err){
    console.log('Something happened', err)
  }
  console.log(`server is listening on ${port}`)
})