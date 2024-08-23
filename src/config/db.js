const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const mongoDbUrl = "mongodb+srv://kartik:PE6HmGpXhWuLnTQk@cluster0.bej3wgt.mongodb.net/?retryWrites=true&w=majority";
const connectDb = () => {
    return mongoose.connect(mongoDbUrl)
}

module.exports = { connectDb }