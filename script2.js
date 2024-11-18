//background//
const photos = [
    "media/bg1.png",
    "media/bg2.png",
    "media/bg3.png",
    "media/bg4.png",
    "media/bg5.png"
];

let currentIndex = parseInt(localStorage.getItem('currentBackgroundIndex')) || 0;

function updateBackground() {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.style.setProperty('--background-image', `url(${photos[currentIndex]})`);
    } else {
        document.documentElement.style.setProperty('--background-image', 'none');
    }
}

function changeBackground() {
    currentIndex = (currentIndex + 1) % photos.length; 
    localStorage.setItem('currentBackgroundIndex', currentIndex); 
    updateBackground();
}

/**
 * Обновляет тему.
 * @param {string} theme - Новая тема ('dark' или 'light').
 */
function updateTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme); 
    localStorage.setItem('theme', theme); 
    updateBackground();
}

document.addEventListener('DOMContentLoaded', () => {

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme); 
    updateBackground(); 
});

const themeToggleButton = document.querySelector('[data-theme-toggle]');
themeToggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    updateTheme(newTheme);

    const buttonText = newTheme === 'dark' ? "DarkTheme" : "LightTheme";
    themeToggleButton.textContent = buttonText;
});

//help/sound//
const clickSound = document.getElementById('click-sound');
const soundButton = document.getElementById('sound-button');
soundButton.addEventListener('click', () => {
    clickSound.play();
});

//help/invisibletxt//
let faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
        let answer = this.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

//help/form//
document.querySelector('form').addEventListener('submit', function (event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required.");
        event.preventDefault();
    } else if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else {
        alert("Your request is under consideration")
    }
});

//menu/datetime//
function displayDateTime() {
    let now = new Date();
    let dateTime = now.toLocaleString();
    document.getElementById('dateTime').innerText = "Menu last updated on: " + dateTime;
}
displayDateTime();

