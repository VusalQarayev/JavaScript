document.getElementById('menubar').onclick = function() {

    main.style.left = "0px";
    main.style.transition = "0.4s";
    document.getElementById("myDIV").style.display = "none";
};

document.getElementById('close').onclick = function() {
    document.getElementById("myDIV").style.display = "flex";
    main.style.left = "-200px";
};
