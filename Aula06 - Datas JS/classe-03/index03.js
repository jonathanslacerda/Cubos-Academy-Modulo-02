const horarioAbertura = new Date(2024, 4, 28, 8);
const horarioFechamento = new Date(2024, 4, 28, 18);

const horarioTeste = new Date(2024, 4, 28, 18);

if (horarioTeste > horarioFechamento || horarioTeste < horarioAbertura) {
    return console.log("False") 
} else {
    return console.log("True")
};

