const project1Clicked = document.querySelector(".project1");
const welcomeSection = document.querySelector(".welcome-section");
const nameSection = document.querySelector(".name-section-container");
const catImage = document.querySelector(".cat");

let isWelcomeVisible = false;

project1Clicked.addEventListener("click", () => {
    if (isWelcomeVisible) {
        welcomeSection.classList.remove("show");
        welcomeSection.classList.add("hidden");
        catImage.classList.remove("show"); // Hide cat image
        catImage.classList.add("hidden");
        setTimeout(() => {
            nameSection.classList.remove("hidden");
        }, 100);
    } else {
        nameSection.classList.add("hidden");
        setTimeout(() => {
            welcomeSection.classList.remove("hidden");
            welcomeSection.classList.add("show");
            catImage.classList.remove("hidden"); // Show cat image
            catImage.classList.add("show");
        }, 100);
    }
    isWelcomeVisible = !isWelcomeVisible;
});
