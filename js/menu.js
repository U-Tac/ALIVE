function openNav() {
    var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (w < 420) {
        document.getElementById("mySidenav").style.width = "100%";
    } else {
        document.getElementById("mySidenav").style.width = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
