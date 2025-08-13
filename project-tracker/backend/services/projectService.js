const projects = require("../data/Projects");

function getAllProjects() {
  return projects;
}

function getProjectById(id) {
  return projects.find((p) => p.id === id);
}

function addProject(project) {
  projects.push(project);
}

function updateProject(id, updatedProject) {
  const index = projects.findIndex((p) => p.id === id);
  if (index !== -1) projects[index] = { ...projects[index], ...updatedProject };
}

function deleteProject(id) {
  const index = projects.findIndex((p) => p.id === id);
  if (index !== -1) projects.splice(index, 1);
}

module.exports = {
  getAllProjects,
  getProjectById,
  addProject,
  updateProject,
  deleteProject,
};
