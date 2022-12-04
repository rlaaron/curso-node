require('dotenv').config();
require('colors');

const { leerinput, inquirerMenu, pausa, listadoCiudades } = require("./helpers/inquirer");
const Busquedas  = require("./models/busquedas")


const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                //show message
                const lugar = await leerinput('Ciudad: ');

                //search locations
                const ciudades = await busquedas.ciudad(lugar);

                //select place
                const idCiudad = await listadoCiudades(ciudades);
                const selectPlace = ciudades.find( l => l.id === idCiudad );
                console.log(selectPlace);

                //climate



                //show result
                console.log('\nInformacion de la ciudad\n '.green);
                console.log('Ciudad: ', selectPlace.nombre);
                console.log('Lat: ', selectPlace.lat);
                console.log('Lng: ', selectPlace.lng);
                console.log('Temperatura: ', );
                console.log('Minima: ', );
                console.log('Maxima: ', );
                break;
            case 2: 
                console.log("opt 2");
                break; 
        }
        if( opt !== 0 ) await pausa();
    }while ( opt !== 0 );
}

main();