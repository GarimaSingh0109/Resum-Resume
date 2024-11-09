// Initialize skill coins in localStorage if not already set
if (!localStorage.getItem('skillCoins')) {
    localStorage.setItem('skillCoins', 0);
}

// Select the element to display the skill coins
const coinsdata = document.querySelector('#SkillCoins');

// Function to get skill coins from localStorage
const getSkillCoins = () => parseInt(localStorage.getItem('skillCoins'), 10);

// Function to update the displayed skill coins on the page
const updateCoinsDisplay = () => {
    coinsdata.textContent = getSkillCoins();
};

// Function to update skill coins in localStorage and refresh the display
const updateCoins = (newAmount) => {
    localStorage.setItem('skillCoins', newAmount);
    updateCoinsDisplay();
};

// Update the displayed skill coins when the page loads
updateCoinsDisplay();

// Listen for changes in localStorage across tabs/pages
window.addEventListener('storage', (event) => {
    if (event.key === 'skillCoins') {
        updateCoinsDisplay();
    }
});

// Handle form submission and display alert
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const jobRole = document.getElementById('jobRole').value;
    const resume = document.getElementById('resume').files[0];

    if (resume) {
        alert(`Your resume has been successfully uploaded and will appear on the Rating Board within 8 hours. Thank you!\nUsername: ${username}\nJob Role: ${jobRole}\nResume: ${resume.name}`);
    } else {
        alert('Please select a PDF file.');
    }
});

// Toggle rating board and my rating sections
const myratinghead = document.querySelector('.myrating');
const ratingboardhead = document.querySelector('.ratingboardhead');
const rating = document.querySelector('.rating');
const ratingboard = document.querySelector('.ratingboard');
ratingboard.style.display = 'none';

ratingboardhead.addEventListener('click', () => {
    rating.style.display = 'none';
    ratingboard.style.display = '';
    ratingboardhead.style.backgroundColor = 'gray';
    myratinghead.style.backgroundColor = 'blue';
});

myratinghead.addEventListener('click', () => {
    rating.style.display = '';
    ratingboard.style.display = 'none';
    myratinghead.style.backgroundColor = 'gray';
    ratingboardhead.style.backgroundColor = 'blue';
});

// Star rating functionality
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const stars = card.querySelectorAll('.star');
    let numstar = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            numstar = parseInt(star.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                const starIcon = s.querySelector('i');
                if (index < numstar) {
                    starIcon.classList.remove('fa-regular');
                    starIcon.classList.add('fa-solid');
                } else {
                    starIcon.classList.remove('fa-solid');
                    starIcon.classList.add('fa-regular');
                }
            });
        });
    });
});

// Update skill coins when submit buttons are clicked
const submitButtons = document.querySelectorAll('.submitbtn');
submitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.disabled) {
            const currentCoins = getSkillCoins();
            updateCoins(currentCoins + 5);
            button.disabled = true;
        }
    });
});

// Panel 2 logic for showing keywords based on job role
const keywords = {
    "Software Developer": ["JavaScript", "React", "Node.js", "API", "Agile", "Version Control"],
    "Data Analyst": ["SQL", "Python", "Excel", "Data Visualization", "Machine Learning", "Tableau"],
    "Graphic Designer": ["Adobe Photoshop", "Illustrator", "InDesign", "Branding", "Typography", "Creative Suite"]
};

function showKeywords() {
    if (getSkillCoins() < 5) {
        alert("You don't have enough Skill coins to use this feature!");
    } else {
        const role = document.getElementById("job-role").value;
        const suggestions = keywords[role] || [];
        const keywordDisplay = document.getElementById("keyword-suggestions");

        if (suggestions.length) {
            keywordDisplay.innerHTML = `
                <p><strong>Suggested Keywords:</strong><br><span id="keyword-text">${suggestions.join(", ")}</span></p>
                <button onclick="copyKeywords()">Copy</button>
            `;
            updateCoins(getSkillCoins() - 5); // Deduct 5 skill coins
        } else {
            keywordDisplay.innerHTML = "<p>No keywords available for this role.</p>";
        }
    }
}

function copyKeywords() {
    const keywordText = document.getElementById("keyword-text").innerText;
    navigator.clipboard.writeText(keywordText)
        .then(() => alert("Keywords copied to clipboard!"))
        .catch(err => console.error("Failed to copy keywords:", err));
}
