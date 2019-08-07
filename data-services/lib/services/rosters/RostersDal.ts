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
    private mongoSetup(): void {
        return mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}