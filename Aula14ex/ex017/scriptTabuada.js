function geraNum(){
    var num1 = Number(document.getElementById("seletor").value); //valor do input convertido para Number
    var select = document.getElementById("res");
    var tabuada = '';

    //var a = Number(num1.value);
    

    if(num1 == ' '){
        alert("Por favor, escolha um valor maior que zero");
    }else {
        for(var i = 0; i <= 10; i++){
            var resultado = i * num1 
            tabuada += `</br>${num1} x  ${i} = ${resultado} `
            select.innerHTML = tabuada
         }
    }
}

function limpar(){
    var res = document.getElementById("res");
    res.innerHTML = ''
}