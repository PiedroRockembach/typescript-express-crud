import mysql, {ConnectionOptions, Connection} from "mysql2/promise";
import { MysqlExempleDatabase } from "./MysqlExampleDatabase";


const CreateMysqlConnection = async (): Promise<Connection> => {
    const connectionOptions: ConnectionOptions = {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.MYSQL_ROOT_PASSWORD
    }
    return mysql.createConnection(connectionOptions);
   
}

export {
    CreateMysqlConnection,
    MysqlExempleDatabase,
}