function toggle() {
	
	let menu = document.getElementById("navbar");
	
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}

document.getElementById("menuIcon").addEventListener("click", toggle());