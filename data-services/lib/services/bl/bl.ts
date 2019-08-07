import {Request, Response} from "express";
import {UsersDal} from '../users/UsersDal';
import {User} from '../users/User'
import {RostersDal} from '../rosters/RostersDal';
import {Constraint} from '../constraints/Constraints'
import {ConstraintsDal} from '../constraints/ConstraintsDal';
import {Roster} from '../rosters/Rosters'
export class Bl {
    private static removeUser(users:User[], id:string): User[]{
        for(var u=0;u++<users.length; u++){
            if(users[u].id==id){
                users.splice(u,1);
            }
        }
        return users;
    }
    public routes(app): void {
        var udal: UsersDal = new UsersDal();
        var cdal: ConstraintsDal = new ConstraintsDal();
        var rdal: RostersDal = new RostersDal();
        app.route('/rosters/:date')

            .get((req: Request, res: Response) => {
                let time:Date=new Date(Date.parse(req.params.date));
                rdal.getRoster(time).then(r => {
                    udal.getAllUsers().then(users =>{
                        cdal.getAllConstraints({time:time}).then(constraints => {
                            let roster:Roster;
                            if(!r){
                                console.log('no');
                                roster=new Roster();
                                roster.time=time;
                                rdal.createRoster(roster);
                            }
                            else{
                                roster=new Roster();
                                roster.time=time;
                                roster.manning=r.manning;
                            }
                            console.log(users);
                            console.log(constraints);
                            for(let m in roster.manning){
                                users=Bl.removeUser(users,m);
                            }
                            for(let c of constraints){
                                users=Bl.removeUser(users, c.userId);
                            }
                            let u:User=new User();
                            u.id='6058173';
                            roster.options=users;
                            res.status(200).send(roster);
                    });

                    });
                });
            });
    }
}