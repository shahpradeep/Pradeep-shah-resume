const buttons = document.querySelectorAll(".category-button");
const panels = document.querySelectorAll(".content-section");
const companyButtons = document.querySelectorAll(".company-button");
const companyPanels = document.querySelectorAll("[data-company-panel]");

function showPanel(target) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.target === target);
  });

  panels.forEach((panel) => {
    const isTarget = panel.dataset.panel === target;
    panel.hidden = !isTarget;
    panel.classList.toggle("is-active", isTarget);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    showPanel(button.dataset.target);
  });
});

function showCompany(company) {
  companyButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.company === company);
  });

  companyPanels.forEach((panel) => {
    const isTarget = panel.dataset.companyPanel === company;
    panel.hidden = !isTarget;
    panel.classList.toggle("is-active", isTarget);
  });
}

companyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showCompany(button.dataset.company);
  });
});
