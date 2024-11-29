
const express = require('express');
const Task = require('./model'); 
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const task = await Task.getAll();  
        res.status(200).json(task);  
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error: error.message });
    }
});


router.post('/', async (req, res,next) => {
    const task = req.body

    Task.create(task)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(next)
    
});

module.exports = router;
