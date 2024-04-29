const somatorio = (req, res) => {
    const { num1, num2 } = req.query
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    let resultado = numero1 + numero2;

    res.send(`${resultado}`);
};

const subtracao = (req, res) => {
    const { num1, num2 } = req.query
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    let resultado = numero1 - numero2;

    res.send(`${resultado}`);
};

const multicacao = (req, res) => {
    const { num1, num2 } = req.query
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    let resultado = numero1 * numero2;

    res.send(`${resultado}`);
};

const divisao = (req, res) => {
    const { num1, num2 } = req.query
    let numero1 = parseInt(num1);
    let numero2 = parseInt(num2);

    let resultado = numero1 / numero2;

    res.send(`${resultado}`);
};

module.exports = { 
    somatorio,
    subtracao,
    multicacao,
    divisao
 };
