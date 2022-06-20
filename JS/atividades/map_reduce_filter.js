/* Map com this */
const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
      return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log( 'this -> maçã', mapComThis(nums, maca));

console.log( 'this -> laranja', mapComThis(nums, laranja));

/* Map sem this */
function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2 ;
    });  
}

const nums2 = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums2));

console.log(nums2);

/* Filtra Pares */
function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item){
    return item % 2 !== 0;
}

const meuArray= [1, 25, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));

/* Reduce */
function somaNumero(arr) {
    arr.reduce(function (prev, current) {
        return prev + current;
    })   
}

const arr = [1, 2];

console.log(somaNumero(arr));

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'sorvete',
        preco: 20
    },
    {
        name: 'filtro solar',
        preco: 12
    },
];

const saldoDisponivel = 100;

function calcSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        return prev - current;
    }, saldoDisponivel);
}

console.log(calcSaldo(saldoDisponivel, lista))