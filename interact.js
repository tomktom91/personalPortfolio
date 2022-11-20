const headerButton = document.getElementById("header-button");
const header = document.getElementsByTagName("header")[0];
const logo = document.getElementById("logo-icon");
//icon variables
const homeIcon = document.getElementById("home-icon");
const projectsIcon = document.getElementById("projects-icon");
const contactsIcon = document.getElementById("contact-icon");
//arrow Variables
const arrowLeft = document.getElementById("button-left");
const arrowRight = document.getElementById("button-right");


headerButton.onclick = function(){          // ------------Activate Header
headerButton.style.backgroundColor = "rgba(27, 28, 47, 0)";
headerButton.nextElementSibling.style.visibility = "visible";
headerButton.nextElementSibling.style.bottom = "0";
headerButton.nextElementSibling.style.height = "90px";
headerButton.nextElementSibling.style.backgroundColor = "rgba(27, 28, 47, 40%)";
headerButton.style.display = "none";

}
header.onclick = function(){             //--Hide Header
    header.previousElementSibling.style.backgroundColor = "";     
    header.previousElementSibling.style.display = "flex";    
    header.style.visibility = "";
    header.firstChild.style.visibility = "hidden";      
    
}
//--------Icon Info
homeIcon.onmouseover = function(){
    homeIcon.nextElementSibling.style.visibility = "visible";
}
homeIcon.onmouseout = function (){
    homeIcon.nextElementSibling.style.visibility = "";
}
projectsIcon.onmouseover = function(){
    projectsIcon.nextElementSibling.style.visibility = "visible";
}
projectsIcon.onmouseout = function (){
    projectsIcon.nextElementSibling.style.visibility = "";
}
contactsIcon.onmouseover = function(){
    contactsIcon.nextElementSibling.style.visibility = "visible";
}
contactsIcon.onmouseout = function (){
    contactsIcon.nextElementSibling.style.visibility = "";
}
// End of Icon interactions

arrowLeft.onmouseover = function (){
    arrowLeft.children[0].style.borderTop = "30px solid transparent";
    arrowLeft.children[0].style.borderBottom = "30px solid transparent";
    arrowLeft.children[0].style.borderRight = "30px solid #ADADB1";
}
arrowLeft.onmouseout = function (){
    arrowLeft.children[0].style.borderTop = "";
    arrowLeft.children[0].style.borderBottom = "";
    arrowLeft.children[0].style.borderRight = ""; 
}


arrowRight.onmouseover = function (){
    arrowRight.children[0].style.borderTop = "30px solid transparent";
    arrowRight.children[0].style.borderBottom = "30px solid transparent";
    arrowRight.children[0].style.borderLeft = "30px solid #ADADB1";
}
arrowRight.onmouseout = function (){
    arrowRight.children[0].style.borderTop = "";
    arrowRight.children[0].style.borderBottom = "";
    arrowRight.children[0].style.borderLeft = ""; 
}