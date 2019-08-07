import * as mongoose from 'mongoose';
import {ConstraintModel} from './ConstraintModel';
import {Constraint} from './Constraints';

export class ConstraintsDal{
    public mongoUrl: string = 'mongodb+srv://gadmin:gadmin@gamebelldb-pak4u.mongodb.net/test?retryWrites=true';

    public createConstraint(constraint:Constraint){
        this.mongoSetup();
        var c = new ConstraintModel(constraint);
        c.save().catch(err => console.log(err));
    }
    public getAllConstraints(q?: object): Promise<Constraint[]>{
        this.mongoSetup();
        return ConstraintModel.find(q);
    }

    private mongoSetup(): void {
        return mongoose.connect(this.mongoUrl, {useNewUrlParser: true});
    }

}