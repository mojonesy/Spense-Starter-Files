const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
    if (nav.style.display === "block") {
        nav.style.display = "none";
        document.body.classList.toggle(".nav-open");
    } else {
        nav.style.display = "block";
        document.body.classList.toggle(".nav-open");
        navToggle.style.zIndex = "110";
    }
});


// window.addEventListener("click", (e) => {
//     if (nav.style.display === "block" && !nav.contains(e.target)) {
//         nav.style.display = "none";
//         document.body.classList.toggle(".nav-open");
//     }
// });