class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' fala')
    }

    comer(){
        console.log(this.especie + ' come')
    }

    dormir(){
        console.log(this.especie + ' dorme')
    }
}

class cachorro extends Animal {
    falar(){
        console.log(this.espcie + ' au au au')
    }
}

const cachorro = new cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()
