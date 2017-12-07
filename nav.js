let menubutton = document.getElementById("menu-open-close");
let mainmenu = document.getElementById("nav-menu");
let toggle = false;
menubutton.addEventListener("click", showhide);

function showhide() {
	if (toggle) {
		mainmenu.style.display = '';
		toggle = false;
	}
	else {
		console.log("called function");
		mainmenu.style.display = 'inline-block';
		toggle = true;
	}
}