let scrollToTopButton = document.getElementById("scrollToTop");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});