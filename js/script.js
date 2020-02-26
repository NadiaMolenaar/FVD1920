/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.

*/

//Pakt alle buttons in .ExtraInfo divs
var buttons = document.querySelectorAll(".ExtraInfo button");

//Dit is een loop elke keer als hij door dat stukje looped wordt x een getal hoger, zolang x kleiner of gelijk is aan het aantal knoppen voert hij de code tussen de {} uit
for(x = 0; x < buttons.length; x++){	
	buttons[x].addEventListener("click", function(event){
        
        //De div die al die andere elementen in zich heeft is de papa (parent) en daarin zitten allemaal kindjes, dus je wil alle papa’s met een knop erin Hebben
		let parent = event.target.parentElement;	
		
        //Hier staat pak de knop en als het kindje van die extra info butto zichtbaar is maak dan van de knop een minnetje. Als deze info onzichtbaar is maak het een plusje.
		event.target.innerHTML = parent.childNodes[3].classList.contains("HiddenInfo") ? "-" : "+";
		
        //Met parent.childnode[3] zeg je pak van de papa het 3e kindje, in dit geval dus die info die verstopt wordt; en verstop deze als deze zichtbaar is; en laat het zien als deze verstopt is. Dat is toggelen.
		parent.childNodes[3].classList.toggle("HiddenInfo");
	
	})
}