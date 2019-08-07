"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const UserSchema = new mongoose_1.Schema({
    _id: {
        type: ObjectId,
        default: new mongoose_1.Types.ObjectId
    },
    facebookId: {
        type: String,
        unique: true
    },
    cash: {
        type: Number,
        default: 5000
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
});
exports.UserModel = mongoose_1.model("User", UserSchema);
//# sourceMappingURL=UserModel.js.map