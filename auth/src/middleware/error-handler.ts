import { Request, Response, NextFunction } from "express"

import { CustomError } from "../errors/custom_error_abstract_class"

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof CustomError) {//if it is a req vali error

        return res.status(err.status).send({ errors: err.serialize_error() })
    
    }


    res.status(400).send({ errors: [{ message: "Something went wrong" }] })

}

export default errorHandler