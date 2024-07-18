
import { CreateMysqlConnection, MysqlExempleDatabase } from "./mysql";
import { IDatabase, IDatabaseController } from "../models/Idatabase";
import { Connection } from "mysql2/promise";
import { StoreDatabase } from "./StoreDatabase";

let Database: IDatabaseController

CreateMysqlConnection()
    .then((conn: Connection) => new MysqlExempleDatabase(conn))
    .then((mysqDatabase: IDatabase) => Database = new StoreDatabase(mysqDatabase));

export {
    Database,
}
