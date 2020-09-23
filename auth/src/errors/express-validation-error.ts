import { ValidationError } from "express-validator"
import { CustomError } from "./custom_error_abstract_class"

export class ExpressValidationError extends CustomError {

    status = 424

    constructor(public errors: ValidationError[]) {

        super()
        Object.setPrototypeOf(this, ExpressValidationError.prototype);

    }

    serialize_error() {

        return this.errors.map(error => {
            return { message: error.msg, field: error.param }
        })
    }

}