const cliente = {
    nome: "Caio",
    idade: 25,
    cpf: 123456789,
    email: "exemplo@gmail.com",
    fones: ['40028922', '123456789'],
    dependentes: [{
        nome: 'Sara',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNasc: "04/01/2014"
        }],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}


function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

//console.log(Object.values(cliente))
console.log(Object.values(cliente))

oferecerSeguro(cliente)