import express from "express"
import { json } from "body-parser"
import mongoose from "mongoose"

//routers
import current_user_router from "./routes/current-user-router"
import login_router from "./routes/login-router"
import logout_router from "./routes/logout-router"
import signup_router from "./routes/signup-router"
import catch_all_router from "./routes/catch-all-router"

//middleware
import error_handler from "./middleware/error-handler"

const app = express()

app.use(json())

app.use(current_user_router)
app.use(login_router)
app.use(logout_router)
app.use(signup_router)

app.use(catch_all_router)//if the url doesn't match any routes, the catch all router will throw an error

app.use(error_handler)//at the bottom of all middleware

const run_server = async () => {

    try {

        await mongoose.connect("mongodb://auth-mongo-cip:27017/auth", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        console.log("Connected to mongodb")

    }

    catch (error) { return console.error(error) }

    app.listen(3000, () => { console.log("Auth running on 3000") })

}

run_server()

