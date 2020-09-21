const express = require("express")

const router = express.Router()

router.post('api/users/login', (req, res)=> {

    res.send("login route")
})

export default router