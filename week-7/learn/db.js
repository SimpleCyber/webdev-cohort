const mongoose =  require("mongoose")

// this object id we have to import from the mogoose
const ObjectId = mongoose.ObjectId;


// mongoose exposrts the class
const Schema = mongoose.Schema;


const User = new Schema({
    email :String,
    password :String,
    name : String
})

const Todo = new Schema({
    title : String,
    done : Boolean,
    // import object id 
    userId : ObjectId
})


// Okay, so what I want here as soon as I have the POST (meaning the signup POST) is for my username, email ID, password, and everything to be saved in my database. 

// For that, I have to define my data model => the collections i want to put into and everything. We can do this using Mongoose in db.js.

// this mongoose.model let to insert th data in the below models with the above specific schema

const UserModel =  mongoose.model('users', User);
const TodoModel =  mongoose.model('todos', Todo);


// export this models
module.exports = {
    UserModel : UserModel,
    TodoModel : TodoModel
}