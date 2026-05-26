document.addEventListener('DOMContentLoaded', function(){
	const burger = document.getElementById('NaviBut');
	const nav = document.getElementById('Navi');
	
	


	function toggleMenu()
	{
		const open = nav.classList.toggle('open');
		nav.setAttribute('aria-expanded', open);
		nav.setAttribute('aria-hidden', !open);
	}

	burger.addEventListener('click', toggleMenu);
	
});

let slideIndex = 1;
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

