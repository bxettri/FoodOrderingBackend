const express = require('express');
const Food = require('../models/food');

const router = express.Router();

router.route('/')
    //Getting  All food item from database
    .get((req, res, next) => {
        Food.find()
        .populate({
            path: 'resturantName'
        })
            .then((food) => {
                status = 200;
                res.json(food);
            })
            .catch((err) => next(err));
    })
    //inserting  new food item to the database


    .post((req, res, next) => {
        let food = new Food(req.body);
        require("../models/resturant").findOne({ resturantName: req.resturant_name })
            .exec().then((resturant) => {
                food.save({
                    foodname: req.body.foodname,
                    resturantName: resturant.resturantName,
                    foodimage: req.body.foodimage,
                    price: req.body.price
                }).then((food) => {
                    res.status = 200;
                    res.json(food);
                })
            }).catch(next);
    })

   .put((req, res, next) => {
        res.statusCode = 201;
        res.json("You cannot update Food");

    })

    // Food.create(req.body)
    // .then((food)=>{
    //     res.status=200;
    //     res.json(food);
    // })
    // .catch((err) => next(err));


    //Deleting  All food item from database
    .delete((req, res, next) => {
        Food.deleteMany({})
            .then((food) => {
                res.json(food);

            })
    });

//Getting particular food iteam by id from database
router.route('/:id')
    .get((req, res, next) => {
        Food.findById(req.params.id)
            .then((food) => {
                res.json(food);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 201;
        res.json("You cannot add food on here");
    })
    //Updating the particular food item by id

    .put((req, res, next) => {
        Food.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
            .then((food) => {
                res.json(food);

            })
            .catch((err) => next(err));
    })

    // Deleting particular food by id

    .delete((req, res, next) => {
        Food.findByIdAndDelete(req.params.id)
            .then((food) => {
                res.json(food);
            })
            .catch((err) => next(err));
    })

    router.get('/foodbyrestaurant/:id',(req,res,next)=>{
 

        Food.find({resturantName:req.params.id})
        .populate({
            path:'resturantName'
        })
            .then((food)=>{
                res.json(food);
            }).catch(next);
    })

module.exports = router;


