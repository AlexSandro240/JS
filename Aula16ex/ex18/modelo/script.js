let num = document.getElementById("fnum"); //Não esqueça de converter direto pra verificar depois
let lista = document.querySelector("select#flista");
let res = document.getElementById("res");
let arr = [];



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //passa dois parametros para a função inLista
    if (l.indexOf(Number(n)) != -1) { // -1 indica que o valor não foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, arr)) { //verificar se os valores das funçoes é numerico
        arr.push(Number(num.value))
        let item = document.createElement('option') //cria elementos de forma dinâmica
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(arr.length == 0){//verificar se o tamanho do array é vazio
        alert("Adicione valores antes de finalizar");
    }else{
        let total = arr.length //acessa o tamanho do array
        let maior = [0]
        let menor = [0]
        let soma = 0 
        let media = 0

        for(let pos in arr){
            soma+= arr[pos] //soma os valores do array começando na primeira posição
            if(arr[pos] > maior)
                maior = arr[pos] //deixa de ser o valor anterior [0] e passa para um novo valor ex: [1]
            if(arr[pos] < menor)
             menor = arr[pos]
        }

        media = soma / total
        res.innerHTML = '' //zera p valor de res
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos o valor ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}

function apagar(){
    let l = document.querySelector("select#flista");
    l.innerHTML = ''
}