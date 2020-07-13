const chai = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos

const index = require('../index.js'); // Arquivo a ser testado



chai.use(http);
chai.use(subSet);

// O atributo do objeto será testado para verificar se ele existe
// O atributo recebe uma função, e ela deve retornar true para o teste passar
const alunoSchema = {
    nome: nome => nome,
    sala: sala => sala
};

describe('Teste das funcoes', () => {

    it('addAluno', () => {
        const aluno = index.addAluno('matheus', 'sala 1');

        // Verifica se as caracteristicas do objeto aluno é igual ao alunoSchema
        
        chai.expect(aluno).to.containSubset(alunoSchema);
    });

    it('remover aluno', () =>{ 
        index.addAluno('Bia', 'sala 3');
        index.addAluno('Ana', 'sala b')
        const alunos = index.getAlunos();
        index.removerAluno('Bia', 'sala 3') // Remover aluno do array
        chai.expect(alunos).to.containSubset([alunoSchema])
    });   

    it('getAlunos', () => {
        index.addAluno('osmar', 'sala 1');
        index.addAluno('mariana', 'sala 2');
        const alunos = index.getAlunos();
        
        chai.expect(alunos.length).to.be.equals(4);
        // Primeiro se verifica se está retornando um array
        // Verifica se as caracteristicas dos objetos no array é igual ao alunoSchema
        chai.expect(alunos).to.containSubset([alunoSchema]);
    });
    it('setAluno', () =>{
        index.addAluno ('Bia', 'sala 3');
        const alunos = index.getAlunos();
        index.setAlunos('Biaaa', 'sala 90'); // Alterou o valor
        chai.expect(alunos).to.containSubset([alunoSchema])
    });

    
    
});

//https://medium.com/@matheusalves_45120/testes-unit%C3%A1rios-em-node-js-usando-chai-e-mocha-c415c9f84764