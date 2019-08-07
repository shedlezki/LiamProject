import {Request, Response} from "express";
import {ConstraintsDal} from './ConstraintsDal';
import {Constraint} from './Constraints'
export class ConstraintsRoutes {
    public routes(app): void {
        var dal: ConstraintsDal=new ConstraintsDal();
        app.route('/constraints')
            .post((req: Request, res: Response) => {
                console.log(req)
                let time:Date=new Date(Date.parse(req.body.time));
                console.log(time);
                req.body.time=time;
                let c:Constraint=new Constraint();
                c.time=time;
                c.userId=req.body.userId;
                c.reason=req.body.reason;
                dal.createConstraint(c);
                res.status(200).send(c)
            }).get((req: Request, res: Response) => {
                dal.getAllConstraints().then(rosters => {
                    res.status(200).send(rosters);
                } );
            })
    }
}