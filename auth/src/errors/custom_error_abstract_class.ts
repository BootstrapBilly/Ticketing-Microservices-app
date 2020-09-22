export abstract class CustomError extends Error {

    abstract status: number//if you extend this class, you must provide a status prop which must be a number

    constructor() {

        super()
        Object.setPrototypeOf(this, CustomError.prototype);//Object.setprototype must be called to make it work

    }

    abstract serialize_error(): {//if you extend this class, you must provide a serialize error method which returns an array of objects
        message: string,//with the message field
        field?: string//and optionally, a field string
    }[]

}
