const express = require("express");
const alunos = require("./controladores/alunos");
const rotas = express();


rotas.get("/alunos", alunos.listaAlunos);
rotas.get("/alunos/:id", alunos.identificadorAluno);
rotas.post("/alunos",alunos.cadastrarAluno);
rotas.delete("/alunos/:id", alunos.deletarAluno);



module.exports = rotas;