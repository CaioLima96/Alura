import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricado", 12345678)
// cliente1.nome = "Ricardo"
// cliente1.cpf = 12345678

const cliente2 = new Cliente("Alicia", 168456789)
// cliente2.nome = "Alicia"
// cliente2.cpf = 168456789
const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
//contaCorrenteRicardo.#saldo = 0
// contaCorrenteRicardo.agencia = 1001
// contaCorrenteRicardo.cliente = cliente1

contaCorrenteRicardo.depositar(500)
//contaCorrenteRicardo.depositar(-100)
// const valorSacado = contaCorrenteRicardo.sacar(50)
//contaCorrenteRicardo.verSaldo()

const conta2 = new ContaCorrente(102,cliente2)
// conta2.cliente = cliente2
// conta2.agencia = 102


contaCorrenteRicardo.transferir(200, conta2)
const valorSacado2 = conta2.sacar(50)
//const valorDepositado = conta2.depositar(100)
console.log(valorSacado2)
//console.log(conta2)
console.log(ContaCorrente.numeroContas)

