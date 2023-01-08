
const boothButton = document.getElementById("boothButton");
const abbeyButton = document.getElementById("abbeyButton");
const greenpeaceButton = document.getElementById("greenpeaceButton");
const kartButton = document.getElementById("kartButton");

abbeyButton.onmouseover = function (){
    abbeyButton.parentElement.previousElementSibling.children[1].style.display= "inline";
}
abbeyButton.onmouseleave = function (){
    abbeyButton.parentElement.previousElementSibling.children[1].style.display= "none";
}

boothButton.onmouseover = function (){
    boothButton.parentElement.previousElementSibling.children[2].style.display= "inline";
}
boothButton.onmouseleave = function (){
    boothButton.parentElement.previousElementSibling.children[2].style.display= "none";
}

greenpeaceButton.onmouseover = function (){
    greenpeaceButton.parentElement.previousElementSibling.children[3].style.display= "inline";
}

greenpeaceButton.onmouseleave = function (){
    greenpeaceButton.parentElement.previousElementSibling.children[3].style.display= "none";
}

kartButton.onmouseover = function (){
    kartButton.parentElement.previousElementSibling.children[4].style.display= "inline";
}

kartButton.onmouseleave = function (){
    kartButton.parentElement.previousElementSibling.children[4].style.display= "none";
}