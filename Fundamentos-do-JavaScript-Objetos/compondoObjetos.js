const cliente = {
    nome: "Caio",
    idade: 25,
    cpf: 123456789,
    email: "exemplo@gmail.com",
    fones: ['40028922', '123456789']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNasc: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)