/* Creare un array di oggetti di squadre di volley.
Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
Generare numeri random al posto delle nelle proprietà:
punti fatti e falli subiti */
const squadre = [
    {
        nome : 'bolognese',
        punteggio : 18,
        falli : 13
    },
    {
        nome : 'milan',
    },
    {
        nome : 'parmese',
    },
    {
        nome : 'babilonia',
    }
]


squadre.forEach((squadra) => {
    squadra.punteggio = parseInt(Math.random() * 100) + 1
    squadra.falli = parseInt(Math.random() * 10) + 1
    console.log(squadra)
})



