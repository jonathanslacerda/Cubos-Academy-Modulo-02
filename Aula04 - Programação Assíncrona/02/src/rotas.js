const express = require("express");
const controladores = require("./controladores");
const rotas = express();

rotas.get("/pokemon", controladores.pokemons);
rotas.get("/pokemon/:idOuNome", controladores.pokemon);

module.exports = rotas;

