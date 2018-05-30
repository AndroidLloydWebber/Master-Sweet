const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mongo = require('mongodb');

const Boxer = require('../models/Boxer');

router.get('/', (req, res) => {
    Boxer.find()
        .then(boxers => res.send(boxers))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    Boxer.findById(req.params.id)
        .then(boxer => res.json(boxer))
        .catch(err => res.status(404).json({
            nouserfound: 'No boxer found with that ID'
        }));
});

router.get('/search/:name', (req, res) => {
    Boxer.findOne({'name': {'$regex': req.params.name}})
        .then(boxer => res.json(boxer))
        .catch(err => res.status(404).json({
            nouserfound: 'No boxer found with that ID'
        }));
});

router.post('/add', (req, res) => {
    //return res.json(req.body);
    var newBoxer = new Boxer({
        globalId: req.body.globalId,
        name: req.body.name,
        bouts: req.body.bouts,
        rounds: req.body.rounds,
        residence: req.body.residence,
        nationality: req.body.nationality
    });

    //var newBoxer = new Boxer(req.body);

    newBoxer.save()
        .then(boxer => {
            res.json(boxer);
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
})

router.put('/update/:id', (req, res) => {
    // return res.json(req.params.id);
    Boxer.findByIdAndUpdate(new mongo.ObjectId(req.params.id), {
        $set: {
            globalId: req.body.globalId,
            name: req.body.name,
            bouts: req.body.bouts,
            rounds: req.body.rounds,
            residence: req.body.residence,
            nationality: req.body.nationality
        }
    }, (err, result) => {
        if(result){
            res.json({'update': result});
        }
        if(err){
            res.json(err);
        }
    })
});

router.delete('/delete/:id', (req, res) => {
    Boxer.deleteOne({ _id: new mongo.ObjectId(req.params.id)}, (err, result) => {
        if(result){
            res.json({'delete': result});
        }
        if(err) {
            res.status(404).json(err);
        }
    })
});

module.exports = router;