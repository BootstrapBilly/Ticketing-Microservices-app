import { CustomError } from "./custom_error_abstract_class"

export class DatabaseConnectionError extends CustomError {//make an exported class

    status = 500
    reason = "Failed to connect to the database"//give a reason

    constructor() {
        super()//call the super to make it work
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serialize_error() {

        return [{ message: this.reason }];

    }
}