import mongoose from "mongoose"

//interface to describe the properties which are required to create a new user
interface required_attributes {//used in the create_user function

    email: string
    password: string

}

//interface to describe the properties that the user model has
interface user_model extends mongoose.Model<all_attributes> {//use all the existing properties from the mongoose model

    build(attributes:required_attributes): all_attributes//add a new method which takes in the attributes of the object

}

//interface to describe the properties that a user document can have
interface all_attributes extends mongoose.Document{

    email:string
    password:string
    

}

const user_schema = new mongoose.Schema({

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }

})

user_schema.statics.build = (attributes: required_attributes) => {//add a static method to the user schema class

    return new User(attributes)//return a new instantiation of the user

}

const User = mongoose.model<all_attributes, user_model>("User", user_schema)

export default User