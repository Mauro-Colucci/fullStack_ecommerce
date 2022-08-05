const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

//REGISTER
//POST /register
router.post('/register', async(req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        //using cryptojs to encode password with aes. I could use bcrypt
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    })
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//LOGIN
//POST /LOGIN
router.post('/login', async(req, res)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        !user && res.status(401).json('wrong credentials')
        //decripting password with cryptojs and comparing with enetered password
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET)
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        originalPassword !== req.body.password && res.status(401).json('wrong credentials')

        //jwt
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, {expiresIn:'3d'})
        //sending everything as json except for the password (monbo stores this in _doc, hence user._doc)
        const {password, ...others} = user._doc

        //using spread operator to send an object, instead of the object others and accesstoken
        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router