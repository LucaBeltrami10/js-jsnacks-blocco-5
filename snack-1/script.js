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
    }
]

console.log(cars)

const benzinaCars = cars.filter((cars) => {
    if(cars.fuel == 'Benzina'){
        return true
    }
    return false
})
console.log(benzinaCars)

const dieselCars = cars.filter((cars) => {
    if(cars.fuel == 'Diesel'){
        return true
    }
    return false
})
console.log(dieselCars)


const gplElettricCars = cars.filter((cars) => {
    if(cars.fuel !== 'Diesel' && cars.fuel !== 'Benzina'){
        return true
    }
    return false
})
console.log(gplElettricCars)

