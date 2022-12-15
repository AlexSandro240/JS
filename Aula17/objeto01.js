let amigo = {
    nome: 'sandro',
    idade: 17,
    peso: 85.8,
    engordar(p=0){
        console.log('engordou');
        this.peso +=p
    },
    emagrecer(e=0){
        console.log('emagreceu')
        this.peso -=e
    }
}
amigo.engordar(5) //o 5 é o parametro p da função engordar
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
amigo.emagrecer(2)
console.log(`${amigo.nome} emagreceu 2kg. Agora ele pesa ${amigo.peso}kg`)
