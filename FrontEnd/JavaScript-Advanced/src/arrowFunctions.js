

function Pessoa() {

    //const pessoa = this
    this.idade = 0

    setInterval(()=>{
        console.log(this.idade++)
        }, 2000);
}

const p1 = new Pessoa()

/* Arrow Functions
 * (p1, p2, ..., pX) => {espressão}
 * (p1,p2) => espressão
 * p1 => {espressão}
 */