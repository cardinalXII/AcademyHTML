function openCity(evt, cityName) {
    let i, tabcontent, headermenu;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    headermenu = document.getElementsByClassName("header-menu");
    for (i = 0; i < headermenu.length; i++) {
        headermenu[i].className = header-menu[i].className.replace(" active", "");
    }
	document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
