const you2 = document.getElementById("you1");

function you() {
  window.location.assign("https://www.youtube.com/?hl=pt-PT&gl=PT");
}
window.onload = function you() {
  alert("A nova página foi carregada!");
};
const ola2 = document.getElementById("ola1");
function myFucion() {
  alert("abra o youtube.");
}

document.getElementById("historicoBtn").addEventListener("click", function () {
  var numeroDePaginas = window.history.length;

  alert("Número de páginas no histórico: " + numeroDePaginas);
});

function abrirPagina() {
  window.open("exx.html");
}
