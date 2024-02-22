const alunos = [
    {nome: 'Jorge', nota: 7},
    {nome: 'Julia', nota: 5},
    {nome: 'Lara', nota: 8},
    {nome: 'Gustavo', nota: 3},
    {nome: 'Daniel', nota: 6},
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);