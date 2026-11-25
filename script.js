(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const year = document.getElementById("year");
  const savedTheme = localStorage.getItem("po-theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  root.dataset.theme = savedTheme || (prefersLight ? "light" : "dark");
  year.textContent = new Date().getFullYear();

  function updateToggleLabel() {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", `Switch to ${next} theme`);
    toggle.setAttribute("title", `Switch to ${next} theme`);
  }

  toggle.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("po-theme", root.dataset.theme);
    updateToggleLabel();
  });

  updateToggleLabel();
})();
