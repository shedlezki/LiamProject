import {Request, Response} from "express";
import {UsersDal} from './UsersDal';
import {User} from './User'
export class UsersRoutes {
    public routes(app): void {
        var dal: UsersDal=new UsersDal();
        app.route('/users')
            .post((req: Request, res: Response) => {
                console.log(req)
                dal.createUser(req.body);
                res.status(200).send(req.body)
            }).get((req: Request, res: Response) => {
                dal.getAllUsers().then(users => {
                    res.status(200).send(users);
                } );
            })
    }
}