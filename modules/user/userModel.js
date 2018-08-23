const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        default: 1
    },
    status: {
        type: Boolean,
        default: true
    },
    username: {
        type: String,
        required: true
    },
    updatedTime: {
        type: Date,
        default: new Date
    },
}, {
        versionKey: false,
        timestamps: true
    });


userSchema.statics.getUserLists = function () {
    return user.find({ role: 1 }, { password: 0, updatedAt: 0, createdAt: 0 });
};

userSchema.statics.updateUser = function (id, filedsToUpdate) {
    return this.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(id) }, filedsToUpdate);
};

userSchema.statics.deleteUser = function (id) {
    return this.remove({ "_id": mongoose.Types.ObjectId(id) });
};

let user = mongoose.model('users', userSchema);
module.exports = user;
