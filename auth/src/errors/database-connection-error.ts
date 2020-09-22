export class DatabaseConnectionError extends Error {//make an exported class

    reason = "Failed to connect to the database"//give a reason

    constructor() {

        super()//call the super to make it work

        //because the class is extending a built in class (Error)
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);//Object.setprototype must be called to make it work

    }

}