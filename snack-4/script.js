/* Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. */
const lettere = ['a','b','c','d'];

const numeri = ['1','2','3','4'];

const fusione = [];

lettere.forEach((item, index) => {
    fusione.push(item)
    fusione.push(numeri[index])
});

console.log(fusione);