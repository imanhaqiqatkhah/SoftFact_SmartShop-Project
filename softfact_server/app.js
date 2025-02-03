const bodyParser = require("body-parser")
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
require("dotenv/config")

const app = express()
const env = process.env

app.use(bodyParser.json())
app.use(morgan("tiny"))
app.use(cors())
app.options("*", cors())

const authRouter = require("./routes/auth")

app.use("/", authRouter)

///// Routes /////
// login
// register
// forgot-password
// add-category
// remove-category
// edit-category
// fetch category

// Start the Server
// localhost >> 192.168.0.0
const hostname = env.HOST
const port = env.PORT

mongoose
  .connect(env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to database")
  })
  .catch((error) => {
    console.error(error)
  })

app.listen(port, hostname, () => {
  console.log(`Success at http://${hostname}:${port}`)
})

// C R U D
// CREATE DATA
// app.post("/register")
// READ DATA
// app.get("/")
// UPDATE DATA
// app.put()
// DELETE DATA
// app.delete()
// http.post("register")

// controller.addListener(() => {
//   variable = newValue
// })
