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

//home/suibscribepopup//
const popupForm = document.getElementById('popupForm');
const openPopupButton = document.getElementById('openPopupButton');
const closePopup = document.getElementById('closePopup');

openPopupButton.addEventListener('click', function() {
    popupForm.style.display = 'block';
});

closePopup.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = 'none';
    }
});

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for subscribing!');
    popupForm.style.display = 'none';
});

//restaurants/filter//
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('cuisine-filter');
    const restaurantCards = document.querySelectorAll('.restaurant-card');

    const savedFilter = localStorage.getItem('selectedCuisine');
    if (savedFilter) {
        filterSelect.value = savedFilter;
        applyFilter(savedFilter);
    }

    filterSelect.addEventListener('change', function() {
        const selectedCuisine = this.value;
        localStorage.setItem('selectedCuisine', selectedCuisine);
        applyFilter(selectedCuisine);
    });

    function applyFilter(cuisine) {
        restaurantCards.forEach(card => {
            const cuisineType = card.querySelector('p').textContent.toLowerCase();
            if (cuisine === 'all' || cuisineType.includes(cuisine)) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }
});

