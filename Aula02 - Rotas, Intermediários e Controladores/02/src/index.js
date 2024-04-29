const express = require("express");

const { jogadorDaRodada, removerJogador, adicionarJogador } = require("./controladores/jogadores");

const app = express();


app.get("/", jogadorDaRodada);

app.get("/remover", removerJogador);

app.get("/adicionar", adicionarJogador);



app.listen(8000)