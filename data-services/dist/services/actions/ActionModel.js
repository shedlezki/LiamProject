"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ActionSchema = new mongoose_1.Schema({
    _id: {
        type: mongoose_1.Types.ObjectId,
        default: new mongoose_1.Types.ObjectId
    },
    betId: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    optionId: {
        type: mongoose_1.Types.ObjectId,
        required: true
    },
    createTime: {
        type: Date,
        default: Date.now()
    },
    stake: {
        type: Number,
        required: true
    }
});
exports.ActionModel = mongoose_1.model("Action", ActionSchema);
//# sourceMappingURL=ActionModel.js.map