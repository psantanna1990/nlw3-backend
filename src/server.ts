import express from "express";
// Pacote para tratar com erros assyncronos no express
import "express-async-errors";
import cors from "cors";

import routes from "./routes";
import path from "path";
import "./database/connection";
import errorHandler from "./errors/handler";

const app = express();

// Libera o acesso a cors domains
app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333);
