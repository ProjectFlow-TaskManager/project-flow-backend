const Project = require('../models/project');

module.exports.getProjects = (req, res, next) => {
    Project.find({})
        .then(project => res.send(project))
        .catch(next)
}

module.exports.createProject = (req, res, next) => {
    const {name, description} = req.body;
    Project.create({ name, description })
        .then(project => res.status(200).send(project))
        .catch(err => next(err))
}