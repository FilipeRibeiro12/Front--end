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
        let tipo = ''
        this.movimentacoes.forEach(lancamento =>{
            lancamento.banco = lancamento.banco.replace(/x$/i )
            if(!lancamento.nome.match(/y/i)){
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Banco X', 'Salario', 20000)
const m02 = new Movimentacao('Banco Y', 'Comissao', 2000)
const m03 = new Movimentacao('Banco Z', 'imposto', -5000)
const m04 = new Movimentacao('Banco X', 'constas', -1000)



const registro01 = new Registro(12,12,98)
registro01.novaMovimentacao(m01,m02, m03, m04)

console.log('O saldo dos registros foi de ' + registro01.resumo())

const movimentacoesGerais = [m01,m02, m03, m04]

movimentacoesGerais.map(elemento => 
    console.log(elemento.banco.length)
)