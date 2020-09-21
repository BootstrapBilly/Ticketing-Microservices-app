import express, { Request, Response } from "express"
import { body, validationResult } from "express-validator"

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

        if(!errors.isEmpty()){//if an error has been detected
            return res.status(400).send(errors.array())//send a error response
        } 

        const { email, password } = req.body

        res.send("signup route")
    })

export default router