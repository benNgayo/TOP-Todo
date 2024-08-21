export function Project() {
  const addProjectsBtn = document.querySelector(".add-project");
  const formOverlay = document.querySelector(".projects-form-overlay");
  const cancelBtn = document.querySelector(".cancel");
  const addBtn = document.querySelector(".add");

  addProjectsBtn.addEventListener("click", () => {
    formOverlay.classList.add("show");
  });
  formOverlay.addEventListener("click", (e) => {
    if (e.target === formOverlay) {
      formOverlay.classList.remove("show");
    }
  });
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formOverlay.classList.remove("show");
  });
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
}
