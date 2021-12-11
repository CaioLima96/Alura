const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediaDosAlunos = [10,7,9,6]

let listaNotasAlunos = [alunos, mediaDosAlunos]

const exibeNomeNota = (nomeAluno) => {
    if (listaNotasAlunos[0].includes(nomeAluno)){
        let indice = listaNotasAlunos[0].indexOf(nomeAluno)
        return listaNotasAlunos[0][indice] + ', sua media é: ' + listaNotasAlunos[1][indice]
    } else {
        return 'Aluno não cadastrado'
    }
}

console.log(exibeNomeNota('Caio'))