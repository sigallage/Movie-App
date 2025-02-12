import app from "./server.js"
import mongodb from "mongodb"
import ReviewDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.env['MONGO_USERNAME']
const mongo_password = process.env['MONGO_PASSWORD']

const uri = `mongodb+srv://sgallage0000:dreamhigh@cluster0.hniz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const port = 8000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err =>{
        console.error(err.stack)
        process.exit(1)
    })

    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })