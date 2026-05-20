//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(str){
	let lower = str.toLowerCase();
	if(lower.startsWith("the ")) return lower.slice(4)  ;
	else if(lower.startsWith("an ")) return lower.slice(3);
	else if(lower.startsWith("a ")) return lower.slice(2);
	return str
}

bands.sort((a,b) => {
	return strip(a).localeCompare(strip(b));
}
let ul = document.getElementById("bands");

bands.forEach(band)=>{
	let li = document.createElement("li");
	li.textContent = band;
	ul.appendChild(li);
}

