
// navbar
window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });







//accordian tours
  const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));




//hover to show images
// const sigiriya = document.querySelector(".at1"),
//   dabulla = document.querySelector(".at2"),
//   pollo = document.querySelector(".at3"),
//   minneri = document.querySelector(".at4"),
//   spicy = document.querySelector(".at5"),
//   temple = document.querySelector(".at6"),
//   botani = document.querySelector(".at7"),
//   klake = document.querySelector(".at8"),
//   kdance = document.querySelector(".at9"),
//   ganga = document.querySelector(".at10"),
//   muse = document.querySelector(".at11"),
//   lotus = document.querySelector(".at12"),

//   sigiriImg = document.querySelector(".sigiriya"),
//   dambullaImg = document.querySelector(".dambulla"),
//   polloImg = document.querySelector(".polo"),
//   minneriImg = document.querySelector(".minneri"),
//   spicyImg = document.querySelector(".spicegr"),
//   templeImg = document.querySelector(".kantt"),
//   botaniImg = document.querySelector(".botani"),
//   klakeImg = document.querySelector(".klake"),
//   kdanceImg = document.querySelector(".kdance"),
//   gangaImg = document.querySelector(".ganga"),
//   museImg = document.querySelector(".muse"),
//   lotusImg = document.querySelector(".lotus");

//   window.addEventListener("mousemove", (e) => {
//     let x = e.offsetX,
//       y = e.offsetY;
  
//     if (e.target.classList.contains("sigiriya")) {
//       sigiriImg.style.left = `${x}px`;
//       sigiriImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("dabulla")) {
//       dambullaImg.style.left = `${x}px`;
//       dambullaImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("pollo")) {
//       polloImg.style.left = `${x}px`;
//       polloImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("minneri")) {
//       minneriImg.style.left = `${x}px`;
//       minneriImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("spicy")) {
//       spicyImg.style.left = `${x}px`;
//       spicyImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("temple")) {
//       templeImg.style.left = `${x}px`;
//       templeImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("botani")) {
//       botaniImg.style.left = `${x}px`;
//       botaniImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("klake")) {
//       klakeImg.style.left = `${x}px`;
//       klakeImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("kdance")) {
//       kdanceImg.style.left = `${x}px`;
//       kdanceImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("ganga")) {
//       gangaImg.style.left = `${x}px`;
//       gangaImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("muse")) {
//       museImg.style.left = `${x}px`;
//       museImg.style.top = `${y}px`;
//     }
//     if (e.target.classList.contains("lotus")) {
//       lotusImg.style.left = `${x}px`;
//       lotusImg.style.top = `${y}px`;
//     }
//   });
  


//   sigiriya.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   sigiriya.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   dabulla.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   dabulla.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   pollo.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   pollo.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   minneri.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   minneri.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   spicy.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   spicy.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   temple.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   temple.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   botani.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   botani.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   klake.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   klake.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   kdance.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   kdance.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   ganga.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   ganga.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   muse.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   muse.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });

//   lotus.addEventListener("mouseover", () => {
//     personImg.style.display = "block";
//   });
//   lotus.addEventListener("mouseleave", () => {
//     personImg.style.display = "";
//   });




