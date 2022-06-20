function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} de idade.`;
}

const pessoa1 = {
   nome: "Maria",
   idade: 30 
};

const pessoa2 = {
    nome: "José",
    idade: 50 
 };

 const animal = {
    nome: "Bud",
    idade: 4,
    raça: "vira-lata" 
 };

 console.log(calculaIdade.call(pessoa2, 30))