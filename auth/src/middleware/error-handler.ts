import { Request, Response, NextFunction } from "express"

import { RequestValidationError } from "../errors/request-validation-error"
import { DatabaseConnectionError } from "../errors/database-connection-error"

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if(err instanceof RequestValidationError){//if it is a req vali error
        console.log("handling as req vali error")
    }

    if(err instanceof DatabaseConnectionError){//if it is a db conni error
        console.log("handling as db conni error")
    }

    res.status(400).send(err.message)

}

export default errorHandler