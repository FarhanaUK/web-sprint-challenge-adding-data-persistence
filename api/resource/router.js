// build your `/api/projects` router here
const express = require('express');
const Resource = require('./model');  // Add 'const' to properly declare the Project variable
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const resource = await Resource.getAll();  
        res.status(200).json(resource);  
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving resource', error: error.message });
    }
});


router.post('/', async (req, res,next) => {
    const resource = req.body

    Resource.create(resource)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
    
});

module.exports = router;
