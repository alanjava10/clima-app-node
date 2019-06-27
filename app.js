const axios = require('axios');

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log())

//console.log(argv.direccion)

// clima.getClima(40.0000, -74.0000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(temp)
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se pudo determina el clima de ese lugar ${direccion}`;
    }





}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);