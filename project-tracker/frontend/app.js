const form = document.getElementById("projectForm");
const list = document.getElementById("projectList");

async function fetchProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();
  list.innerHTML = "";

  projects.forEach((p) => {
    const item = document.createElement("li");
    item.className = p.status === "completed" ? "completed" : "";
    item.innerHTML = `
      <strong>${p.name}</strong><br>
      <span>${p.description}</span><br>
      <em>Status: ${p.status}</em><br>
      <button class="delete-btn" data-id="${p.id}">🗑️ Delete</button>
    `;
    list.appendChild(item);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      await fetch(`http://localhost:3000/api/projects/${id}`, {
        method: "DELETE",
      });
      fetchProjects();
    });
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newProject = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  };
  await fetch("http://localhost:3000/api/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProject),
  });
  form.reset();
  fetchProjects();
});

fetchProjects();
