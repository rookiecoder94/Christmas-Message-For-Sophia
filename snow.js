function typeWriter(elemento){
    var text = elemento.textContent.split("");
    elemento.textContent = "";
    text.forEach((el, i)=>{
    setTimeout(() =>elemento.textContent +=el, 76 * i);
        });
    }
// var titulo = document.querySelector("h1");
var paragraph = document.querySelector("p");
// typeWriter(titulo);
typeWriter(paragraph);
  // JavaScript Document