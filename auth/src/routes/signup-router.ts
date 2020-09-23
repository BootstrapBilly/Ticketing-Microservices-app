import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"

import { ExpressValidationError } from "../errors/express-validation-error"
import { CustomValidationError } from "../errors/custom-validation-error"

import User from "../models/user"

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

    ], async (req: Request, res: Response) => {

        const errors = validationResult(req)//see if there were any errors on the validation result

        if (!errors.isEmpty()) throw new ExpressValidationError(errors.array())//if an error was detected, throw it using the custom error type

        const { email, password } = req.body //extract the data from the request body

        const email_in_use = await User.findOne({ email: email })//check if the email is in use

        if (email_in_use) {//if the email is in use
            throw new CustomValidationError("That email is in use")
        }

        const user = User.build({ email: email, password: password })//create the new user

        const user_saved = await user.save()//save them

        if (user_saved) return res.status(201).json({ message: "User saved", user: user })

    })

export default router