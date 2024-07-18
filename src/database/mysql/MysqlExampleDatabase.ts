import path from "path";
import { readFileSync } from "fs";
import { Connection, QueryResult } from "mysql2/promise";
import { IDatabase } from "../../models/Idatabase";

export class MysqlExempleDatabase implements IDatabase {
    _connection: Connection;

    constructor(connection: Connection) {
        this._connection = connection;
        const sqlQuery = readFileSync(path.resolve(".", "src/database/mysql/ExampleDatabase.sql"), "utf-8" );
        this._connection.query(sqlQuery);
    }

    async Query(query: string): Promise<QueryResult> {
        await this._connection.query(`USE ${ process.env.DATABASE_NAME }`)
        const [ results ] = await this._connection.query(query);
        return results;
    }
}