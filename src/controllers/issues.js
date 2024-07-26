const Issue = require('../models/issue');
const Project = require('../models/project');

const createIssue = async (req, res, next) => {
  const projectId = req.params.projectId;
  const { title, description, labels } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      res.status(404).send({ message: 'Ошибка' });
    }
    const issue = await Issue.create({
      title: title,
      description: description,
      status: 'open',
      labels: labels || [],
      project: projectId,
    });
  } catch (err) {}
};
