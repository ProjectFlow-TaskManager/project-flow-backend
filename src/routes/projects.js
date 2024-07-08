const router = require('express').Router();

const { createProject, getProjects } = require('../controllers/projects');

router.get('/projects', getProjects);
router.post('/projects', createProject);

module.exports = router;
