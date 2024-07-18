import { Router } from "express";
import { GetCostumersController } from "../controllers/UserController";
const costumerRouter = Router();

costumerRouter.get("/", (req, res) => GetCostumersController(req, res))

export {
    costumerRouter,
}