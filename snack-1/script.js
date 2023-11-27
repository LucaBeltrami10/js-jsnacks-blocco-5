const cars = [
    {
        brand : 'Toyota',
        model : 'Corolla',
        fuel : 'Elettrico'
    },
    {
        brand : 'Toyota',
        model : 'Corolla Cross',
        fuel : 'Benzina'
    },
    {
        brand : 'Toyota',
        model : 'Yaris',
        fuel : 'GPL'
    },
    {
        brand : 'Toyota',
        model : 'Prius',
        fuel : 'Diesel'
    },
    {
        brand : 'Toyota',
        model : 'Yaris Cross',
        fuel : 'GPL'
    },
    {
        brand : 'Audi',
        model : 'A1',
        fuel : 'Benzina'
    },
    {
        brand : 'Audi',
        model : 'A3',
        fuel : 'Diesel'
    },
    {
        brand : 'Audi',
        model : 'RS3',
        fuel : 'Benzina'
    },
    {
        brand : 'Fiat',
        model : '500',
        fuel : 'Elettrico'
    },
    {
        brand : 'Fiat',
        model : 'Doblò',
        fuel : 'Benzina'
    },
]

const benzinaCars = cars.filter(() => cars.fuel == 'Benzina')

console.log(benzinaCars)