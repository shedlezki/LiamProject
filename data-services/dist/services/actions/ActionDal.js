"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const ActionModel_1 = require("./ActionModel");
class ActionDal {
    constructor() {
        this.mongoUrl = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';
    }
    createAction(action) {
        this.mongoSetup();
        var u = new ActionModel_1.ActionModel(action);
        u.save().catch(err => console.log(err));
    }
    getActions(query) {
        this.mongoSetup();
        return ActionModel_1.ActionModel.find(query);
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.ActionDal = ActionDal;
//# sourceMappingURL=ActionDal.js.map