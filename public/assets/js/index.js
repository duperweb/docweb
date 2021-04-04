// add
window.addEventListener("load", init, false);
// targetting devices width
var devices = document.body.clientWidth || window.innerWidth;
function init() {
// g
	"use strict";
	if(devices <= 380) {
		// 
		var btn = document.getElementById("button-top-menu");
		var menutop = document.getElementById("top-nav-hori");
		btn.addEventListener("click", stilShow);
		function stilShow() {
			if (menutop.style.display == "none") {
				menutop.style.display = "block";
			} else {
				menutop.style.display = "none";
			}
		}
	}
}





