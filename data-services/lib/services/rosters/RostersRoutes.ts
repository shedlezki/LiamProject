import {Request, Response} from "express";
import {RostersDal} from './RostersDal';
import {Roster} from './Rosters'
export class RostersRoutes {
    public routes(app): void {
        var dal: RostersDal=new RostersDal();
        app.route('/rosters')
            .post((req: Request, res: Response) => {
                console.log(req)
                dal.createRoster(req.body);
                res.status(200).send(req.body)
            }).get((req: Request, res: Response) => {
                dal.getAllRosters().then(rosters => {
                    res.status(200).send(rosters);
                } );
            })
    }
}