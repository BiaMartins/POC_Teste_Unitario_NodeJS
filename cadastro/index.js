const app = require('express')();
const bodyParser = require('body-parser');
const { assert } = require('chai');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const alunos = [];
const professor = nome;

const addAluno = function(nome, sala) {
    alunos.push({
        nome: nome,
        sala: sala
    });

    return {
        nome: nome,
        sala: sala
    };
}

const removerAluno = function(nome, sala){
    alunos.pop();
    return alunos 
}

const getAlunos = function() {
    return alunos;
};

const setAlunos = function(nome, sala){
    this.nome = nome
    this.sala = sala
}

const addProfessor = function(nome){
    professor.push(nome);
    return professor;
}

const removeProfessor = function(nome){
    professor.pop();
}

app.post('/aluno', function(req, res){
    res.status(202)
    .json(removerAluno(req.body.nome, req.body.sala))
})

app.get('/aluno', function (req, res) {
    res.status(200)
        .json(getAlunos());
});
app.set('/aluno', function(req, res){
    res.status(203)
    .json(setAlunos());
})

app.post('/aluno', function (req, res) {
    res.status(201)
        .json(addAluno(req.body.nome, req.body.sala));
});

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000...");
});

module.exports = { app, addAluno, getAlunos, removerAluno, setAlunos, addProfessor, removeProfessor }