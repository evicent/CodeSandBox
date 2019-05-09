import "./styles.css";
import * as my from "./myFunctions.js";
import protocolo from "../protocolo.json";
// import parser from "xml2json";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
const datosPro = processResponse(protocolo);
const resultado = datosPro.string.$t;

console.log("Prueba es6");
console.info(resultado);
console.log("result");
// console.log(checkResult(resultado))
// const valorPrimitivo = "valor inicial";
// valorPrimitivo = 'valor condicionado'
// const valorReferencia = { mensaje: "valor referenciado" };
// valorReferencia.mensaje = "valor referenciado cambiado";
// console.log(valorPrimitivo);
// console.log(valorReferencia);

if (checkResult(resultado)) {
  console.log(true);
  const sinais = takeSinais(resultado);
  console.info(sinais);
} else {
  console.log(false);
}

function isHeartBeat(data) {
  return (
    data
      .toString()
      .replace(";", "")
      .match(/^[0-9]+$/) != null
  );
}
function formatPlate(plate) {
  return plate.replace(/[^A-Za-z0-9]/g, "");
}

// return mulllisencos
function checkTime(hour) {
  const now = new Date();
  const millisTillHour =
    new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, 0, 0, 0) -
    now;
  const seconds = parseInt(millisTillHour / 1000);
  if (seconds < 0) return 1440 * 60 + seconds;
  else return seconds;
}
function processResponse(datos) {
  return datos; //datos.toString().replace('$t','response');
}
function checkResult(datos) {
  return datos.toString().indexOf("resultado='0'") > 0;
}
function takeSinais(datos) {
  const initPosition = datos.toString().indexOf("<sinal");
  return datos.substring(initPosition);
}
// function xmlToJson(xml){
//   return JSON.parse(parser.toJson)
// }
//Prueb CPF
/*
console.log(my.validarCPF('245.967.828-22'));
const obj = { device: "020265", positionId: 247880258 };
const peopleArray = Object.keys(obj);
console.log(peopleArray);
*/
//Prueba Protocolo Transpetro
