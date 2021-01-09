const mongoose =  require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    }

}, {
    timestamps: true // created at, updated at property
})

module.exports =  mongoose.model("user", UserSchema);
