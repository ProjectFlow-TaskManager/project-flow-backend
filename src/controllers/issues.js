const Issue = require('../models/issue');
const Project = require('../models/project');

const createIssue = async (req, res, next) => {
  const projectId = req.params.projectId;
  const userId = req.user._id;
  const { title, description, labels } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      res.status(404).send({ message: 'Ошибка: прооект не найден' });
    }

    const issue = await Issue.create({
      title: title,
      description: description,
      status: 'open',
      labels: labels || [],
      project: projectId,
      owner: userId,
    });

    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

const getIssues = async (req, res, next) => {
  const projectId = req.params.projectId;
  try {
    const issues = await Issue.find({ project: projectId });
    if (!issues) {
      res.status(404).send({ message: 'Задача не найдена' });
    }
    res.status(201).send(issues);
  } catch (err) {
    next(err);
  }
};

const getIssueById = async (req, res, next) => {
  const issueId = req.params.issueId;
  try {
    const issue = await Issue.find(issueId);
    if (!issue) {
      res.status(404).send({ message: 'Произошла ошибка' });
    }
    res.status(200).send(issue);
  } catch (err) {
    next(err);
  }
};

module.exports = { createIssue, getIssueById, getIssues };
