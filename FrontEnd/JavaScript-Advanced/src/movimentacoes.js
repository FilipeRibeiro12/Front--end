class Movimentacao {
    constructor(banco = 'padrão', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor( dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(...movimentacoes){
        movimentacoes.forEach( lancamento => this.movimentacoes.push( lancamento))
    }

    resumo(){
        let valorAtualizado = 0
        this.movimentacoes.forEach(lancamento =>{
            valorAtualizado += lancamento.saldo
        })
        return valorAtualizado
    }
}

const m01 = new Movimentacao('NuBank', 'Salario', 20000)
const m02 = new Movimentacao('NuBank', 'Comissao', 2000)
const m03 = new Movimentacao('NuBank', 'imposto', -5000)



const registro01 = new Registro(12,12,98)
registro01.novaMovimentacao(m01,m02, m03)

console.log('O saldo da operação foi ' + registro01.resumo())
