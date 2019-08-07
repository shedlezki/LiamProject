import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/routes";
import { UsersRoutes } from "./services/users/UsersRoutes";
import { ConstraintsRoutes } from "./services/constraints/ConstraintsRoutes";
import {RostersRoutes} from "./services/rosters/RostersRoutes"
import {Bl} from "./services/bl/bl"
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public userRoutes: UsersRoutes = new UsersRoutes();
    public constRoutes: ConstraintsRoutes = new ConstraintsRoutes();
    public rosterRoutes: RostersRoutes = new RostersRoutes();
    public bl: Bl = new Bl();

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.userRoutes.routes(this.app);
        this.rosterRoutes.routes(this.app);
        this.constRoutes.routes(this.app);
        this.bl.routes(this.app);
            }

    private config(): void{
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

export default new App().app;