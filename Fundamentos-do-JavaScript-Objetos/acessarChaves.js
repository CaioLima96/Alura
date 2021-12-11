const cliente = {
    nome: "Caio",
    idade: 25,
    cpf: 123456789,
    email: "exemplo@gmail.com"
}

const chaves = ['nome', 'idade', 'cpf', 'email']

//console.log(cliente[chaves[1]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["aaa"])