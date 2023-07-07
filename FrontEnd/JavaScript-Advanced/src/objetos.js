const user01 = new Object()
user01.id = 1
user01.nome = "João"
user01.idade =  25

const user02 =new Object()
user02.id = 2
user02.name = "Pedro"
user02.idade = 23

const user03 =new Object()
user03.id = 2
user03.name = "Maria"
user03.idade = 21

const car01 = new Object()
car01["marca"] = "Fiat"

const car02 = new Object()
car02["marca"] = "BMW"

console.log(Object.entries(user01))
console.log(Object.entries(user02))
console.log(Object.entries(user03))
console.log(Object.entries(car01))
console.log(Object.entries(car02))

Object.defineProperty(user01, 'cpf', {
    enumerable: false,
    writable: false,
    value: '133.200.436.-92'
})