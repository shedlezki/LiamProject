"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UsersDal_1 = require("./UsersDal");
const User_1 = require("./User");
class UsersRoutes {
    routes(app) {
        var dal = new UsersDal_1.UsersDal();
        app.route('/users')
            .post((req, res) => {
            var usr = JSON.parse(req.body.user);
            var user = new User_1.User();
            user.username = usr.username;
            user.facebookId = usr.facebookId;
            dal.createUser(user);
            res.status(200).send(user);
        }).put((req, res) => {
            var usr = JSON.parse(req.body.user);
            var query = {};
            query['facebookId'] = usr.facebookId;
            dal.getUser(query).then(returnedUser => {
                if (returnedUser)
                    res.status(200).send(returnedUser);
                else {
                    var user = new User_1.User();
                    user.username = usr.username;
                    user.facebookId = usr.facebookId;
                    dal.createUser(user);
                    res.status(200).send(user);
                }
            });
        })
            .get((req, res) => {
            dal.getAllUsers().then(users => {
                res.status(200).send(users);
            });
        });
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=UsersRoutes.js.map