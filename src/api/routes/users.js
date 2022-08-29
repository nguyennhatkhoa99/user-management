var UserService = require('../../services/users')
var express = require('express')
var validator = require('../middleware/valid')
var router = express.Router()

// router.get('/register', (req, res)=>{
// })
router.get('/users', async(req, res)=>{
    const allUser = new UserService()
    allUser.getUser().then(data => {
        return res.json({data})
    })
    
})
router.post('/register', async(req, res)=> {
    const userInfo = req.body
    const newUser = new UserService()
    // const validator = new validator()
    
    result = await newUser.addNewUser(userInfo)
    return res.json({result})
});
router.put('/users', async(req, res) =>{
    const userInfo = req.body
    const newUser = new UserService()
    result = await newUser.updateUser(userInfo)
    return res.json({result})
})
router.delete('/users', async(req, res) =>{
    const userInfo = req.body
    const delUser = new UserService()
    result = await delUser.deleteUser(userInfo)
    return res.json({result})
})
module.exports = router;