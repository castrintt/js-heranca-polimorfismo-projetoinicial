//classe abstrata
export class Conta {

    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            return new Error('Conta não deve ser usado como instância')
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor) {

        if (novoValor instanceof Cliente) {

            this._cliente = novoValor;
        }
    }


    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo;
    }

    //metodo abstrato
    sacar(valor) {
        return new Error('Não foi definido')
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado;
        } else {
            return 0
        }


    }
    depositar(valor) {
        if (valor <= 0) {

            return;
        }

        this._saldo += valor;
    }

    tranferir(valor, conta) {


        const valorSacado = this.sacar(valor);

        conta.depositar(valorSacado);

    }


}