var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 2;

function Chutar() {    
    
    var chute = parseInt(document.getElementById('valor').value);
    console.log(chute);
    
    var resultado = document.getElementById("resultado");
    
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Acertou!";

    } else if (chute > 10 || chute < 0) {
        resultado.innerHTML = "Entre com um número entre 0 e 10";

    } else if (chute > numeroSecreto && tentativa > 0) { 
        tentativa --;
        resultado.innerHTML = `Erroooooou! Chute mais baixo! <br> Ainda restam tentativas`; 

    } else if (chute < numeroSecreto && tentativa > 0) {
        tentativa--;
        resultado.innerHTML = `Erroooooou! Chute mais alto! <br> Ainda restam tentativas`; 

    } else if (tentativa == 0) {
        resultado.innerHTML = `Game Over!!! <br> O número secreto era ${numeroSecreto}. <br> Tente novamente!`;   
    }
}