alert("Bienvenidos a pampaTicket!");

class Ticket {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const ticket1 = new Ticket(1, "Babasonicos", 2900, 300);
const ticket2 = new Ticket(2, "El mato", 5000, 100);
const ticket3 = new Ticket(3, "Tren Loco", 1500, 400);
const ticket4 = new Ticket(4, "Celia Cruz", 1000, 200);

const entradas = [];
entradas.push(ticket1,ticket2,ticket3,ticket4);

let opcionEntrada = Number(
    prompt(
      `1) Babasonicos - $2900
      2) El Mato - $5000
      3) Tren Loco - $1500
      4) Celia Cruz - $1000

      0) Para finalizar`
    )
);
const ticketComprado = [];

while(opcionEntrada != 0){
  if (opcionEntrada) {
      comprar(opcionEntrada);
  }

  opcionEntrada = Number(prompt(
    `1) Babasonicos - $2900
    2) El Mato - $5000
    3) Tren Loco - $1500
    4) Celia Cruz - $1000

    0) Para finalizar`
  ));

  while(opcionEntrada === 0){
    finalizarCompra()
    alert('Gracias por su compra');
    break;
  }

}

function comprar(opcionEntrada) {
  const selectedTicket = entradas.find(
    (entrada) => entrada.id === opcionEntrada
  );
  alert(`Usted ha seleccionado entradas de ${selectedTicket.nombre}`); //Luego uso selectedTicket para mostrar los datos

  let cantEntradas = Number(prompt(`cantidad de entradas para ${selectedTicket.nombre}`));
  if(cantEntradas > selectedTicket.stock){
    alert(`No hay stock suficientes, solo quedan ${selectedTicket.stock} entradas`);
  }else {
    let id = opcionEntrada - 1;
    entradas[id].stock = entradas[id].stock - cantEntradas;
    ticketComprado.push(new Ticket(selectedTicket.id, selectedTicket.nombre, selectedTicket.precio * cantEntradas, cantEntradas));
  }
}

function finalizarCompra(){
  let cont = 0;
  for(let i = 0; i < ticketComprado.length; i++){
      alert(`Compro entradas de ${ticketComprado[i].nombre}
              Cantidad: ${ticketComprado[i].stock}
              Precio Total: $${ticketComprado[i].precio}`);
      cont += ticketComprado[i].precio;
  }
  alert(`Total a pagar por todas las entradas es de $${cont}`);
  console.log(ticketComprado);
}

/* Ordenar el array de menor precio a mayor */
const ticketOrdenados =  entradas.sort((a, b) => {
  if (a.precio > b.precio) {
      return 1;
  }
  if (a.precio < b.precio) {
      return -1;
  }
  return 0;
})

console.log(ticketOrdenados);