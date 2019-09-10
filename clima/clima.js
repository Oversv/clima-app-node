const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b93791ea4357e8e59ad75757414f4802&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}