let myImg = document.querySelector('img');

myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');

    if (mySrc == "assets/Firefox-logo.png") {
        myImg.setAttribute("src", "assets/Invide_logo.png");
    } else {
        myImg.setAttribute("src", "assets/Firefox-logo.png");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}