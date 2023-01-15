const header = document.getElementsByTagName("header")[0]; 
const logo = document.getElementById("logo-icon");
//icon variables
const homeIcon = document.getElementById("home-icon");
const projectsIcon = document.getElementById("projects-icon");
const contactsIcon = document.getElementById("contact-icon");
//arrow Variables
const arrowLeft = document.getElementById("button-left");
const arrowRight = document.getElementById("button-right");                                                
const intro = document.getElementById("intro");
const aboutMe = document.getElementById("about-me");
const contactSkills = document.getElementById("contact-me");
const circleOne = document.getElementById("circle1");
const circleTwo = document.getElementById("circle2");
const circleThree = document.getElementById("circle3");


arrowLeft.onmouseover = function (){
    arrowLeft.children[0].style.borderTop = "40px double transparent";
    arrowLeft.children[0].style.borderBottom = "40px double transparent";
    arrowLeft.children[0].style.borderRight = "40px double rgba(163, 13, 62, 1)";
    arrowLeft.style.width = "100px";
    arrowLeft.style.height = "100px";
}
arrowLeft.onmouseout = function (){
    arrowLeft.children[0].style.borderTop = "";
    arrowLeft.children[0].style.borderBottom = "";
    arrowLeft.children[0].style.borderRight = ""; 
    arrowLeft.style.width = "";
    arrowLeft.style.height = "";
}


arrowRight.onmouseover = function (){
    arrowRight.children[0].style.borderTop = "40px double transparent";
    arrowRight.children[0].style.borderBottom = "40px double transparent";
    arrowRight.children[0].style.borderLeft = "40px double rgba(163, 13, 62, 1)";
    arrowRight.style.width = "100px";
    arrowRight.style.height = "100px";
}
arrowRight.onmouseout = function (){
    arrowRight.children[0].style.borderTop = "";
    arrowRight.children[0].style.borderBottom = "";
    arrowRight.children[0].style.borderLeft = ""; 
    arrowRight.style.width = "";
    arrowRight.style.height = "";
}


arrowLeft.addEventListener('click', () => {
    let aboutMeVisible = aboutMe.style.visibility;
    let introVisible = intro.style.visibility;
    let contactVisible = contactSkills.style.visibility;
    if (aboutMeVisible === '' && contactVisible === ''){
        intro.style.visibility = "hidden";
        aboutMe.style.visibility = "";
        contactSkills.style.visibility = "visible";
          circleTwo.style.opacity ="";
          circleOne.style.opacity = "60%";
          circleThree.style.opacity = "100%"
        } else if (introVisible !== '' && aboutMeVisible === ''){
            intro.style.visibility = "hidden";
            aboutMe.style.visibility = "visible"; 
            contactSkills.style.visibility = ""; 
              circleTwo.style.opacity ="100%";
              circleOne.style.opacity = "60%";
    } else {
        intro.style.visibility = "";
        aboutMe.style.visibility = "";
        contactSkills.style.visibility = "";
          circleTwo.style.opacity ="";
          circleOne.style.opacity = "";
          circleThree.style.opacity = "";
    }
  })
 
arrowRight.addEventListener('click', () => {
  let aboutMeVisible = aboutMe.style.visibility;
  let introVisible = intro.style.visibility;
  let contactVisible = contactSkills.style.visibility;
  if (aboutMeVisible === '' && contactVisible === ''){
        intro.style.visibility = "hidden";
        aboutMe.style.visibility = "visible"; 
        contactSkills.style.visibility = ""; 
          circleTwo.style.opacity ="100%";
          circleOne.style.opacity = "60%";
      } else if (introVisible != '' && aboutMeVisible != ''){
        intro.style.visibility = "hidden";
        aboutMe.style.visibility = "";
        contactSkills.style.visibility = "visible";
          circleTwo.style.opacity ="";
          circleOne.style.opacity = "60%";
          circleThree.style.opacity = "100%"
  } else {
        intro.style.visibility = "";
        aboutMe.style.visibility = "";
        contactSkills.style.visibility = "";
          circleTwo.style.opacity ="";
          circleOne.style.opacity = "";
          circleThree.style.opacity = "";
  }
})

const abbeyButton = document.getElementById("abbey-button");
const boothButton = document.getElementById("booth-button");
const greenpeaceButton = document.getElementById("greenpeace-button");
const kartButton = document.getElementById("kart-button");
const picContainer = document.getElementById("pic-container")


abbeyButton.onmouseover = function (){
  picContainer.style.backgroundImage = "url('./images/hotel-room-2022-11-16-22-05-53-utc.jpg')";
};
abbeyButton.onmouseleave = function (){
  picContainer.style.backgroundImage = "";
};

boothButton.onmouseover = function (){
  picContainer.style.backgroundImage = "url('./images/111b4076277005.5c64c075614c9.jpg')";
};

boothButton.onmouseleave = function (){
  picContainer.style.backgroundImage = "";
};

greenpeaceButton.onmouseover = function (){
  picContainer.style.backgroundImage = "url('./images/90656b78166525.5c9cb71b03d6b.jpg')";
};
greenpeaceButton.onmouseleave = function (){
  picContainer.style.backgroundImage = "";
};

kartButton.onmouseover = function (){
  picContainer.style.backgroundImage = "url('./images/a-karting-machine-vehicle-parked-near-racetrack-g-2022-11-16-18-41-42-utc.jpg')";
};
kartButton.onmouseleave = function (){
  picContainer.style.backgroundImage = "";
};
