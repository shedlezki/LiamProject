"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OptionSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
        default: new mongoose_1.Types.ObjectId
    },
    option: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
});
const BetSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
        default: new mongoose_1.Types.ObjectId
    },
    topic: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createTime: {
        type: Date,
        default: Date.now()
    },
    endTime: {
        type: Date
    },
    resultsTime: {
        type: Date
    },
    creator: {
        type: String,
        required: true
    },
    options: {
        type: [OptionSchema],
        required: true
    }
});
exports.BetModel = mongoose_1.model("Bet", BetSchema);
//# sourceMappingURL=BetModel.js.map