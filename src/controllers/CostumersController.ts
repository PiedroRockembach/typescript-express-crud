import { Request, Response } from "express";
import { GetCostumers } from "../services/CostumerService"
import { CostumerDTO } from "../models/CostumerDTO";
import { GetResultSuccess } from "../models/ResultDTO";
import { ErrorMessageResponse } from "../models/Error/ErrorResponses";
export const GetCostumersController = async (req: Request, res: Response) => {
    const costumers: GetResultSuccess<CostumerDTO[]> | ErrorMessageResponse = await GetCostumers();
    if(costumers.status === 200) {
        return res.status(200).json(costumers.payload);
    }
    return res.status(costumers.status).json(costumers.message)
}