import { Conta } from './Conta.js'
export class ContaSalario extends Conta {
    static numeroDeContas = 0
    constructor(cliente) {
        super(cliente, 0, 100)
        ContaSalario.numeroDeContas += 1
    }

    sacar(valor) {
        const taxa = 1.001
        return super._sacar(valor, taxa)
    }
}