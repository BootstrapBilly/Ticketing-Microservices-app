import { CustomError } from "./custom_error_abstract_class"

export class RouteNotFoundError extends CustomError {//make an exported class

    status = 404
    reason = "Route not found"//give a reason

    constructor() {
        super()//call the super to make it work
        Object.setPrototypeOf(this, RouteNotFoundError.prototype);
    }

    serialize_error() {

        return [{ message: this.reason }];

    }
}