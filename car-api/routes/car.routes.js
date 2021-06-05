const express = require('express');
const app = express();

const carRoute = express.Router();
let Car = require('../model/Car');

// Add Car
carRoute.route('/add-car').post((req, res, next) => {
    Car.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get all Car
carRoute.route('/').get((req, res) => {
    Car.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get Car
carRoute.route('/read-car/:id').get((req, res) => {
    Car.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Car
carRoute.route('/update-car/:id').put((req, res, next) => {
    Car.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Car updated successfully!')
        }
    })
})

// Delete Car
carRoute.route('/delete-car/:id').delete((req, res, next) => {
    Car.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = carRoute;