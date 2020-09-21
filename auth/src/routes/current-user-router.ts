const express = require("express")

const router = express.Router()

router.get('api/users/currentuser', (req, res)=> {

    res.send("current user route")
})

export default router