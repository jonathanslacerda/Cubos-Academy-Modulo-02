const express = require("express");

const { listaImoveis, filtroImoveis } = require('./controladores.js/controladores');

const app = express();


app.get("/imoveis", listaImoveis);
app.get("/imoveis/:id", filtroImoveis);


app.listen(8000)