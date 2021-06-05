const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Car = new Schema({
    placa: {
        type: String
    },
    chassi: {
        type: String
    },
    modelo: {
        type: String
    },
    marca: {
        type: String
    },
    ano: {
        type: String
    },
    renavam: {
        type: String
    }
}, {
    collection: 'cars'
})

module.exports = mongoose.model('Car', Car)