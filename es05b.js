// Creazione oggetto libro
const book = {
  titolo: "Succede sempre",
  autore: "Vittorio",
  annoPubblicazione: 1980,
  genere: "Romanzo ",
  numeroPagine: 167
};

// Stampa le proprietà dell'oggetto sulla console
for (let key in book) {
  // stampiamo nome della chiave e valore associato
  console.log(`${key} -> ${book[key]}`);
}
