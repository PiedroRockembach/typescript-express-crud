import { ConnectionOptions, QueryResult } from 'mysql2/promise'
import {ISqlTable} from '.'

export interface IDatabase {
    _connection: unknown
    Query(query: string): Promise<QueryResult>
}

export interface IDatabaseController {
    db: IDatabase | null


}