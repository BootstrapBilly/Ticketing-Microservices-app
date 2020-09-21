import { Request, Response, NextFunction } from "express"

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    console.log("Something went wrong", err)

    res.status(400).send("Something went wrong")

}

export default errorHandler