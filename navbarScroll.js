window.addEventListener("scroll", function () {
  let navbar = document.querySelector("header");
  let logos = document.querySelectorAll("nav a.logo h4");
  let menus = document.querySelectorAll("nav .nav-menu a.menu-item");

  if (window.innerWidth <= 450) {
    // For screen width 450px or less
    navbar.style.backgroundColor = "rgba(0,0,0,0)";
    logos.forEach((logo) => {
      logo.style.color = "#2ba9e2";
    });
    menus.forEach((menu) => {
      menu.style.color = "#2ba9e2";

      menu.addEventListener("mouseenter", function () {
        menu.style.color = "#2494c7";
      });

      menu.addEventListener("mouseleave", function () {
        menu.style.color = "#2ba9e2";
      });
    });
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#ffffff";
      logos.forEach((logo) => {
        logo.style.color = "#2ba9e2";
      });
      menus.forEach((menu) => {
        menu.style.color = "#2ba9e2";

        menu.addEventListener("mouseenter", function () {
          menu.style.color = "#2494c7";
        });

        menu.addEventListener("mouseleave", function () {
          menu.style.color = "#2ba9e2";
        });
      });
    } else {
      navbar.style.backgroundColor = "rgba(0,0,0,0)";
      logos.forEach((logo) => {
        logo.style.color = "#ffffff";
      });
      menus.forEach((menu) => {
        menu.style.color = "#2494c7";

        menu.addEventListener("mouseenter", function () {
          menu.style.color = "#2494c7";
        });

        menu.addEventListener("mouseleave", function () {
          menu.style.color = "#2494c7";
        });
      });
    }
  } else {
    // For screen width above 450px
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = "#ffffff";
      logos.forEach((logo) => {
        logo.style.color = "#2ba9e2";
      });
      menus.forEach((menu) => {
        menu.style.color = "#2ba9e2";

        menu.addEventListener("mouseenter", function () {
          menu.style.color = "#2494c7";
        });

        menu.addEventListener("mouseleave", function () {
          menu.style.color = "#2ba9e2";
        });
      });
    } else {
      navbar.style.backgroundColor = "rgba(0,0,0,0)";
      logos.forEach((logo) => {
        logo.style.color = "#ffffff";
      });
      menus.forEach((menu) => {
        menu.style.color = "#ffffff";

        menu.addEventListener("mouseenter", function () {
          menu.style.color = "#2494c7";
        });

        menu.addEventListener("mouseleave", function () {
          menu.style.color = "#ffffff";
        });
      });
    }
  }
});
