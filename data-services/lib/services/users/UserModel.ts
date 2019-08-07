import { Document, Schema, Model, model, Types} from "mongoose";

const ObjectId= Schema.Types.ObjectId;

const UserSchema = new Schema({
    id: {
        type: String,
    },
    firstName: {
        type: String,
        unique: true
    },
    lastName: {
        type: String
    },
    rank: {
        type: Number
    }
});

export const UserModel: Model = model("Liam.User", UserSchema);