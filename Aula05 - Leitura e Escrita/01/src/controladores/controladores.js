const bancoDados = require("../bancodedados/produtos");
const { getStateFromZipcode } = require("utils-playground")

const listarProdutos = (req, res) => {
    return res.send(bancoDados)
}


const idProduto = (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = bancoDados.find((produto) => {
        return Number(produto.id) === Number(idProduto);
    })

    return res.send(produtoEncontrado)
}

const calcularCep = async (req, res) => {
    const { idProduto, cep } = req.params;

    const produtoEncontrado = bancoDados.find((produto) => {
        return Number(produto.id) === Number(idProduto);
    })

    const cidade = await getStateFromZipcode(cep)
  
    let frete = 0;

    if (cidade == "BA" || cidade == "SE" || cidade == "AL" || cidade == "PE" || cidade == "PB") {
        frete = produtoEncontrado.valor * 0.1
    } else if (cidade == "SP" || cidade == "RJ") {
        frete = produtoEncontrado.valor * 0.15
    } else {
        frete = produtoEncontrado.valor * 0.12
    }

    console.log(cidade)
    console.log(produtoEncontrado)
    console.log(frete)

c
        produto: produtoEncontrado,
        estado: cidade,
        frete
    })
}

module.exports = {
    listarProdutos,
    idProduto,
    calcularCep
};