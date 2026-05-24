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


