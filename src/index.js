import express from "express";
import cors from "cors";

import routeProduto from "./routes/route.produto.js";
import routePedido from "./routes/route.pedido.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

// Levanta o servidor
app.listen(port, (req, res) => console.log(`Servidor rodando na porta ${port}`));

// Rotas
app.use(routeProduto);
app.use(routePedido);