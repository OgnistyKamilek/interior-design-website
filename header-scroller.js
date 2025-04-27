
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const logo = document.querySelector("#logo");

    const isSticky = window.scrollY > 0;
    header.classList.toggle("sticky", isSticky);

    if (isSticky) {
        logo.src = "Logos/logo-white.png";
    } else {
        logo.src = "Logos/Logo-black.png";
    }
});
