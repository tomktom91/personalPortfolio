


const headerButton = document.getElementById("header-button");
const header = document.getElementsByTagName("header");
const logo = document.getElementById("logo-icon");


headerButton.onmousedown = function(){
headerButton.style.backgroundColor = "rgba(27, 28, 47, 60%)";

}

headerButton.onmouseup = function(){
    headerButton.style.backgroundColor = "";
    
}

logo.onmousedown = function() {
logo.style.backgroundColor = "rgba(27, 28, 47, 60%)";
logo.style.backgroundImage = "none";
headerButton.style.backgroundColor = "rgba(27, 28, 47, 60%)";
}

logo.onmouseup = function() {
    logo.style.backgroundImage = "";
    logo.style.backgroundColor = "rgba(27, 28, 47, 60%)";
    }