const express = require("express")

const router = express.Router()

router.post('api/users/signup', (req, res)=> {

    res.send("signup route")
})

export default router