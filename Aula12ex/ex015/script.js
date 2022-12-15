function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.querySelector("div#res");

    if (fano.value.length == null || Number(fano.value) > ano || fano.value == '0') {
        alert("[ERRO]Verfique os dados e tente novamente")
    } else {
        
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto') //define o atributo id para foto. A mesma coisa que <img id=foto>
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menino.jpg')
            } else if(idade < 23){
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg' )
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                // Idoso 
                img.setAttribute('src', 'idoso-fofo.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menina.jpg')
            } else if(idade < 23){
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg' )
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idosa-fofa.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)
    }
}