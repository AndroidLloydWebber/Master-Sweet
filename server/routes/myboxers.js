const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const mongo = require('mongodb');

const Myboxers = require('../models/Myboxers');

router.get('/', (req, res) => {
    Myboxers.find()
        .then(boxers => res.send(boxers))
        .catch(err => res.status(404).json(err));
});

router.get('/:id', (req, res) => {
    Myboxers.findById(req.params.id)
        .then(boxer => res.json(boxer))
        .catch(err => res.status(404).json({
            nouserfound: 'No boxer found with that ID'
        }));
});

router.get('/search/:name', (req, res) => {
    Myboxers.findOne({'name': {'$regex': req.params.name}})
        .then(boxer => res.json(boxer))
        .catch(err => res.status(404).json({
            nouserfound: 'No boxer found with that ID'
        }));
});

router.post('/add', (req, res) => {
    //return res.json(req.body);
    var newMyboxer = new Myboxer({
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


router.delete('/delete/:id', (req, res) => {
    Myboxer.deleteOne({ _id: new mongo.ObjectId(req.params.id)}, (err, result) => {
        if(result){
            res.json({'delete': result});
        }
        if(err) {
            res.status(404).json(err);
        }
    })
});

module.exports = router;