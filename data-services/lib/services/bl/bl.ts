import {Request, Response} from "express";
import {UsersDal} from '../users/UsersDal';
import {User} from '../users/User'
import {RostersDal} from '../rosters/RostersDal';
import {Constraint} from '../constraints/Constraints'
import {ConstraintsDal} from '../constraints/ConstraintsDal';
import {Roster} from '../rosters/Rosters'
export class Bl {
    private static removeUser(users:User[], id:string): User[]{
        if(!id)
            return users;
        for(var u=0;u<users.length; u++){
            // console.log(users[u]);
            if(users[u].id==id){
                users.splice(u,1);
                return users;
            }
        }
        return users;
    }
    public routes(app): void {
        var udal: UsersDal = new UsersDal();
        var cdal: ConstraintsDal = new ConstraintsDal();
        var rdal: RostersDal = new RostersDal();
        app.route('/rosters/:date/setManning').post((req: Request, res: Response) => {
             console.log(req.params.date);
            let time:Date=new Date(Date.parse(req.params.date));
             rdal.setMan(time,req.body.guard1,req.body.guard2,req.body.guard3,req.body.guard4,req.body.guard5);
            res.status(200).send(req.body)
        });
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
                                roster.guard1=r.guard1;
                                roster.guard2=r.guard2;
                                roster.guard3=r.guard3;
                                roster.guard4=r.guard4;
                                roster.guard5=r.guard5;
                            }


                            udal.getUser(roster.guard1).then(guard1=>{
                                udal.getUser(roster.guard2).then(guard2=>{
                                    udal.getUser(roster.guard3).then(guard3=>{
                                        udal.getUser(roster.guard4).then(guard4=>{
                                            udal.getUser(roster.guard5).then(guard5=>{
                                                users=Bl.removeUser(users,roster.guard1);
                                                if(guard1)
                                                 roster.guard1=guard1.firstName+" "+guard1.lastName;
                                                users=Bl.removeUser(users,roster.guard2);
                                                if(guard2)
                                                roster.guard2=guard2.firstName+" "+guard2.lastName;
                                                users=Bl.removeUser(users,roster.guard3);
                                                if(guard3)
                                                roster.guard3=guard3.firstName+" "+guard3.lastName;
                                                users=Bl.removeUser(users,roster.guard4);
                                                if(guard4)
                                                roster.guard4=guard4.firstName+" "+guard4.lastName;
                                                users=Bl.removeUser(users,roster.guard5);
                                                if(guard5)
                                                roster.guard5=guard5.firstName+" "+guard5.lastName;
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
                            });

                    });

                    });
                });
            });
    }
}