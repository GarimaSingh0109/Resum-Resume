document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const signUpBtn = document.getElementById("sign-up-btn");
    const signInBtn = document.getElementById("sign-in-btn");
  
    signUpBtn.addEventListener("click", () => {
      container.classList.add("show-signup");
    });
  
    signInBtn.addEventListener("click", () => {
      container.classList.remove("show-signup");
    });
});
  

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  // Toggle menu functionality
  menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show-menu");
  });

  // Progress bar functionality
  window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / documentHeight) * 100;
      document.getElementById("progress-bar").style.width = `${scrollPercent}%`;
  });
});

