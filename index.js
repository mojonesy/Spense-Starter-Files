const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".nav");


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visibility");
    
    if (visibility === "false") {
        primaryNav.setAttribute("data-visibility", true);
        navToggle.setAttribute("aria-expanded", true)
    } else {
        primaryNav.setAttribute("data-visibility", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});
