const jogadores = require("../banco-dados");

let jogadaDaVez = 0;

const jogadorDaRodada = (req, res) => {

    const nomeJogador = jogadores[jogadaDaVez];
    jogadaDaVez++

    if (jogadaDaVez >= jogadores.length) {
        jogadaDaVez = 0;
    };

    return res.send(`É a vez de ${nomeJogador} jogar!`)
};


const removerJogador = (req, res) => {
    const { indice } = req.query;

    if (indice >= jogadores.length) {
        return `Não existe jogador no índice informado ${indice} para ser removido`
    } else {
        jogadores.splice(indice, 1);
    }

    res.send(jogadores);
};


const adicionarJogador = (req, res) => {
    const { nome } = req.query;
    
    jogadores.push(nome)

    res.send(jogadores);
}


module.exports = {
    jogadorDaRodada,
    removerJogador,
    adicionarJogador
}