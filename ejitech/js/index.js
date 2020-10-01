window.onload = initAll;

function initAll() {
	document.getElementById("active").onclick = clickHandler;
}

function clickHandler() {
	if(this.toString().indexOf("EJITECH") < 0){
		alert("You are leaving our site");
	}
}
