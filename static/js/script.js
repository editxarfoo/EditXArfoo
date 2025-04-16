function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("darkModeBtn");
  btn.innerText = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}
