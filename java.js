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
let slideIndex = 0;



// slides change every 15secounds 
function cycleSlides()
{
  // remove active state from button before switching slides
  buttons[slideIndex].classList.remove('active');

  //cycle through slides and set style 
  for(i = 0; i< slides.length; i++)
    {
      slides[i].style.display = "none";
    }

    //increment by one 
    slideIndex++;

    // reverse slideIndex to 0 if to big
    if (slideIndex >= slides.length)
      {
        slideIndex = 0;
      }
    
    //console output to check slideIndex 
    console.log(`${slideIndex}`);

    //set slide display to flex
    slides[slideIndex].style.display = "flex";

    //add active state to button
    buttons[slideIndex].classList.add('active');

    // set Timeout to cycle every 15sec
    setTimeout(cycleSlides, 15000);
}


 //------------------SlideshowButtons---------------------------
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

    //set slideIndex after button use
    slideIndex = indexButton;
    
    // Log the index of the clicked button an active state
      console.log(`${indexButton}`+' and '+`${slideIndex}`);
    }); 
  });
}
// call ShowSlides
showSlides(); 
cycleSlides();

// to do 
// -change slides with arrow keys
// -make Burger Menue useable with Keyboard

});

