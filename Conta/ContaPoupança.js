import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
    static numeroDeContas = 0
    constructor(cliente, agencia, saldoInicial) {
        super(cliente, agencia, saldoInicial)
        ContaPoupanca.numeroDeContas += 1
    }
    sacar(valor) {
        const taxa = 1.02
        return super._sacar(valor, taxa)
    }
}
