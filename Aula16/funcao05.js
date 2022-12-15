
//Recursividade 
function fatorial(n){ //cria função fatorial
    if(n == 1){
        return 1
    } else{
        return n = n * fatorial(n-1); //chama fatorial dentro dela mesma
    }
}

console.log(fatorial(5))