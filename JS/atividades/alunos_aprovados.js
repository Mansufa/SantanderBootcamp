const aluno = [
    {
        nome: 'João',
        nota: 10,
        turma: '1B'
    },
    {
        nome: 'Pedro',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Maria',
        nota: 3,
        turma: '2C'
    },
    {
        nome: 'José',
        nota: 1,
        turma: '1B'
    },
];

function alunosAprovados(arr, media) {
    let aprovados= [];

    for( let i= 0; i < arr.lenght; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6))