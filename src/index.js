//required('dotenv').config({ path: './env' })
import dotenv from 'dotenv'
import connectDB from "./db/index.js"

dotenv.config({ path: './env' })

connectDB()
.then(() => {
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection error: ", err)})






/*
import express from "express"

const app = express()
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR: ", error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR: ", error)
        throw error
    }
})()
*/