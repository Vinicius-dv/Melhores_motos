document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const navLinks = document.getElementById("ul_itens")

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show")
    });
});