const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/keyaru.jpg") {
        myImage.setAttribute("src", "images/sexy.jpg");
        myImage.setAttribute("width", "210px");
    } else {
        myImage.setAttribute("src", "images/keyaru.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Keyaru is OP, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Keyaru is OP, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};