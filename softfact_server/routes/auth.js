const express = require("express")

const router = express.Router()

router.post("/login", (req, res) => {
  return res.status(201).json({ name: "iman", age: 32 })
})

router.post("/register", (req, res) => {
  // validate the user
  // tap into the database and create a new USER in the users collection in the database
})

router.post("/forgot-password", (req, res) => {})

router.post("/verify-otp", (req, res) => {})

router.post("/reset-password", (req, res) => {})

module.exports = router
