const express = require("express");
const app = express();

let rodando = false;
let minutos = 0;
let segundos = 0;

let setIntervalDisparado = false;

function iniciarCronometro() {
    rodando = true;

    if (!setIntervalDisparado) {
        setInterval(() => {
            if (rodando) {
                if(segundos === 59) {
                    segundos = 0;
                    minutos++
                } else {
                    segundos++
                };
            };
        }, 1000);

        setIntervalDisparado = true;

    };
};


app.get("/", (req, res) => {
    return res.send(`O tempo atual do cronometro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`)
});

app.get("/iniciar", (req, res) => {
    iniciarCronometro()
    return res.send(`Cronômetro iniciado!`)
});

app.get("/pausar", (req, res) => {
    rodando = false;
    return res.send(`Cronômetro pausado!`)
});

app.get("/continuar", (req, res) => {
    rodando = true;
    return res.send(`Cronômetro pausado!`)
});

app.get("/zerar", (req, res) => {
    minutos = 0;
    segundos = 0;
    return res.send(`Cronômetro zerado!`)
});


app.listen(8000, () => {
    console.log(`Servidor iniciado!`)
});