import express from "express"
import { costumerRouter } from "./Routes/costumerRouters"
const app = express();

app.use(express.json());
app.get("/healthcheck",(req,res) => res.status(200).send("Ok") )
app.use("/costumers", costumerRouter)


export default app