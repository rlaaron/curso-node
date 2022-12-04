require('dotenv').config();

const { leerinput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busquedas  = require("./models/busquedas")


const main = async() => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const lugar = await leerinput('Ciudad: ');
                await busquedas.ciudad(lugar);
                
                console.log('\nInformacion de la ciudad\n '.green);
                console.log('Ciudad: ', );
                console.log('Lat: ', );
                console.log('Lng: ', );
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