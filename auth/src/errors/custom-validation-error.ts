import { CustomError } from "./custom_error_abstract_class"

export class CustomValidationError extends CustomError {

    status = 424

    constructor(public reason:string) {

        super()
        Object.setPrototypeOf(this, CustomValidationError.prototype);

    }

    serialize_error() {

        return [{ message: this.reason }];
        
    }

}