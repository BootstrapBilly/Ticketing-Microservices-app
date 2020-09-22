import { Request, Response, NextFunction } from "express"

import { RequestValidationError } from "../errors/request-validation-error"
import { DatabaseConnectionError } from "../errors/database-connection-error"

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof RequestValidationError) {//if it is a req vali error

        const formatted_errors = err.errors.map(error => {

            return { message: error.msg, field: error.param }

        })

        return res.status(424).send({ errors: formatted_errors })
    }

    if (err instanceof DatabaseConnectionError) {//if it is a db conni error

        return res.status(500).send({ errors: [{ message: err.reason }] })

    }

    res.status(400).send({errors:[{message: "Something went wrong"}]})

}

export default errorHandler