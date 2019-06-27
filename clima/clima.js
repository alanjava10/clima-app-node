const axios = require('axios');

const getClima = async(lat, lng) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7d6bf4a5b6a6872e623a07f762a2bbca`)
    return respuesta.data.main.temp;

}


module.exports = {
    getClima
}