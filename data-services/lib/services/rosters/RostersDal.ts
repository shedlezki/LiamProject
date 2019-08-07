import * as mongoose from 'mongoose';
import {RosterModel} from './RosterModel';
import {Roster} from './Rosters';

export class RostersDal{
    public mongoUrl: string = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';

    public createRoster(user:Roster){
        this.mongoSetup();
        var u = new RosterModel(user);
        u.save().catch(err => console.log(err));
    }
    public getAllRosters(): Promise<Roster[]>{
        this.mongoSetup();
        return RosterModel.find({});
    }
    public getRoster(time:Date): Promise<Roster>{
        this.mongoSetup();
        return RosterModel.findOne({time:time});
    }
    public setMan(time:Date, guard1:string, guard2:string, guard3:string, guard4:string, guard5:string){
        this.mongoSetup();
        RosterModel.findOneAndUpdate({time:time}, {$set:{guard1: guard1,guard2: guard2,guard3: guard3,guard4: guard4,guard5: guard5}}).then(a=>{});
    }
    private mongoSetup(): void {
        return mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}