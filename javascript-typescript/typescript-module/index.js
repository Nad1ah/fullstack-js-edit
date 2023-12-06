"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function soma(x, y) {
    return x + y;
}
var result = soma(3, 2);
function receber(x) {
    if (x > 0)
        return "Positivo";
    else if (x < 0)
        return "Negativo";
    else
        return "Zero";
}
console.log(receber(5));
console.log(receber(-3));
console.log(receber(0));
var Carro = {
    marca: "ford",
    modelo: "E34",
    ano: 2010,
};
console.log(Carro);
function getUsers() {
    return fetch("https://random-data-api.com/api/v2/users?size=2")
        .then(function (res) { return res.json(); })
        .then(function (data) { return data; })
        .catch(function (error) { return console.error("Error fetching data:", error); });
}
getUsers();
var isDone = true;
isDone = "olá";
