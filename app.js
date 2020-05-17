const lugar = require("./lugar/lugar");

const clima = require("./clima/clima");

const argv = require("./config/yargs").argv;



//clima.getClima("40", "-74").then(console.log).catch(console.log);


const getInfo = async(direccion) => {


    try {

        let ubicacion = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(ubicacion.lat, ubicacion.lng);
        return `La temperatura en ${ubicacion.direccion} es de ${temperatura}`
    } catch (e) {
        return `No se pudo determinar la temperatura de ${direccion}`
    }









}


getInfo(argv.direccion).then(console.log).catch(console.log);