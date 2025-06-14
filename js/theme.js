// Seleciona o botão e o elemento raiz do HTML
const toggleButton = document.getElementById("theme-toggle");
const root = document.documentElement;

// Recupera o tema salvo ou detecta o tema preferido do sistema
const savedTheme = localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Aplica o tema inicial
applyTheme(savedTheme);

// Adiciona evento de clique ao botão para alternar entre os temas
toggleButton?.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// Função que aplica o tema e salva no localStorage
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
