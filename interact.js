


const headerButton = document.getElementById("header-button");
const header = document.getElementsByTagName("header")[0];
const logo = document.getElementById("logo-icon");
//icon variables
const homeIcon = document.getElementById("home-icon");
const projectsIcon = document.getElementById("projects-icon");
const contactsIcon = document.getElementById("contact-icon");



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