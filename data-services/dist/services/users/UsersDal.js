"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserModel_1 = require("./UserModel");
class UsersDal {
    constructor() {
        this.mongoUrl = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';
    }
    createUser(user) {
        this.mongoSetup();
        var u = new UserModel_1.UserModel(user);
        u.save().catch(err => console.log(err));
    }
    getAllUsers() {
        this.mongoSetup();
        return UserModel_1.UserModel.find({});
    }
    getUser(query) {
        this.mongoSetup();
        return UserModel_1.UserModel.findOne(query);
    }
    mongoSetup() {
        return mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.UsersDal = UsersDal;
//# sourceMappingURL=UsersDal.js.map