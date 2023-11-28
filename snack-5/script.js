const squadre = [
    {
        nome : 'bolognese',
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


squadre.forEach((squadra, index) => {
    squadra.punteggio = parseInt(Math.random() * 100) + 1
    squadra.falli = parseInt(Math.random() * 10) + 1
    console.log(squadra)
})



