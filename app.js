const clickProject1 = document.querySelector(".project1");
const sectionName = document.querySelector(".name");
const welcome = document.querySelector(".welcome");

sectionName.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
welcome.style.transition = "opacity 0.3s ease, visibility 0.3s ease";

clickProject1.addEventListener("click", ()=>{
    if (sectionName.style.visibility === "hidden") {
        sectionName.style.visibility = "visible";
        sectionName.style.opacity = "1";
        welcome.style.visibility = "hidden";
        welcome.style.opacity = "0";
    } else {
        sectionName.style.visibility = "hidden";
        sectionName.style.opacity = "0";
        welcome.style.visibility = "visible";
        welcome.style.opacity= "1";
    }
});