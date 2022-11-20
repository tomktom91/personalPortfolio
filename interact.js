


const headerButton = document.getElementById("header-button");
const header = document.getElementsByTagName("header")[0];
const logo = document.getElementById("logo-icon");


headerButton.onmousedown = function(){
headerButton.style.backgroundColor = "rgba(27, 28, 47, 0)";
headerButton.nextElementSibling.style.transition = "all 1s";
headerButton.nextElementSibling.style.visibility = "visible";
headerButton.nextElementSibling.style.bottom = "0";
headerButton.nextElementSibling.style.height = "90px";
headerButton.nextElementSibling.style.backgroundColor = "rgba(27, 28, 47, 40%)";
headerButton.firstChild.style.display = "none";

}

header.onclick = function(){
    header.previousElementSibling.style.backgroundColor = "";
    header.previousElementSibling.style.transition = "all 1s";    
    header.nextElementSibling.style.transition = "all 1s";    
    header.style.visibility = "";
    header.firstChild.style.visibility = "hidden";        
    header.style.height = "1px";
    

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