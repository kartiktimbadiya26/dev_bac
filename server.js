const { app } = require(".");
const { connectDb } = require("./src/config/db");

const PORT=5454;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})