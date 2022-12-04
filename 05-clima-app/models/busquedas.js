const axios = require('axios');

class Busquedas {

    historial = ['puebla', 'cdmx'];

    constructor(){
        //TODO:
    }

    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_TOKEN,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad( lugar = '' ){
        try {

            // const instance = axios.create({
            //     baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
            //     params: this.paramsMapbox
            // });

            // const resp = await instance.get();
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/puebla.json?limit=5&language=es&access_token=pk.eyJ1IjoiYWFyb25ybDAzIiwiYSI6ImNrenJtdzViMjE0eHgydm5hbWhzM3Btbm8ifQ.RnPMhR0InHaqOxVeJTYxWw');
            console.log(resp.data);

            return [];
        } catch (error) {
            // return [];
            console.log("errro");
        }
    }
}
module.exports = Busquedas;