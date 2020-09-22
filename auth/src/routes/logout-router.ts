import express, { Request, Response } from "express"

const router = express.Router()

router.post('/api/users/logout', (req: Request, res: Response) => {

    res.send("logout route")
})

export default router