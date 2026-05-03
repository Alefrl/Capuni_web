function triangoloTartaglia(n) {
  // Costruisce il triangolo riga per riga
  const triangolo = [];
  for (let i = 0; i < n; i++) {
    const riga = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        riga.push(1);
      } else {
        riga.push(triangolo[i - 1][j - 1] + triangolo[i - 1][j]);
      }
    }
    triangolo.push(riga);
  }

  // Stampa con allineamento centrato (3 caratteri per numero)
  const larghezzaTotale = (2 * n - 1) * 3;
  for (let i = 0; i < n; i++) {
    const rigaStr = triangolo[i].map(num => String(num).padStart(3)).join('');
    const spazi = ' '.repeat((larghezzaTotale - rigaStr.length) / 2);
    console.log(spazi + rigaStr);
  }
}

const n = parseInt(process.argv[2], 10);
if (isNaN(n) || n <= 0) {
  console.log('Errore: inserisci un numero intero positivo.');
} else {
  triangoloTartaglia(n);
}
