const Project = require('../models/project');

const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ owner: req.user._id }).populate(
      'owner'
    );
    res.status(200).send(projects);
  } catch (err) {
    next(err);
  }
};

const getProjectById = async (req, res, next) => {
  const projectId = req.params.projectId;

  try {
    const project = await Project.findById(projectId).populate('owner');
    if (project) {
      res.status(200).send(project);
    } else {
      res.status(404).send({ message: 'Project not found' });
    }
  } catch (err) {
    next(err);
  }
};

const createProject = async (req, res, next) => {
  const { name, description } = req.body;
  const userId = req.user._id;

  try {
    const project = await Project.create({ name, description, owner: userId });
    res.status(201).send(project);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const deleteProject = async (req, res, next) => {
  const projectId = req.params.projectId;
  const userId = req.user._id;

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).send({ message: 'Project not found' });
    }

    if (project.owner.toString() !== userId) {
      return res
        .status(403)
        .send({ message: 'You do not have permission to delete this project' });
    }

    await project.deleteOne();
    res.status(200).send({ message: 'Project deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProjects, getProjectById, createProject, deleteProject };
