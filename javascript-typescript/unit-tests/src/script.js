//export function sum(a, b) {
// return a + b;
//}

//export function sub(a, b) {
// return a - b;
//}

//export function operation(a, b, op) {
// switch (op) {
//   case "+":
//    return sum(a, b);
//  case "-":
//    return sub(a, b);
//  default:
//    throw new Error("Operation not supported");
//}
//}

//export async function fetchData() {
// const response = await fetch("https://random-data-api.com/api/v2/users");
// const data = await response.json();

// return { city: data.address.city };
//}

export function sum(a, b, signal) {
  if (signal === "+") {
    return a + b;
  }
  return a - b;
}
// Deve retornar mais de um item
export async function fetchData() {
  let response = await fetch("https://random-data-api.com/api/v2/users?size=2");
  let data = await response.json();
  return data;
}
export function throwError(arg) {
  if (arg === null) {
    throw new Error("Invalid argument");
  }
  return arg;
}
