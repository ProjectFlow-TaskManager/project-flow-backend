const router = require('express').Router();
const {
  createIssue,
  getIssues,
  getIssueById,
} = require('../controllers/issues');

router.get('/issues', getIssues);
router.get('/issue/:issueId', getIssueById);
router.post('/:projectId/issue', createIssue);

module.exports = router;
