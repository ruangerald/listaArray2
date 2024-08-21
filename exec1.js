
let resposta = document.getElementById('resposta')

function inserir(){
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let num3 = Number(document.getElementById("num3").value)
    let num4 = Number(document.getElementById("num4").value)
    let num5 = Number(document.getElementById("num5").value)
    
    numArray = [num1,num2,num3,num4,num5]
    return numArray
    
}

function calcular(){
    let soma = 0
    for(let i = 0; i < numArray.length; i++){
        soma += numArray[i]
    }
    let media = soma / numArray.length
    console.log(media)
    
    resposta.innerHTML = `A média é igual a ${media}`
    
    return media
}