const express = require("express")

const router = express.Router()

router.post('api/users/logout', (req, res)=> {

    res.send("logout route")
})

export default router