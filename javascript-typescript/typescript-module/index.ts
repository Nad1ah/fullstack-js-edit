import { BlobOptions } from "buffer";
import { promises } from "dns";
import { type } from "os";

function soma(x: number, y: number): number {
  return x + y;
}
const result: number = soma(3, 2);

function receber(x: number): string {
  if (x > 0) return "Positivo";
  else if (x < 0) return "Negativo";
  else return "Zero";
}

console.log(receber(5));
console.log(receber(-3));
console.log(receber(0));

const Carro: { marca: string; modelo: string; ano: number } = {
  marca: "ford",
  modelo: "E34",
  ano: 2010,
};
console.log(Carro);
type usersType = { id: number; uid: string; password: string };
function getUsers(): Promise<usersType> {
  return fetch("https://random-data-api.com/api/v2/users?size=2")
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error("Error fetching data:", error));
}

getUsers();

const Person: { firstName: string; lastName: string } = {
  firstName: "Santos",
  lastName: "Tuts",
};
