const header = document.getElementsByTagName("header")[0]; 
const logo = document.getElementById("logo-icon");
//icon variables
const homeIcon = document.getElementById("home-icon");
const projectsIcon = document.getElementById("projects-icon");
const contactsIcon = document.getElementById("contact-icon");
//arrow Variables
const arrowLeft = document.getElementById("button-left");
const arrowRight = document.getElementById("button-right");
                                                 
const arrowLeft2 = document.getElementById("button-left2");  //<!----- SECOND BUTTIONS
const arrowRight2 = document.getElementById("button-right2");




             //--Hide Header<<<<<<<<<<<<<<<<<\\\\\\\\\\\\\\\\\\//////////////////////////

//--------Icon Info

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

arrowLeft.onclick = function (){
    arrowLeft.parentElement.parentElement.style.visibility = "hidden";
    arrowLeft.parentElement.parentElement.nextElementSibling.style.visibility = "visible";
}

arrowRight.onclick = function (){
    arrowRight.parentElement.parentElement.style.visibility = "hidden";
    arrowRight.parentElement.parentElement.nextElementSibling.style.visibility = "visible";
}




                                                        //<!----- SECOND BUTTIONS
arrowLeft2.onmouseover = function (){
    arrowLeft2.children[0].style.borderTop = "30px solid transparent";
    arrowLeft2.children[0].style.borderBottom = "30px solid transparent";
    arrowLeft2.children[0].style.borderRight = "30px solid #ADADB1";
}
arrowLeft2.onmouseout = function (){
    arrowLeft2.children[0].style.borderTop = "";
    arrowLeft2.children[0].style.borderBottom = "";
    arrowLeft2.children[0].style.borderRight = ""; 
}

arrowRight2.onmouseover = function (){
    arrowRight2.children[0].style.borderTop = "30px solid transparent";
    arrowRight2.children[0].style.borderBottom = "30px solid transparent";
    arrowRight2.children[0].style.borderLeft = "30px solid #ADADB1";
}
arrowRight2.onmouseout = function (){
    arrowRight2.children[0].style.borderTop = "";
    arrowRight2.children[0].style.borderBottom = "";
    arrowRight2.children[0].style.borderLeft = ""; 
}

arrowLeft2.onclick = function (){
    arrowLeft2.parentElement.parentElement.style.visibility = "hidden";
    arrowLeft2.parentElement.parentElement.previousElementSibling.style.visibility = "visible";
}

arrowRight2.onclick = function (){
    arrowRight2.parentElement.parentElement.style.visibility = "hidden";
    arrowRight2.parentElement.parentElement.previousElementSibling.style.visibility = "visible";
}