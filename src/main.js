import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Pet from './router/pet'
// import User  from './router/routeruser'
const admin = require("firebase-admin")
const credentials = require("../key.json")

const app = express()

app.use(express.json())
app.use(cors())

admin.initializeApp({
  credential: admin.credential.cert(credentials)
})

const db = admin.firestore()


const server = app.listen(process.env.PORT, () => {
  console.log(`connected port ${process.env.PORT}`)
})

app.use('/api', Pet)
// app.use('/api', User)


app.post('/api/create', async (req, res) => {
  try {
    const userjson = {
      userName: req.body.userName,
      password: req.body.password,
      name: req.body.name,
      tokenDevice: req.body.tokenDevice,
    }

    console.log(userjson)
    // const response = db.collection("users").doc(id).set(userjson)// tuwj taoj id
    const response = db.collection("User").add(userjson)// tuwj taoj id

    res.send({
      status: true,
      message: "Đăng kí thành công"
    })

  } catch (error) {
    console.log(error)
    res.send({
      status: false,
      message: "Đăng kí bại"
    })
  }
})

app.post("/api/login", async (req, res) => {
  try {
    const userRequest = {
      userName : req.body.userName,
      password : req.body.password
    }
    const userRef = db.collection("User").doc(userRequest)
    const response = await userRef.get()
    res.send({
      status: true,
      message: "Đăng nhập thành công"
    })

  } catch (error) {
    console.log(error)
    res.send({
      status: false,
      message: "Thất bại"
    })
  }
})





