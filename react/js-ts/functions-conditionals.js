// function getSign(x) {
//   if (x > 0) {
//     return "Positivo";
//   } else if (x < 0) {
//     return "Negativo";
//   } else {
//     return "Zero";
//   }
// }
function getSign(x) {
  if (x > 0) {
    return "Positivo";
  }
  if (x < 0) {
    return "Negativo";
  }
  return "Zero";
}

console.log(getSign(2));
console.log(getSign(-1));
console.log(getSign(0));

// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
const b = 2;
function sum(a) {
  const result = a + b;
  console.log(result);
  console.log(a);
}
sum(1);

const getOnOff = (isOn) =>
  isOn ? console.log("Ligado") : console.log("Desligado");

getOnOff(false);

// const getSignTernary = (x) =>
//   x > 0 ? "Positivo" : x < 0 ? "Negativo" : "Zero";
// Evitar usar ternário aninhado
