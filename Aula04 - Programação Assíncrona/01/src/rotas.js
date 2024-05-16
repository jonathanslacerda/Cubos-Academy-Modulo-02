const express = require("express");
const controladores = require("./controladores/controladores");
const rotas = express();

rotas.get("/produtos", controladores.listarProdutos);
rotas.get("/produtos/:idProduto", controladores.idProduto);
rotas.get("/produtos/:idProduto/frete/:cep", controladores.calcularCep);

module.exports = rotas;