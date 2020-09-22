import express, { Request, Response } from "express"

import { RouteNotFoundError } from "../errors/route-not-found-error"

const router = express.Router()

router.all('*', (req: Request, res: Response) => {

        throw new RouteNotFoundError()

    })

export default router