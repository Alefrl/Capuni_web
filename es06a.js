function calcola() {
  const n1 = Number(process.argv[2]);
  const op = process.argv[3];
  const n2 = Number(process.argv[4]);
 
  if (isNaN(n1) || isNaN(n2)) {
    console.log("Errore: input non numerico.");
    return;
  }
 
  let risultato;
  switch (op) {
    case "+":  risultato = n1 + n2; break;
    case "-":  risultato = n1 - n2; break;
    case "*":  risultato = n1 * n2; break;
    case "/":
      if (n2 === 0) { console.log("Errore: divisione per zero."); return; }
      risultato = n1 / n2;
      break;
    case "**": risultato = n1 ** n2; break;
    default:
      console.log("Errore: operazione non valida.");
      return;
  }
 
  console.log(`Risultato: ${n1} ${op} ${n2} = ${risultato}`);
}
 
calcola();
 
