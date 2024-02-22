"use strict";

var alunos = [{
  nome: 'Jorge',
  nota: 7
}, {
  nome: 'Julia',
  nota: 5
}, {
  nome: 'Lara',
  nota: 8
}, {
  nome: 'Gustavo',
  nota: 3
}, {
  nome: 'Daniel',
  nota: 6
}];
function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);