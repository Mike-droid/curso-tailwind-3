const htmlElement = document.querySelector("html");
const toggleButton = document.getElementById("toggle");
const toggleButtonSM = document.getElementById("toggle-sm");

toggleButton.addEventListener("click", () => toggleDarkMode())
toggleButtonSM.addEventListener("click", () => toggleDarkMode())

const toggleDarkMode = () => {
  htmlElement.classList.contains("dark") ? htmlElement.classList.remove("dark") : htmlElement.classList.add("dark");
}