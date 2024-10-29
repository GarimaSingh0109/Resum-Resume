document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents form submission to a backend
    
    const username = document.getElementById('username').value;
    const jobRole = document.getElementById('jobRole').value;
    const resume = document.getElementById('resume').files[0];

    if (resume) {
        alert(`Your resume has been successfully uploaded and will appear on the Rating Board within 8 hours. Thank you!\nUsername: ${username}\nJob Role: ${jobRole}\nResume: ${resume.name}`);
    } else {
        alert('Please select a PDF file.');
    }
});

const myratinghead = document.querySelector('.myrating');
const ratingboardhead = document.querySelector('.ratingboardhead');
const rating = document.querySelector('.rating');
const ratingboard = document.querySelector('.ratingboard');
ratingboard.style.display = 'none';

ratingboardhead.addEventListener('click',()=>{
    rating.style.display = 'none';
    ratingboard.style.display = '';
    ratingboardhead.style.backgroundColor = 'gray';
    myratinghead.style.backgroundColor = 'blue';
})

myratinghead.addEventListener('click',()=>{
    rating.style.display = '';
    ratingboard.style.display = 'none';
    myratinghead.style.backgroundColor = 'gray';
    ratingboardhead.style.backgroundColor = 'blue';
})

// JavaScript to handle star rating functionality
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const stars = card.querySelectorAll('.star');
    let numstar = 0;

    // Loop through each star and add event listeners
    stars.forEach(star => {
        star.addEventListener('click', () => {
            // Set the rating based on the data-rating attribute
            numstar = parseInt(star.getAttribute('data-rating'));

            // Update star icons based on the selected rating
            stars.forEach((s, index) => {
                const starIcon = s.querySelector('i');
                if (index < numstar) {
                    starIcon.classList.remove('fa-regular'); // Remove empty star
                    starIcon.classList.add('fa-solid');      // Add filled star
                } else {
                    starIcon.classList.remove('fa-solid');    // Remove filled star
                    starIcon.classList.add('fa-regular');     // Add empty star
                }
            });
        });
    });
});

let skillcoins = 0;
const coinsdata = document.querySelector('#SkillCoins');

const updateCoins = () => {
    coinsdata.textContent = skillcoins;
};
updateCoins();

const submitButtons = document.querySelectorAll('.submitbtn');
submitButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.disabled != true){
            skillcoins += 5;
            updateCoins();
            button.disabled = true; // Disable the button after it’s clicked
        }
    });
});

