const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// con metodo:
// const reversedTeachers = teachers.reverse();

//con ciclo for:

let reversedTeachers = new Array();

for (let i = 0; i < teachers.length; i++) {
  const indice = teachers.length - i - 1;
  reversedTeachers[i] = teachers[indice];
}

console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = new Array();

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    const longName = teachers[i];
    longNames.push(longName);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
const indexRemove = teachers.indexOf('Ed');
teachers.splice(indexRemove, 1);
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

//con metodo:
//const isFabioPresent = teachers.includes('Fabio');

//con ciclo for:
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(',');
console.log(teachersString);