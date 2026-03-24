//somma
if (process.argv[3] === "somma") {
  console.log(Number(process.argv[2]) + Number(process.argv[4]));
}
//sottrazione
else if (process.argv[3] === "sottra") {
  console.log(Number(process.argv[2]) - Number(process.argv[4]));
}
//moltiplicazione
else if (process.argv[3] === "molti") {
  console.log(Number(process.argv[2]) * Number(process.argv[4]));
}
//divisione
else if (process.argv[3] === "dividi") {
  console.log(Number(process.argv[2]) / Number(process.argv[4]));
}
