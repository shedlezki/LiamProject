"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BetsDal_1 = require("./BetsDal");
const Bet_1 = require("./Bet");
class BetsRoutes {
    routes(app) {
        var dal = new BetsDal_1.BetsDal();
        app.route('/bets')
            .get((req, res) => {
            dal.getAllBets().then(bets => {
                res.status(200).send(bets);
            });
        })
            .post((req, res) => {
            console.log(req.body);
            let betJSON = req.body;
            let bet = new Bet_1.Bet();
            bet.topic = betJSON.topic;
            bet.image = betJSON.image;
            bet.options = betJSON.options;
            bet.createTime = new Date();
            bet.endTime = betJSON.endTime;
            bet.resultsTime = betJSON.resultsTime;
            bet.creator = betJSON.creator;
            dal.createBet(bet);
            console.log('post');
            res.status(200).send();
        });
        app.route('/bets/:bid')
            .get((req, res) => {
            dal.getBet(req.params.bid).then(bet => {
                res.status(200).send(bet);
            });
        }).patch((req, res) => {
            dal.getBet(req.params.bid).then(bet => {
                res.status(200).send(bet);
            });
        });
    }
}
exports.BetsRoutes = BetsRoutes;
//# sourceMappingURL=BetsRoutes.js.map