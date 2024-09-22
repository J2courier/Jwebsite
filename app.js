const clickProject1 = document.querySelector(".project1");
const sectionName = document.querySelector(".name");
const imagePfp = document. querySelector(".container-imgpfp > img");
const welcome = document.querySelector(".welcome");

imagePfp.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
sectionName.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
welcome.style.transition = "opacity 0.3s ease, visibility 0.3s ease";

clickProject1.addEventListener("click", ()=>{
    if (sectionName.style.visibility === "hidden") {
        sectionName.style.visibility = "visible";
        sectionName.style.opacity = "1";
        welcome.style.visibility = "hidden";
        imagePfp.style.visibility = "hidden";
        welcome.style.opacity = "0";
    } else {
        sectionName.style.visibility = "hidden";
        sectionName.style.opacity = "0";
        welcome.style.visibility = "visible";
        imagePfp.style.visibility = "visible";
        imagePfp.style.opacity = "1";
        welcome.style.opacity= "1";

    }
}); 