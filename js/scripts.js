const btnPlus = document.querySelector(".js-plus");
const colTransport = document.querySelector(".conteneur-transport");
btnPlus.addEventListener("click", ouvreFerme);

function ouvreFerme()  {
  colTransport.classList.toggle("invisible");
}