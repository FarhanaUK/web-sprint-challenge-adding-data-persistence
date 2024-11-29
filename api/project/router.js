// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');  
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const projects = await Project.getAll();  
        res.status(200).json(projects);  
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving projects', error: error.message });
    }
});


router.post('/', async (req, res,next) => {
    const project = req.body

    Project.create(project)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
    
});
module.exports = router;
