const express = require('express')
const router = express.Router()
const { userRegiter, getProfiles } = require('../controllers/usersController')
const { isLogin} = require ('../middlewares/isLogin')
const { reportRequest } = require('../middlewares/logger')

router.post('/usuarios',reportRequest, userRegiter )
router.get('/usuarios', reportRequest, isLogin, getProfiles)

module.exports = router
    
