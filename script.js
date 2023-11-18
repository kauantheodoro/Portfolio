function openNav() {
    var x = document.querySelector(".navigation ul");

    if (x.className === "") {
        x.className = "menuJs";
        document.getElementById("threeline-icon").innerHTML = "&times;";
    } else {
        x.className = "";
        document.getElementById("threeline-icon").innerHTML = "&#9776;";
    }
}
