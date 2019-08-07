import { Document, Schema, Model, model, Types} from "mongoose";

const ObjectId= Schema.Types.ObjectId;

const RosterSchema = new Schema({
    time: {
        type: Date
    },
    manning: {
        type: [String]
    },
    count:{
        type: Number
    }
});

export const RosterModel: Model = model("Liam.Roster", RosterSchema);