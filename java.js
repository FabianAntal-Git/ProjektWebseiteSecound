document.addEventListener('DOMContentLoaded', function(){
	const burger = document.getElementById('burger');
	const nav = document.getElementById('main-nav');

	function toggleMenu(){
		const open = nav.classList.toggle('open');
		burger.setAttribute('aria-expanded', open);
		nav.setAttribute('aria-hidden', !open);
	}

	burger.addEventListener('click', toggleMenu);


	
});


