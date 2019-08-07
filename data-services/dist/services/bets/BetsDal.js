"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BetModel_1 = require("./BetModel");
class BetsDal {
    constructor() {
        this.mongoUrl = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';
    }
    createBet(bet) {
        this.mongoSetup();
        var u = new BetModel_1.BetModel(bet);
        u.save().catch(err => console.log(err));
    }
    getAllBets() {
        this.mongoSetup();
        return BetModel_1.BetModel.find({});
    }
    getBet(id) {
        this.mongoSetup();
        return BetModel_1.BetModel.findOne({ _id: id });
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        return mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.BetsDal = BetsDal;
//# sourceMappingURL=BetsDal.js.map