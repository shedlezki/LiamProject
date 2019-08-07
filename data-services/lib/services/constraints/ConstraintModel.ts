import { Document, Schema, Model, model, Types} from "mongoose";

const ObjectId= Schema.Types.ObjectId;

const ConstraintSchema = new Schema({
    time: {
        type: Date
    },
    userId: {
        type: String
    },
    reason: {
        type: String
    }
});

export const ConstraintModel: Model = model("Liam.Constraint", ConstraintSchema);