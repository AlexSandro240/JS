function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data= new Date();
    var hr = data.getHours();
    var min = data.getMinutes();


    msg.innerHTML = `Agora são ${hr} horas e ${min} minutos`;
    msg.innerHTML += '<br>' + `Now it's ${hr} hours and ${min} minutes`

    if(hr >= 0 && hr < 12){
        img.src="manha.jpg"
        document.body.style.background = "#bfe3c3"; //altera a cor de fundo do html

    } else if(hr >= 12 && hr < 18){
        img.src="tarde.jpg"
        document.body.style.background = "rgb(172, 122, 31)"; //altera a cor de fundo do html
    }else{
        img.src="noite.jpg"
        document.body.style.background = '#1a1c27'; //altera a cor de fundo do html

    }
}



