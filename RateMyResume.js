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

// JavaScript Logic
function toggleStar(star) {
  // Check if the star is already solid
  if (star.classList.contains("fa-solid")) {
    star.classList.remove("fa-solid");
    star.classList.add("fa-regular");
  } else {
    star.classList.remove("fa-regular");
    star.classList.add("fa-solid");
  }
}
