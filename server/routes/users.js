const User = require('../models/User')
const { verifyTokenAuthorization, verifyTokenAdmin } = require('./verifyToken')
const router = require('express').Router()

//UPFATE USER
//PUT /:ID
router.put('/:id', verifyTokenAuthorization, async(req, res)=>{
    if(req.body.password) {
        req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER
//DELETE /:ID
router.delete('/:id', verifyTokenAuthorization, async(req, res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER
//GET /FIND/:ID
router.get('/find/:id',verifyTokenAdmin, async(req, res)=>{
    try {
        const user = await User.findById(req.params.id)
        const {password, ...other} = user._doc
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL USERS
//GET /
router.get('/',verifyTokenAdmin, async(req, res)=>{
    const query = req.query.new
    try {
        const users = query
        //returns the 5 latest created users 
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER STATS
//GET /stats
router.get('/stats', verifyTokenAdmin, async(req, res)=>{
    const date = new Date()
    //sets the date a year before the date variable above
    const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
    console.log(lastYear)
    try {
        const data = await User.aggregate([
            //matches my condition for createdat greater than lastyear
            {$match: {createdAt: {$gte: lastYear}}},
            {
                //taked the month variable and setis it to the month of createdat
                $project:{
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group:{
                    _id: "$month",
                    //sums every registered user for the month
                    total: {$sum:1}
                }
            }
        ])
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

   
module.exports = router