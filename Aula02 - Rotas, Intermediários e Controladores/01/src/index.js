const express = require("express");

const { 
    somatorio,
    subtracao,
    multicacao,
    divisao
 } = require("./controladores/controladores")

const app = express();


app.get("/somar", somatorio);

app.get("/subtrair", subtracao);

app.get("/multiplicar", multicacao);

app.get("/dividir", divisao);

app.listen(3000);