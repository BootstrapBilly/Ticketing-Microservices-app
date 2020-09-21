import express from "express"
import { json } from "body-parser"

//routers
import current_user_router from "./routes/current-user-router"
import login_router from "./routes/login-router"
import logout_router from "./routes/logout-router"
import signup_router from "./routes/signup-router"


const app = express()

app.use(json())

app.use(current_user_router)
app.use(login_router)
app.use(logout_router)
app.use(signup_router)

app.listen(3000, () => { console.log("Auth running on 3000") })