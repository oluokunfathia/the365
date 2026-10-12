
/* =========================
   THE 365 JAVASCRIPT
========================= */

// Automatically update the copyright year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Back-to-top button
const topButton = document.getElementById("top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});


// Return to the top when clicked
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Close the mobile navigation after clicking a section link
const navigationLinks = document.querySelectorAll(
    "#mainNav .nav-link"
);

const navigationMenu = document.getElementById("mainNav");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (
            navigationMenu.classList.contains("show") &&
            window.bootstrap
        ) {
            const menu = bootstrap.Collapse.getOrCreateInstance(
                navigationMenu
            );

            menu.hide();
        }
    });
});
