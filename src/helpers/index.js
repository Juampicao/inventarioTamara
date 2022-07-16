export const generarId = () => {
  const random = Math.random().toString(36);
  const fecha = Date.now().toString(2);
  return random + fecha;
};

// Formatear Fecha Hoy
export const fechaHoy = () => {
  let date = new Date();
  let output =
    String(date.getDate()).padStart(2, "0") +
    "/" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "/" +
    date.getFullYear();
  console.log(output);
  return output;
};

// Formatear Fecha
export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// Formatear numero a moneda.
export const FormatearNumero = function (number) {
  // return "$" + +new Intl.NumberFormat().format(number) + ",00";
  return "$" + number + ",00";
};
// console.log(FormatearNumero(1000));

// export default formatearFecha(DiaActual);
export let DiaActual = new Date();
console.log(DiaActual.toLocaleDateString());

// Ordenar arrays
var numbers = [4, 2, 5, 1, 7];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]

// Ordenar array con 2 propiedades.
// var items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];
// console.log(
//   items.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   })
// );

// Ordenar por VALOR.

// export function ordenarCualquierCosa(arr) {
//   arr.sort(function (a, b) {
//  return a - b
//   });
// }

// gastos.sort(function (a, b) {
//   if (a.valor > b.valor) {
//     return 1;
//   }
//   if (a.valor < b.valor) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });

// forma corta de ordenar

// // Ordenar por VALOR
// gastos.sort(function (a, b) {
//   return a.valor - b.valor;
// });

// // Ordenar por Nombre
// gastos.sort(function (a, b) {
//   return a.nombre - b.nombre;
// });

// // Ordenar por Categoria
// gastos.sort(function (a, b) {
//   return a.categoria - b.categoria;
// });
