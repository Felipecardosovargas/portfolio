// Get references to the toggle button and the root <html> element
const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme from localStorage or fall back to system preference
const savedTheme = localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Apply the initial theme on page load
applyTheme(savedTheme);

// Toggle theme on button click
toggleButton?.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// Apply the selected theme and persist the preference in localStorage
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
