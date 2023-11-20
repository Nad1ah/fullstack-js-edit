function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Thank You";
}

function li1() {
  var novoItem = document.createElement("li");
  var textoItem = document.createTextNode("Opa");
  novoItem.appendChild(textoItem);
  document.getElementById("minhaLista").appendChild(novoItem);
}

function removeItem() {
  var lista = document.getElementById("minhaLista");
  lista.removeChild(lista.lastChild);
}

function atualizarValor(input) {
  var valorCampo = input.value;
  document.getElementById("valorAtual").innerText = valorCampo;
}
var cores = ["#3498db", "#2ecc71", "#e74c3c", "#f39c12"];
var indiceCorAtual = 0;

function mudarBackground() {
  var corAtual = cores[indiceCorAtual];
  document.body.style.backgroundColor = corAtual;
  indiceCorAtual = (indiceCorAtual + 1) % cores.length;
}
