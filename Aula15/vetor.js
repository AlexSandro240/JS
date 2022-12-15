let num = [1, 3, 5, 4, 9]

/*
for(var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem valor ${num[i]}`) //acessa os indices do array num 
};
*/

for (var i in num){ //Essa sintaxe de estrutra de repetição só funciona com arrays e objetos js
    console.log(`A posição ${i} tem valor ${num[i]}`);
}