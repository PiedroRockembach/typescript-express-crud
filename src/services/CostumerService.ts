import { QueryResult } from "mysql2";
import { Database } from "../database"
import { Costumer, CostumerDTO } from "../models/CostumerDTO";
import { ErrorMessageResponse } from "../models/Error/ErrorResponses";
import { GetResultSuccess } from "../models/ResultDTO";

export const GetCostumers = async (): Promise<GetResultSuccess<CostumerDTO[]> | ErrorMessageResponse >  => {
    const query = "SELECT * FROM users WHERE active=`true`";
   try {
        const results = await Database.db!.Query(query) as Costumer[];

        const users: CostumerDTO[] = results.map((result) => {
            const user: CostumerDTO = {
                cpf: result.cpf,
                name: result.name,
            }
            return user;
        })
        return {
            status: 200,
            payload: users,
        } 
    } catch(e) {
        return {
            status: 500,
            message: "Ther server is not responding"
        }
    }
} 