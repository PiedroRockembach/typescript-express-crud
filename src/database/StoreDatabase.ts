import { IDatabase, IDatabaseController } from "../models/Idatabase";


export class StoreDatabase implements IDatabaseController {
    db: IDatabase

    constructor(database: IDatabase) {
        this.db = database;
    }
}
