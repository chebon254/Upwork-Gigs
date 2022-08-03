// == Theme Change Script == //
function setThemePreference() {
    var d = new Date();
    /*
    * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
    * Early mornig = 0 - 6
    * Morning = 6 - 12
    * Evening = 12 - 18
    * Night = 18 - 23
    */
    var currentHour = d.getHours();  
    console.log("Hour: " + currentHour);
    
    if(currentHour >= 19 || currentHour <= 6) {
      document.querySelector('.body-effect').setAttribute("data-theme", "dark_theme");
      document.querySelector('.back-image').setAttribute("style", "background-image: url('img/dark-blur.png') !important;");
    }else {
      document.querySelector('.body-effect').setAttribute("data-theme", "light_theme");
      document.querySelector('.back-image').setAttribute("style", "background-image: url('img/light-blur.png') !important;");
    }
  }
  
  window.onload = setThemePreference;
  // == End of Theme Change Script == //
  function hamburgerClick(){
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".menu-bar");
    const links = document.querySelectorAll(".menu-bar li");
    
    //  console.log("hamm click")
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
  }