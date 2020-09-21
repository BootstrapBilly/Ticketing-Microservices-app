import express from "express"
import { json } from "body-parser"

const app = express()

app.use(json())

app.get("/api/users/currentuser", (_,res) => {

    res.status(200).send("Its working")
})

app.listen(3000, () => { console.log("Auth running on 3000") })