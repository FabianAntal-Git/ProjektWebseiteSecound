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
     
    //Remove "active" class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    
    //Add "active" class to the clicked button
    button.classList.add('active');
    slides[indexButton].style.display = "flex";

    //Hide all other slides
    buttons.forEach((btn, i) => {
      if (i !== indexButton) {
        slides[i].style.display = "none";
      }
    });

    //set slideIndex after button use
    slideIndex = indexButton;
    
    //Log the index of the clicked button an active state
      console.log(`${indexButton}`+' and '+`${slideIndex}`);
    }); 
  });
}
//call ShowSlides
showSlides(); 
cycleSlides();



});

const languageData = {
  de: {
    "nav_german": "DE",
    "nav_english": "EN",
    "popup_datenschutz": "Rechtlicher Hinweis: Nur zu Präsentationszwecken",
    "popup_datenschutz_inhalt": "Alle in diesem Dokument, dieser Präsentation oder dieser Website verwendeten Bilder, Grafiken und Inhalte sind rein fiktiv. Sie dienen ausschließlich Demonstrations- und Präsentationszwecken. Eine kommerzielle Nutzung oder Weiterverbreitung ist strengstens untersagt. Alle Rechte liegen bei den jeweiligen Eigentümern.",
    "popup_datenschutz_inhalt2": "",
    "popup_schliessen": "Schließen",
    "Nav_Rezepte": "Rezepte",
    "Nav_Speisekarte": "Speisekarte",
    "Nav_Team": "Das Team",
    "Nav_Impressum": "Impressum",
    "page_title_Rezepte": "Neuste Rezepte",
    "page_subtitle_Specials_1": "Rindfleisch Burger Deluxe",
    "page_description_Specials_1": "Ein saftiges Rindfleisch-Patty, frisch vom Grill.Geschmolzener Cheddar-Käse läuft am Rand herunter.Knackiger Salat und reife Tomatenscheiben bringen Frische.Ein weiches, getoastetes Brioche-Brötchen rundet alles ab.Dieser Burger bietet eine hervorragende Qualität zu einem absolut fairen und erschwinglichen Preis.Angesichts der großen Portion und der frischen Zutaten ist jeder Cent perfekt investiert.Für diesen exzellenten Geschmack und die Sättigung stimmt das Preis-Leistungs-Verhältnis hier einfach komplett.",
    "page_subtitle_Specials_2": "Pulled Pork Burger",
    "page_description_Specials_2": "Zartes, langsam gegartes Pulled Pork voller würziger Aromen.Herzhafter Krautsalat sorgt für den perfekten, knackigen Kontrast.Rauchige Barbecue-Sauce verleiht eine angenehm süß-würzige Note.Ein fluffiges Brioche-Brötchen hält das geschmackliche Highlight zusammen.Für die lange Garzeit und die aufwendige Zubereitung ist dieser Burger ein echtes Schnäppchen.Die Kombination aus zartem, saftigem Fleisch und der reichlichen Portionsgröße bietet einen unschlagbaren Gegenwert für dein Geld.Hier bekommt man Spitzenqualität aus der Räucherkammer zu einem absolut fairen und gästefreundlichen Preis.",
    "page_title_Speisekarte": "Speisekarte",
    "page_description_Speisekarte": "Unsere Speisekarte bietet eine vielfältige Auswahl an meisterhaft zubereiteten Burgern für jeden Geschmack. Vom klassischen Rindfleisch-Klassiker bis hin zu saftigem Pulled Pork setzen wir auf frische, regionale Zutaten. Knackiges Gemüse, hausgemachte Saucen und fluffige Brioche-Brötchen machen jeden Biss zu einem Highlight. Entdecken Sie Ihren persönlichen Lieblingsburger und kombinieren Sie ihn mit unseren knusprigen Beilagen.",
    "page_title_Team": "Das Team",
    "page_description_Team": "Hinter unseren Meisterwerken steht ein leidenschaftliches Küchenteam, das die Kunst des Burger-Handwerks perfekt beherrscht. Mit unermüdlicher Kreativität, Präzision am Grill und einem kompromisslosen Anspruch an Frische wird hier jede Bestellung veredelt. Unsere Köche kombinieren traditionelle Techniken mit innovativen Ideen, um für Sie die besten Burger der Stadt zu kreieren. Jede Sauce ist hausgemacht, jedes Patty perfekt auf den Punkt gebraten,das schmeckt man mit jedem Bissen."
  },
  en: {
    "nav_german": "DE",
    "nav_english": "EN",
    "popup_datenschutz": "Legal Disclaimer: For Presentation Purposes Only",
    "popup_datenschutz_inhalt": "All images, graphics, and content used in this document, presentation, or website are entirely fictitious. They are intended solely for demonstration and presentation purposes. Any commercial use or redistribution is strictly prohibited. All rights belong to their respective owners.",
    "popup_datenschutz_inhalt2": "",
    "popup_schliessen": "Close",
    "Nav_Rezepte": "Recipes",
    "Nav_Speisekarte": "Menu",
    "Nav_Team": "Our Team",
    "Nav_Impressum": "Legal Notice",
    "page_title_Rezepte": "New Recipes",
    "page_subtitle_Specials_1": "Beef Burger Deluxe",
    "page_description_Specials_1": "A juicy beef patty, fresh off the grill.Melted cheddar cheese cascades down the sides.Crisp lettuce and ripe tomato slices add freshness.A soft, toasted brioche bun completes the masterpiece.This burger offers outstanding quality at an absolutely fair and affordable price point.Given the generous portion size and fresh ingredients, every single penny is well spent.For this excellent taste and satisfying portion, the value for money is simply perfect.",
    "page_subtitle_Specials_2": "Pulled Pork Burger",
    "page_description_Specials_2": "Tender, slow-cooked pulled pork bursting with savory flavors.Hearty coleslaw provides the perfect, crunchy contrast.Smoky barbecue sauce adds a pleasantly sweet and tangy note.A fluffy brioche bun holds this flavorful masterpiece together.Considering the long cooking time and meticulous preparation, this burger is an absolute steal.The combination of tender, juicy meat and the generous portion size offers unbeatable value for your money.You get top-tier smokehouse quality here at a price that is completely fair and customer-friendly.",
    "page_title_Speisekarte": "Menu",
    "page_description_Speisekarte": "Our menu features a diverse selection of masterfully crafted burgers to satisfy every craving. From traditional beef classics to tender pulled pork, we focus on fresh, locally sourced ingredients. Crisp vegetables, homemade sauces, and fluffy brioche buns make every single bite a highlight. Discover your personal favorite burger and pair it perfectly with our crispy sides.",
    "page_title_Team": "Our Team",
    "page_description_Team": "Behind our masterpieces is a passionate kitchen team that has truly perfected the art of crafting burgers. With endless creativity, precision at the grill, and an uncompromising commitment to freshness, they elevate every single order. Our chefs combine traditional techniques with innovative ideas to create the best burgers in town just for you. Every sauce is homemade, and every patty is grilled to perfection, a dedication you can taste in every bite."
  }
};

function getLanguageData(lang) {
  return languageData[lang] || languageData.de;
}

function setupLanguageSwitcher() {
  const languageChanger = document.querySelectorAll('.lingua-a');
  languageChanger.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const lang = event.currentTarget.id;
      if (!lang) return;
      localStorage.setItem("language", lang);
      const langData = getLanguageData(lang);
      updateContent(langData);
    });
  });
}

//Aktualisieren des Contents
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key] || "";
  });
}

//Initiales Event um entweder die zuvor gewählte Sprache zu setzen oder Deutsch als Fallback
window.addEventListener("DOMContentLoaded", () => {
  const userPreferredLanguage = localStorage.getItem("language") || "de";
  const langData = getLanguageData(userPreferredLanguage);
  updateContent(langData);
  setupLanguageSwitcher();
});

//Slider schriftgroeße anpassen
const slider = document.getElementById('Schriftgroesse');
const headings = document.querySelectorAll('h1, h2');
const paragraphs = document.querySelectorAll('p');
const navTexts = document.querySelectorAll('.NavText');

slider.addEventListener('input', (event) => {
  const size = event.target.value + 'px';
  headings.forEach(el => el.style.fontSize = size);
  paragraphs.forEach(el => el.style.fontSize = size);
  navTexts.forEach(el => el.style.fontSize = size);
});

//disclaimer Button
const popupbutton = document.querySelector('.popup-content button');
popupbutton.addEventListener('click', () => {
  const popup = document.getElementById('disclaimer-popup');
  popup.style.display = 'none';
});