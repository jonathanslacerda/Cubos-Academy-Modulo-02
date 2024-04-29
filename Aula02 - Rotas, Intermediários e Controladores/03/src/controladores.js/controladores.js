const imoveis = require("../dados");

const listaImoveis = (req, res) => {
    
    res.send(imoveis);

};


const filtroImoveis = (req, res) => {

    const { id } = req.params

    const imovelEncontrado = imoveis.find((imovel) => {
        return imovel.id === Number(id)
    })

    res.send(imovelEncontrado);
};

module.exports = {
    listaImoveis,
    filtroImoveis
}