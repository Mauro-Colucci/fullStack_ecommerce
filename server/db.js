const mongoose = require('mongoose')


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {UseNewUrlParser: true})
        console.log(`connected to mongo on host: ${conn.connection.host} and DB: ${conn.connection.name}`)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB