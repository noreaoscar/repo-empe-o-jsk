
/*////////////////////////////////
////////BOTONERA Empeños///////
////////////////////////////////*/
document
  .getElementById("hover-card1")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card1").style.display = "none";
    document.getElementById("text-card1-none").style.display = "block";

    document.getElementById("text-card2").style.display = "block";
    document.getElementById("text-card2-none").style.display = "none";

    document.getElementById("text-card3").style.display = "block";
    document.getElementById("text-card3-none").style.display = "none";
    document.getElementById("text-card4").style.display = "block";
    document.getElementById("text-card4-none").style.display = "none";
    document.getElementById("text-card5").style.display = "block";
    document.getElementById("text-card5-none").style.display = "none";
    document.getElementById("text-card6").style.display = "block";
    document.getElementById("text-card6-none").style.display = "none";
  });

  document
  .getElementById("hover-card2")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card2").style.display = "none";
    document.getElementById("text-card2-none").style.display = "block";

    document.getElementById("text-card1").style.display = "block";
    document.getElementById("text-card1-none").style.display = "none";

    document.getElementById("text-card3").style.display = "block";
    document.getElementById("text-card3-none").style.display = "none";
    document.getElementById("text-card4").style.display = "block";
    document.getElementById("text-card4-none").style.display = "none";
    document.getElementById("text-card5").style.display = "block";
    document.getElementById("text-card5-none").style.display = "none";
    document.getElementById("text-card6").style.display = "block";
    document.getElementById("text-card6-none").style.display = "none";
  
    
  });

  document
  .getElementById("hover-card3")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card3").style.display = "none";
    document.getElementById("text-card3-none").style.display = "block";

    document.getElementById("text-card1").style.display = "block";
    document.getElementById("text-card1-none").style.display = "none";
    document.getElementById("text-card2").style.display = "block";
    document.getElementById("text-card2-none").style.display = "none";
    document.getElementById("text-card4").style.display = "block";
    document.getElementById("text-card4-none").style.display = "none";
    document.getElementById("text-card5").style.display = "block";
    document.getElementById("text-card5-none").style.display = "none";
    document.getElementById("text-card6").style.display = "block";
    document.getElementById("text-card6-none").style.display = "none";
    
  });

  document.getElementById("hover-card4")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card4").style.display = "none";
    document.getElementById("text-card4-none").style.display = "block";

    document.getElementById("text-card1").style.display = "block";
    document.getElementById("text-card1-none").style.display = "none";
    document.getElementById("text-card2").style.display = "block";
    document.getElementById("text-card2-none").style.display = "none";
    document.getElementById("text-card3").style.display = "block";
    document.getElementById("text-card3-none").style.display = "none";
    document.getElementById("text-card5").style.display = "block";
    document.getElementById("text-card5-none").style.display = "none";
    document.getElementById("text-card6").style.display = "block";
    document.getElementById("text-card6-none").style.display = "none";
    
  });

  document.getElementById("hover-card5")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card5").style.display = "none";
    document.getElementById("text-card5-none").style.display = "block";

    document.getElementById("text-card1").style.display = "block";
    document.getElementById("text-card1-none").style.display = "none";
    document.getElementById("text-card2").style.display = "block";
    document.getElementById("text-card2-none").style.display = "none";
    document.getElementById("text-card3").style.display = "block";
    document.getElementById("text-card3-none").style.display = "none";
    document.getElementById("text-card4").style.display = "block";
    document.getElementById("text-card4-none").style.display = "none";
    document.getElementById("text-card6").style.display = "block";
    document.getElementById("text-card6-none").style.display = "none";
    
  });
  document.getElementById("hover-card6")
  .addEventListener("mouseover", function () {
    document.getElementById("text-card6").style.display = "none";
    document.getElementById("text-card6-none").style.display = "block";

    document.getElementById("text-card1").style.display = "block";
    document.getElementById("text-card1-none").style.display = "none";
    document.getElementById("text-card2").style.display = "block";
    document.getElementById("text-card2-none").style.display = "none";
    document.getElementById("text-card3").style.display = "block";
    document.getElementById("text-card3-none").style.display = "none";
    document.getElementById("text-card4").style.display = "block";
    document.getElementById("text-card4-none").style.display = "none";
    document.getElementById("text-card5").style.display = "block";
    document.getElementById("text-card5-none").style.display = "none";
    
  });





  document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll(".carousel");
    M.Carousel.init(elementosCarousel, {
      durantion: 100,
      dist: -100,
      shift: 5,
      padding: 5,
      numVisible: 5,
      indicators: 5,
      noWrap: false,
    });
  });
  



 