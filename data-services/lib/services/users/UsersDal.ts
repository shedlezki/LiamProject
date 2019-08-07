import * as mongoose from 'mongoose';
import {UserModel} from './UserModel';
import {User} from './User';

export class UsersDal{
    public mongoUrl: string = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';

    public createUser(user:User){
        this.mongoSetup();
        var u = new UserModel(user);
        u.save().catch(err => console.log(err));
    }
    public getAllUsers(): Promise<User[]>{
        this.mongoSetup();
        return UserModel.find({});
    }
    public getUser(query:object):Promise<User> {
        this.mongoSetup();
        return UserModel.findOne(query);
    }
    private mongoSetup(): void {
        return mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}