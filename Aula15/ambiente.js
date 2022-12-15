let num = [1, 3, 5, 4, 9]

num.push(10)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[2])
var i = num.indexOf(11)

if(i == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 11 está na posição ${i}`);
}

