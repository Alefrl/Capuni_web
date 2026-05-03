const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// arrow function
const inverti_cifre = (n) => parseInt(String(n).split('').reverse().join(''), 10);

// callback anonima
rl.question('Inserisci un numero intero: ', (input) => {
  const n = parseInt(input, 10);

  if (isNaN(n)) {
    console.log('Errore: inserisci un numero intero valido.');
  } else {
    console.log(`Risultato: ${inverti_cifre(n)}`);
  }

  rl.close();
});
