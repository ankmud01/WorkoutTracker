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

// update /api/workouts/:ID - adds to the existing workout
router.put('/api/workouts/:id',(req, res) =>{
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body}},
        {new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})
// post /api/workouts - creates new workout
router.post('/api/workouts',(req, res) => {
    db.Workout.create({})
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

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