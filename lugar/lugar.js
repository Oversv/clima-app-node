const axios = require('axios');

const getLugarLatLon = async(dir) => {

    const encodeURL = encodeURI(dir) //Escapa la dirección para no tener problemas con espacios...

    //Librería para hacer peticiones que trabaja con promesas. 
    //Hacemos una petición a la API de https://rapidapi.com/dev132/api/city-geo-location-lookup, API DEL TIEMPO
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'e848bf7015mshc23aab7937cbcc1p1b72e2jsnf65e9585cbef'
        }
    });

    //Lanzamos la petición
    const resp = await instance.get()

    //Comprobamos si no hay datos
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}.`)
    }

    //Guardamos los datos en variables
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    //Devolvemos un objeto con la dirección, latitud y longitud
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLon
}