let { idAluno, alunos } = require("../banco-dados");

const listaAlunos = (req, res) => {
    res.status(200).json(alunos);
};

const identificadorAluno = (req, res) => {
    const { id } = req.params;

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });

    if (alunoEncontrado) {
        return res.status(200).json(alunoEncontrado)
    } else {
        return res.status(404).json({ mensagem: "Aluno não encontrado"})
    }

};

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome || nome === "" || nome === " ") {
        return res.status(400).json({ mensagem: "Nome é obrigatório!"})
    }

    if (!sobrenome || sobrenome === "" || sobrenome === " ") {
        return res.status(400).json({ mensagem: "Sobrenome é obrigatório!"})
    };

    if (!curso || curso === "" || curso === " ") {
        return res.status(400).json({ mensagem: "Curso é obrigatório!"})
    };

    if (!idade) {
        return res.status(400).json({ mensagem: "Idade é obrigatório!"})
    } else if (idade < 18) {
        return res.status(400).json({ mensagem: "Aluno menor de idade!"})
    }


    const aluno = {
        id: idAluno++,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(aluno);

    return res.status(201).json(alunos);
};

const deletarAluno = (req, res) => {
    const { id } = req.params;

    const alunoEncontrado = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });

    if (!alunoEncontrado) {
         return res.status(404).json({ mensagem: "Aluno não encontrado"})
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    });

    return res.status(201).json(alunos)


};



module.exports = {
    listaAlunos,
    identificadorAluno,
    cadastrarAluno,
    deletarAluno
}