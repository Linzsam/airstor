/*注释*/
//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gb-t100.jpg") {
    myImage.setAttribute("src", "images/modbus1.jpg");
  } else {
    myImage.setAttribute("src", "images/gb-t100.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if(!myName && !localStorage.getItem("name")){
    setUserName();
  } else if (myName){
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} is logged in !`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName} is logged in !`;
}

myButton.onclick = function () {
  setUserName();
};