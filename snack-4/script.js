const lettere = ['a','b','c','d'];

const numeri = ['1','2','3','4'];

const fusione = [];

lettere.forEach((item, index) => {
    fusione.push(item)
    fusione.push(numeri[index])
})

console.log(fusione)