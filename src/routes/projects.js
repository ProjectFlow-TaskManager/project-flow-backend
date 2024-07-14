const router = require('express').Router();

const {
  createProject,
  getProjects,
  getProjectById,
  deleteProject,
} = require('../controllers/projects');

router.get('/projects', getProjects);
router.get('/project/:projectId', getProjectById);
router.post('/project', createProject);
router.delete('/project/:projectId', deleteProject);

module.exports = router;
