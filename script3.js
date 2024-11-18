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


//profile/modal//
function openModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
    setTimeout(() => {
        modal.classList.add("open");
        modal.classList.remove("close");
    }, 10);
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("close");
    modal.classList.remove("open");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function saveProfile() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const bio = document.getElementById("bioInput").value.trim();

    if (!name || !email || !bio) {
        alert("All fields are required!");
        return;
    }

    document.getElementById("profileName").textContent = name;
    document.getElementById("profileEmail").textContent = email;
    document.getElementById("profileBio").textContent = bio;

    if (name !== "Michael Kaiser") {
        document.getElementById("profilePhoto").src = "media/profilephoto.jpg"; //default pfp
    } else {
        document.getElementById("profilePhoto").src = "media/kaiser.jpg"; //kaiser
    }

    closeModal();
}

document.addEventListener("click", function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        const modal = document.getElementById("modal");
        if (modal.style.display === "flex") {
            closeModal();
        }
    }
});

//login/audio//
const clickSound = document.getElementById('click-sound');
const soundButton = document.getElementById('sound-button');
soundButton.addEventListener('click', () => {
    clickSound.play();
});
