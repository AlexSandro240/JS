function contar(){
    let init = document.getElementById('txtinit');
    let fim = document.getElementById('txtfim');
    let passo = document.getElementById('txtpasso'); 
    let res = document.getElementById('res');

    if(init.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[ERRO] Faltam dados!")
        res.innerHTML = "Impossível contar!"
    }else{
        res.innerHTML = "contando: <br>"
        let i = Number(init.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p == 0){
            alert("Passo invalido");
             p = 1
        }

        if(i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }

        }else{
            //contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }   
        }
        res.innerHTML += `\u{1F3C1}`     
    }
}