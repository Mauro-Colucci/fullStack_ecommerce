const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./db')
const PORT = process.env.PORT || 5000
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const stripeRoute = require("./routes/stripe")

app.use(express.urlencoded({extended: true}))
app.use(express.json())


//routes
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server up on port ${PORT}`)
})