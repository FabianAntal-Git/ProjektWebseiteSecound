// Wait for Document to Load
document.addEventListener('DOMContentLoaded', function(){
	const burger = document.getElementById('NaviBut');
	const nav = document.getElementById('Navi');
	
  //toggleMenueFunction
	function toggleMenu()
	{
		const open = nav.classList.toggle('open');
		nav.setAttribute('aria-expanded', open);
		nav.setAttribute('aria-hidden', !open);
	}

  //Burger click event
	burger.addEventListener('click', toggleMenu);
	
const buttons = document.querySelectorAll('.dot');
let slides = document.getElementsByClassName("mySlides");

//Show Slides on Button click event
function showSlides(){
buttons.forEach((button, indexButton) => {
  
  button.addEventListener('click', () => {
     
    // Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add "active" class to the clicked button
    button.classList.add('active');
    slides[indexButton].style.display = "flex";

    // Hide all other slides
    buttons.forEach((btn, i) => {
      if (i !== indexButton) {
        slides[i].style.display = "none";
      }
    });
    // Log the index of the clicked button an active state
      console.log(`${indexButton}`+' and '+`${button.classList.contains('active')}`);
    }); 
  });
}
// call ShowSlides
showSlides(); 
});

/*
const buttons = document.querySelectorAll('.dot');
let slides = document.getElementsByClassName("mySlides");

function ShowSlides(){
buttons.forEach((button, indexButton) => {
  
  button.addEventListener('click', () => {
     
    // Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add "active" class to the clicked button
    button.classList.add('active');
    slides[indexButton].style.display = "flex";

    // Hide all other slides
    buttons.forEach((btn, i) => {
      if (i !== indexButton) {
        slides[i].style.display = "none";
      }
    });
    // Log the index of the clicked button an active state
      console.log(`${indexButton}`+' and '+`${button.classList.contains('active')}`);
    }); 
  });

  
}



ShowSlides();

*/
/*
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}
*/
