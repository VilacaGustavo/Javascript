function clique(){
    document.getElementById("agr").innerHTML = "Obrigado ";
}

function redirectTo(){
    //window.open("https://google.com/");
    window.location.href ="https://google.com";
}

function teste(elemento){
    elemento.innerHTML = "Voce esta com o mouse Sobre o texto ";
    //document.getElementById(elemento).innerHTML = "Voce esta com o mouse Sobre o texto ";
}

function volta(elemento){
    elemento.innerHTML = "Passe o Mouse aqui ";
    //document.getElementById(elemento).innerHTML = "Passe o Mouse aqui ";
}

function fundo(elemento){
    if(elemento.value == "preto"){
        elemento.style.backgroundColor = "black";
    }else{
        elemento.style.backgroundColor = "white";
    }
    
}



/*
var nome = "Gustavo Vilaca"
var frase = "Casemiro maior streamer da twitch segundo: ";
console.log(frase.replace("Casemiro","Gaules")+nome);
*/
/*
var lista = ["Elemento1","Elemento2","Elemento3"];
lista.push("Elemento4");
console.log(lista);
console.log(lista.length);
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" "));
*/
/*
var fruta = [{nome:"Uva",cor:"Roxa"},{nome:"Maça-Verde",cor:"Verde"}];
console.log(fruta);

var idade = prompt("Qual sua Idade?");
if(idade >= 18 ){
    alert("Bem Vindo");
}else{
    alert("Menor de Idade");
}


var count = 0;
do{
    count++;
    console.log(count);
}while(count <=5);


var d = new Date();
alert(d);
*/