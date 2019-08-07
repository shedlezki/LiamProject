"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionDal_1 = require("./ActionDal");
const Action_1 = require("./Action");
class BetsRoutes {
    routes(app) {
        var dal = new ActionDal_1.ActionDal();
        app.route('/actions')
            .get((req, res) => {
            let query = {};
            if (req.query.optionId) {
                query['optionId'] = req.query.optionId;
            }
            if (req.query.userId) {
                query['userId'] = req.query.userId;
            }
            dal.getActions(query).then(actions => {
                res.status(200).send(actions);
            });
        })
            .post((req, res) => {
            console.log(req.body);
            let actionJSON = req.body;
            let action = new Action_1.Action();
            action.betId = actionJSON.betId;
            action.userId = actionJSON.userId;
            action.optionId = actionJSON.optionId;
            action.stake = actionJSON.stake;
            action.createTime = new Date();
            dal.createAction(action);
            console.log('post');
            res.status(200).send();
        });
    }
}
exports.BetsRoutes = BetsRoutes;
//# sourceMappingURL=ActionRoutes.js.map