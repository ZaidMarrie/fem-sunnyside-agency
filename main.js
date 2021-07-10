function toggle() {
	
	let menu = document.getElementById("navbar");
	
    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

document.getElementById("menuIcon").addEventListener("click", toggle());