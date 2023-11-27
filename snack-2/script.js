const persone = [
    {
        nome : 'Mario',
        cognome : 'Biondi',
        età : '12'
    },
    {
        nome : 'Maria',
        cognome : 'Mori',
        età : '22'
    },
    {
        nome : 'Beppe',
        cognome : 'Rossi',
        età : '66'
    },
    {
        nome : 'Giuseppa',
        cognome : 'Verdi',
        età : '17'
    },
    {
        nome : 'Franchino',
        cognome : 'Bianchi',
        età : '19'
    },
    {
        nome : 'Carla',
        cognome : 'De Carlis',
        età : '18'
    }
]

const chiGuida = persone.map((individuo) => {
    if( individuo.età >= 18){
        return `${individuo.nome} ha ${individuo.età} anni. ${individuo.nome} ${individuo.cognome} può guidare`
    }
    return `${individuo.nome} ha ${individuo.età} anni. ${individuo.nome} ${individuo.cognome} NON può guidare`
})

console.log(chiGuida)