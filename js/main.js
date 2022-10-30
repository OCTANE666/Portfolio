/*--- about section tab ----- */
(() =>{
const aboutSection = document.querySelector(".about-section"),
tabsContainer = document.querySelector(".about-tabs");

tabsContainer.addEventListener("click", (event) =>{
    if(event.target.classList.contains("tab-item") &&
    !event.target.classList.contains("active"))
    {
        const target = event.target.getAttribute("data-target");

        tabsContainer.querySelector(".active").classList.remove("outer-shadow",
         "active");

      event.target.classList.add("active","outer-shadow");

        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }

})

})();

(()=>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) =>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

/* navigation button */
(()=>{
  const hamburgerBtn =document.querySelector(".hamburger-btn"),
  navMenu = document.querySelector(".nav-menu"),
  closeNavBtn = navMenu.querySelector(".close-nav-menu");
  hamburgerBtn.addEventListener("click",showNavMenu);
  closeNavBtn.addEventListener("click",hideNavMenu);
  function showNavMenu(){
    navMenu.classList.toggle("open");
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
  }
})();