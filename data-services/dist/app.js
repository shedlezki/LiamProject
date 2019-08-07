"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes/routes");
const UsersRoutes_1 = require("./services/users/UsersRoutes");
const ImageSearchService_1 = require("./external-apis/images/ImageSearchService");
const BetsRoutes_1 = require("./services/bets/BetsRoutes");
class App {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.userRoutes = new UsersRoutes_1.UsersRoutes();
        this.betsRoute = new BetsRoutes_1.BetsRoutes();
        this.imageRoute = new ImageSearchService_1.ImageSearchService();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.userRoutes.routes(this.app);
        this.betsRoute.routes(this.app);
        this.imageRoute.routes((this.app));
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', '*');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map