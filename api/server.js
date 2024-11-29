const express = require('express')
const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)


server.use('*', (req, res,) => {
    res.json({api: 'up'})
})

module.exports = server