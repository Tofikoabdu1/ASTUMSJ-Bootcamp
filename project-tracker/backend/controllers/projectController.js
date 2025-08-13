const service = require("../services/projectService");

exports.getAll = (req, res) => res.json(service.getAllProjects());

exports.getOne = (req, res) => {
  const project = service.getProjectById(Number(req.params.id));
  project ? res.json(project) : res.status(404).send("PROJECT NOT FOUND");
};

exports.create = (req, res) => {
  const newProject = { id: Date.now(), ...req.body };
  service.addProject(newProject);
  res.status(201).json(newProject);
};

exports.update = (req, res) => {
  service.updateProject(Number(req.params.id), req.body);
  res.send("PROJECT UPDATED");
};

exports.remove = (req, res) => {
  service.deleteProject(Number(req.params.id));
  res.send("PROJECT DELETED");
};
