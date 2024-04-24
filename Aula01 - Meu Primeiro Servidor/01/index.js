const express = require("express");
const app = express();

const jogadas = require("./jogadores");

let jogadaDaVez = 0;

app.get("/", (req, res) => {
    const nomeJogador = jogadas[jogadaDaVez];
    jogadaDaVez++

    if(jogadaDaVez >= jogadas.length) {
        jogadaDaVez = 0;
    };

    return res.send(`É a vez de ${nomeJogador} jogar!`)
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000")
});
