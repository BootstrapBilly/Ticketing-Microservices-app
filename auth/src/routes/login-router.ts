import express, { Request, Response } from "express"

const router = express.Router()

router.post('/api/users/login', (req: Request, res: Response) => {

    res.send("login route")
})

export default router