const router = require('express').Router();
const db = require('../models/')

//Routes to be created based on the api.js in public
// get /api/workouts
router.get('/api/workouts', (req, res) =>{
    db.Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    })
})
// update /api/workouts/:ID
// post /api/workouts
// get /api/workouts/range 
router.get('/api/workouts/range', (req, res) =>{
    db.Workout.find({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err =>{
        res.json(err);
    })
})


module.exports = router;