import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"

import { RequestValidationError } from "../errors/request-validation-error"
import { DatabaseConnectionError } from "../errors/database-connection-error"

const router = express.Router()

router.post('/api/users/signup',
    [
        body("email")
            .isEmail()
            .withMessage("Please enter a valid email"),

        body("password")
            .trim()
            .isLength({ min: 4, max: 20 })
            .withMessage("Password must be between 4 and 20 characters")

    ], (req: Request, res: Response) => {

        const errors = validationResult(req)//see if there were any errors on the validation result

        if (!errors.isEmpty()) {//if an error has been detected

            throw new RequestValidationError(errors.array())
        }

        throw new DatabaseConnectionError()

    })

export default router