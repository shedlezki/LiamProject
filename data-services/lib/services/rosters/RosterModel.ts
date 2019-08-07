import { Document, Schema, Model, model, Types} from "mongoose";

const ObjectId= Schema.Types.ObjectId;

const RosterSchema = new Schema({
    time: {
        type: Date
    },
    guard1: {
        type: String
    },
    guard2: {
        type: String
    },
    guard3: {
        type: String
    },
    guard4: {
        type: String
    },
    guard5: {
        type: String
    },

    count:{
        type: Number
    }
});

export const RosterModel: Model = model("Liam.Roster", RosterSchema);