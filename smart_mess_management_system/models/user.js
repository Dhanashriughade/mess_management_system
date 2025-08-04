// const mongoose = require("mongoose");

// const userSchema = new mongoose. Schema({
//     name:{
//         type: String,
//         require: true
//     },
//     email:{
//         type: String,
//         unique: true
//     },
//     password:{
//         type: String,
//         require: true
//     },
//     role: {
//         type: String,
//         enum: ["user", "admin"],
//         default: "user"
//     }
// });

// module.exports = mongoose.model("user", userSchema);


// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true, // corrected spelling from 'require' to 'required'
//   },

//   email: {
//     type: String,
//     required: true, // make sure email is required too
//     unique: true,
//     lowercase: true,
//     trim: true
//   },

//   password: {
//     type: String,
//     required: true,
//   },

//   mobile: {
//     type: String,
//     required: true,
//     match: /^[0-9]{10}$/
//   },

//   year: {
//     type: String,
//     enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
//     required: true,
//   },

//   branch: {
//     type: String,
//     enum: ["CSE", "CE", "EE", "ME", "ENTC", "IE"],
//     required: true,
//   },

//   role: {
//     type: String,
//     enum: ["user", "admin"],
//     default: "user",
//   },

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   }
// });

// module.exports = mongoose.model("User", userSchema);




const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    year: {
        type: String,
        enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
        required: true
    },
    branch: {
        type: String,
        enum: ["CSE", "CE", "EE", "ME", "ENTC", "IE"],
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
});



module.exports = mongoose.model("User", userSchema);
