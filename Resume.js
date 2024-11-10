
// logic for progress Bar
const step = document.querySelectorAll('.step'); //progress bar step class
const step1p = document.querySelector('.step1p'); //progress bar step class
const step2p = document.querySelector('.step2p'); //progress bar step class
const step3p = document.querySelector('.step3p'); //progress bar step class
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const nextstep1 = document.querySelector('#next-step');
const nextstep2 = document.querySelector('#next-step-2');
const prevstep2 = document.querySelector('#prev-step-2');
const prevstep3 = document.querySelector('#prev-step-3');
let selecttemp = 0;

// Dynamically adding more Education sections
document.getElementById('add-education').addEventListener('click', function() {
    const educationFields = document.getElementById('education-fields');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = `
        <label>Institute:</label>
        <input type="text" placeholder="Enter institute name">

        <label>Course:</label>
        <input type="text" placeholder="Enter course name">

        <label>Start Year:</label>
        <input type="text" placeholder="Start Year">

        <label>End Year:</label>
        <input type="text" placeholder="End Year">

        <label>Score/Grade:</label>
        <input type="text" placeholder="Score/Grade">
    `;
    educationFields.appendChild(newEducation);
});

// Dynamically adding more Job Experience sections
document.getElementById('add-experience').addEventListener('click', function() {
    const experienceFields = document.getElementById('experience-fields');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-entry');
    newExperience.innerHTML = `
    <div class="expLeft">
        <label>Job Position:</label>
        <input type="text" placeholder="Enter job position">

        <label>Company Name:</label>
        <input type="text" placeholder="Enter company name">

        <label>Start Year:</label>
        <input type="text" placeholder="Start Year">

        <label>End Year:</label>
        <input type="text" placeholder="End Year">
    </div>
    <div class="expRight">
        <label>Description:</label>
        <textarea id="expdes" placeholder="Describe your job experience"></textarea>
    </div>
    `;
    experienceFields.appendChild(newExperience);
});

// Dynamically adding more Achivements sections
document.getElementById('add-achivement').addEventListener('click', function() {
    const achiveFields = document.querySelector('.achive');
    const newAchive = document.createElement('div');
    newAchive.classList.add('achive-entry');
    newAchive.innerHTML = `
    <div class="achiveLeft">
        <label>Heading:</label>
        <input type="text" placeholder="e.g., Best Employee of the Year">
    </div>
    <div class="achiveRight">
        <label>Description:</label>
        <textarea placeholder="Describe your achievement or certification"></textarea>
    </div>
    `;
    achiveFields.appendChild(newAchive);
});

// Dynamically adding more Projects
document.getElementById('add-project').addEventListener('click', function() {
    const projectFields = document.getElementById('project-fields');
    const newProject = document.createElement('div');
    newProject.classList.add('project-entry');
    newProject.innerHTML = `
    <div class="projectLeft">
        <label>Project Title:</label>
        <input type="text" placeholder="Enter project title">

        <label>Role/Responsibilities:</label>
        <textarea placeholder="Describe your role"></textarea>

        <label>Link (Optional):</label>
        <input type="url" placeholder="Enter project link">
    </div>
    <div class="projectRight">
        <label>Description:</label>
        <textarea id="projectdesc" placeholder="Describe the project"></textarea>
    </div>
    `;
    projectFields.appendChild(newProject);
});

// Step 2 JavaScript
let selectedTemplate = '';

// Function to select a template
function selectTemplate(templateName) {
    selectedTemplate = templateName;
    console.log("Selected Template: ", selectedTemplate);
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.querySelector(`[onclick="selectTemplate('${templateName}')"]`).classList.add('selected');
    document.getElementById('next-step-2').disabled = false;
}

// Show and hide step sections
function showStep(stepNumber) {
    document.querySelectorAll('.step-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(`step-${stepNumber}`).style.display = 'block';
}

// Initialize the process
document.addEventListener("DOMContentLoaded", function() {
    showStep(1);
});

// Proceed to next step with validation
document.getElementById('next-step').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const profile = document.getElementById('profile').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const location = document.getElementById('location').value.trim();
    const skills = document.getElementById('skillsinput').value.trim();
    const stepone = document.querySelector('.form-container')

    if (!name || !profile || !email || !contact || !location || !skills) {
        alert('Please fill out all required fields in Step 1.');
        return;
    }
    stepone.style.display = 'none';
    step1p.querySelector('.circle').textContent = '✓';
    line1.style.backgroundColor = '#007bff'
    step2p.classList.add('active');
    showStep(2);
});

const coinsdata = document.querySelector('#SkillCoins'); // Element to display skill coins

// Function to get skill coins from localStorage
const getSkillCoins = () => parseInt(localStorage.getItem('skillCoins'), 10) || 0;

// Function to update skill coins in localStorage and display
const updateCoins = (newAmount) => {
    localStorage.setItem('skillCoins', newAmount);
    updateCoinsDisplay();
};

// Function to update the displayed skill coins on the page
const updateCoinsDisplay = () => {
    coinsdata.textContent = getSkillCoins();
};

// Call updateCoinsDisplay on page load
updateCoinsDisplay();

// Card color change when clicked
const basicCard = document.querySelector('#basic');
const classicCard = document.querySelector('#classic');
const modernCard = document.querySelector('#modern');
const developerCard = document.querySelector('#developer');

basicCard.addEventListener('click', () => {
    basicCard.style.backgroundColor = '#ADD8E6';
    classicCard.style.backgroundColor = '#f4f4f4';
    modernCard.style.backgroundColor = '#f4f4f4';
    developerCard.style.backgroundColor = '#f4f4f4';
    selecttemp = 1;
});

classicCard.addEventListener('click', () => {
    basicCard.style.backgroundColor = '#f4f4f4';
    classicCard.style.backgroundColor = '#ADD8E6';
    modernCard.style.backgroundColor = '#f4f4f4';
    developerCard.style.backgroundColor = '#f4f4f4';
    selecttemp = 2;
});

modernCard.addEventListener('click', () => {
    basicCard.style.backgroundColor = '#f4f4f4';
    classicCard.style.backgroundColor = '#f4f4f4';
    modernCard.style.backgroundColor = '#ADD8E6';
    developerCard.style.backgroundColor = '#f4f4f4';
    selecttemp = 3;
});

// Premium Template Logic
const coinicon = document.querySelector('#coinicon');
const getpremium = document.querySelector('#getpremium');

getpremium.addEventListener('click', () => {
    if (getSkillCoins() < 10) {
        alert("You don't have enough Skill coins to use this template!");
    } else {
        // Deduct coins and update display
        updateCoins(getSkillCoins() - 10);

        // Enable the developer card selection
        developerCard.addEventListener('click', () => {
            basicCard.style.backgroundColor = '#f4f4f4';
            classicCard.style.backgroundColor = '#f4f4f4';
            modernCard.style.backgroundColor = '#f4f4f4';
            developerCard.style.backgroundColor = '#ADD8E6';
            selecttemp = 4;
        });

        // Hide coin icon and premium button once premium template is unlocked
        coinicon.style.display = 'none';
        getpremium.style.display = 'none';
    }
});



// Handle previous step button for Step 2
document.getElementById('prev-step-2').addEventListener('click', function() {
    const stepone = document.querySelector('.form-container')
    stepone.style.display = '';
    line1.style.backgroundColor = 'lightgray'
    step1p.querySelector('.circle').textContent = '1';
    step2p.classList.remove('active');
    showStep(1);
});

// Generate Resume
document.getElementById('next-step-2').addEventListener('click', function() {
    if (!selectedTemplate) {
        alert('Please select a resume template.');
        return;
    }

    // Capture data from Step 1
    const name = document.getElementById('name').value.trim();
    const profile = document.getElementById('profile').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const location = document.getElementById('location').value.trim();
    const githubid = document.getElementById('githubid').value.trim();
    const skills = document.getElementById('skillsinput').value.trim();
    const educationEntries = collectEducationData();
    const experienceEntries = collectExperienceData();
    const achiveEntries = collectAchiveData();
    const projectEntries = collectProjectData();

    // Generate resume HTML based on the selected template
    const resumeContent = generateResumeHTML(name, profile, email, contact, location, githubid, skills, educationEntries, experienceEntries, achiveEntries, projectEntries, selectedTemplate);
    
    document.getElementById('resume-display').innerHTML = resumeContent;
    step2p.querySelector('.circle').textContent = '✓';
    line2.style.backgroundColor = '#007bff'
    step3p.classList.add('active');
    showStep(3);
});

// Collect data from Step 1 and Step 2
function collectResumeData() {
    const name = document.getElementById('name').value.trim();
    const profile = document.getElementById('profile').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const location = document.getElementById('location').value.trim();
    const githubid = document.getElementById('githubid').value.trim();
    const skills = document.getElementById('skillsinput').value.trim();
    const education = collectEducationData();
    const experience = collectExperienceData();
    const achive = collectAchiveData();
    const projects = collectProjectData();
    
    return {
        name,
        profile,
        email,
        contact,
        location,
        githubid,
        skills,
        education,
        experience,
        achive,
        projects,
        template: selectedTemplate
    };
}

// Functions to collect education, experience, and project data
function collectEducationData() {
    return Array.from(document.querySelectorAll('.education-entry')).map(entry => ({
        institute: entry.querySelector('input[placeholder="Enter institute name"]').value,
        course: entry.querySelector('input[placeholder="Enter course name"]').value,
        startYear: entry.querySelector('input[placeholder="Start Year"]').value,
        endYear: entry.querySelector('input[placeholder="End Year"]').value,
        score: entry.querySelector('input[placeholder="Score/Grade"]').value,
    }));
}

function collectExperienceData() {
    return Array.from(document.querySelectorAll('.experience-entry')).map(entry => ({
        jobPosition: entry.querySelector('input[placeholder="Enter job position"]').value,
        companyName: entry.querySelector('input[placeholder="Enter company name"]').value,
        startYear: entry.querySelector('input[placeholder="Start Year"]').value,
        endYear: entry.querySelector('input[placeholder="End Year"]').value,
        description: entry.querySelector('textarea[placeholder="Describe your job experience"]').value,
    }));
}

function collectAchiveData() {
    return Array.from(document.querySelectorAll('.achive-entry')).map(entry => ({
        heading: entry.querySelector('input[placeholder="e.g., Best Employee of the Year"]').value,
        description: entry.querySelector('textarea[placeholder="Describe your achievement or certification"]').value,
    }));
}

function collectProjectData() {
    return Array.from(document.querySelectorAll('.project-entry')).map(entry => ({
        title: entry.querySelector('input[placeholder="Enter project title"]').value,
        description: entry.querySelector('textarea[placeholder="Describe the project"]').value,
        responsibilities: entry.querySelector('textarea[placeholder="Describe your role"]').value,
        link: entry.querySelector('input[placeholder="Enter project link"]').value,
    }));
}

// Declare global variables to store fetched data
let followers = 0;
let following = 0;
let totalRepos = 0;
let totalStars = 0;
let topRepos = [];
let languagePercentages = [];

// Fetch data from the user's GitHub username
const gitusername = document.getElementById('githubid')
async function fetchGitHubData(gitusername) {
    const userUrl = `https://api.github.com/users/${gitusername}`;
    const reposUrl = `https://api.github.com/users/${gitusername}/repos`;

    try {
        const userDataResponse = await fetch(userUrl);
        const userData = await userDataResponse.json();

        const reposDataResponse = await fetch(reposUrl);
        const reposData = await reposDataResponse.json();

        if (userData.message === "Not Found") {
            return { error: "User not found!" };
        }

        // Extract data and assign to global variables
        followers = userData.followers;
        following = userData.following;
        totalRepos = userData.public_repos;

        // Total Stars Earned
        totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        // Top 5 Repos by Stars
        topRepos = reposData
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 5)
            .map(repo => ({ name: repo.name, stars: repo.stargazers_count }));

        // Languages used and their counts
        const languageCounts = {};
        reposData.forEach(repo => {
            if (repo.language) {
                languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
            }
        });

        // Calculate percentages
        const totalRepoCount = reposData.length;
        languagePercentages = Object.keys(languageCounts).map(language => {
            const count = languageCounts[language];
            return {
                language,
                percentage: ((count / totalRepoCount) * 100).toFixed(2), // Calculate percentage
            };
        });

        // Sort languages by count in descending order
        languagePercentages.sort((a, b) => b.percentage - a.percentage);

        // Return collected data
        return {
            followers,
            following,
            totalRepos,
            totalStars,
            topRepos,
            languagePercentages, // Return sorted language percentages
        };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return { error: "Error fetching data. Please try again." };
    }
}
// Function to initiate fetching and logging data
async function init() {
    const username = "mohitranag18"; // Replace with the actual username
    const data = await fetchGitHubData(username);
}
// Call the init function
init();

// Function to generate resume HTML based on selected template
function generateResumeHTML(name, profile, email, contact, location, githubid, skills, educationEntries, experienceEntries, achiveEntries, projectEntries, template) {
    let educationHTML = educationEntries.map(edu => `
        <div>
            <strong>${edu.institute}</strong> (${edu.startYear} - ${edu.endYear})<br>
            <em>${edu.course}</em><br>
            <span>Score: ${edu.score}</span>
        </div>
    `).join('');

    let experienceHTML = experienceEntries.map(exp => `
        <div>
            <strong>${exp.jobPosition}</strong> at ${exp.companyName} (${exp.startYear} - ${exp.endYear})<br>
            <p>${exp.description}</p>
        </div>
    `).join('');

    let achiveHTML = achiveEntries.map(achi => `
        <div>
            <strong>${achi.heading}</strong><br>
            <p>${achi.description}</p>
        </div>
    `).join('');

    let projectHTML = projectEntries.map(proj => `
        <div>
            <strong>${proj.title}</strong><br>
            <p>${proj.description}</p>
            <em>${proj.responsibilities}</em><br>
            <a href="${proj.link}" target="_blank">Project Link</a>
        </div>
    `).join('');

 // which template will show in review logic
 if(selecttemp === 1){
    return `
        <h1>${name}</h1>
        <p>${profile}</p>
        <p>Email: ${email} | Contact: ${contact} | Location: ${location} | Github: ${githubid}</p>
        <br>
        <p><b>Skills:</b> ${skills}</>
        <h2>Education</h2>
        ${educationHTML}
        <h2>Experience</h2>
        ${experienceHTML}
        <h2>Achievements and Certifications</h2>
        ${achiveHTML}
        <h2>Projects</h2>
        ${projectHTML}
    `;
}
else if(selecttemp === 2){
    return `
        <div class="resume classic">
        <h1 id="name">${name}</h1>
        <div class="resumemain">
            <div class="resumeleft">
                <p id="profile">${profile}</p>
                <h2>Contact Information</h2>
                <p>Email: <span id="email">${email}</span></p>
                <p>Contact No: <span id="contact">${contact}</span></p>
                <p>Github: <span id="githubid">${githubid}</span></p>
                <p>Location: <span id="location">${location}</span></p>
                <h2>Skills</h2>
                <p id="skills">${skills}</p>
                <h2>Education</h2>
                <div id="education">
                ${educationHTML}
                </div>
            </div>
            <div class="linetemp"></div>
            <div class="resumeright">
                <h2>Experience</h2>
                <div id="experience">
                ${experienceHTML}
                </div>
        
                <h2>Achievements and Certifications</h2>
                <div id="achievements">
                ${achiveHTML}
                </div>
        
                <h2>Projects</h2>
                <div id="projects">
                ${projectHTML}
                </div>
            </div>
        </div>
    </div>
    <style>
    #profile{
        height: auto;
    }
    #resume-display h2{
        margin: 0px 0 5px;
    }
    .classic{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .resume.classic{
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
    .resumemain{
        display: flex;
        justify-content: space-between;
    }
    .resumeleft{
        width: 40%;
    }
    .resumeright{
        width: 40%;
    }
    .linetemp{
        height: 100%;
        width: 3px;
        background-color: gray;
    }
    </style>
    `;
}
else if(selecttemp ===3){
    return `
    <div class="resume modern">
        <h1 id="name">${name}</h1>
        <p id="profile">${profile}</p>
        <h2>Contact Information</h2>
        <p><i class="fa-solid fa-envelope"></i> Email: <span id="email">${email}</span></p>
        <p><i class="fa-solid fa-address-book"></i> Contact No: <span id="contact">${contact}</span></p>
        <p><i class="fa-brands fa-github"></i> Github: <span id="contact">${githubid}</span></p>
        <p><i class="fa-solid fa-location-dot"></i> Location: <span id="location">${location}</span></p>
        
        <h2>Education</h2>
        <div id="education">
        ${educationHTML}
        </div>

        <h2>Skills</h2>
        <p id="skills">${skills}</p>

        <h2>Experience</h2>
        <div id="experience">
        ${experienceHTML}
        </div>

        <h2>Achievements and Certifications</h2>
        <div id="achievements">
        ${achiveHTML}
        </div>

        <h2>Projects</h2>
        <div id="projects">
        ${projectHTML}
        </div>
    </div>
    <style>
        h1, h2 {
            color: #333;
        }

        h1 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
        }

        h2 {
            margin-top: 20px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 5px;
        }

        p {
            margin: 5px 0;
        }
        #profile{
            height: auto;
        }
        #resume-display h2{
            margin: 0px 0 5px;
        }
    </style>
    `;
}
else if(selecttemp === 4){
    return `
    <div class="resume">
        <div class="persnalinfo">
            <div class="namepro">
                <h2>${name}</h2>
                <p>${profile}</p>
            </div>
            <div class="nameline"></div>
            <div class="contactinfo">
                <h2>Contact Info</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact No:</strong> ${contact}</p>
                <p><strong>Location:</strong> ${location}</p>
            </div>
        </div>
        <div class="gitdata">
            <h3><i class="fa-brands fa-github"></i> ${githubid}</h3>
            <ul class="ul">
                <li><strong>${followers}</strong> Followers</li>
                <li><strong>${following}</strong> Following</li>
                <li><strong>${totalRepos}</strong> Repos</li>
                <li><strong>${totalStars}</strong> Star Earned</li>
            </ul>
            <h4>Most used Lang.</h4>
            <ul>
            ${languagePercentages.map(lang => `<li>${lang.language}: ${lang.percentage}%</li>`).join("")}
            </ul>
            <h4>Top 5 Repos</h4>
            <ul>
            ${topRepos.map(repo => `<li>${repo.name} - <i class="fa-regular fa-star"></i> ${repo.stars}</li>`).join("")}
            </ul>
        </div>
        <div class="skilldata">
            <h2>Skills</h2>
            <p>${skills}</p>
        </div>
        <div class="educationandexp">
            <div class="educationinfo">
                <h2>Education</h2>
                <div id="education">
                ${educationHTML}
                </div>
            </div>
            <div class="eduline"></div>
            <div class="experience">
                <h2>Experience</h2>
                <div id="experience">
                ${experienceHTML}
                </div>
            </div>
        </div>
    </div>
    <style>
        .resume{
            margin: 0;
            position: relative;
            color: #333;
        }
        .persnalinfo{
            background-color: rgb(227, 227, 227);
            padding: 2rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: auto;
            display: flex;
            position: relative;
            justify-content: space-between;
            border-radius: 2rem;
        }
        .namepro{
            width: 45%;
            text-align: left;
        }
        .nameline{
            background-color: #333;
            width: 2px;
            height: auto;
        }
        .contactinfo{
            width: 45%;
            text-align: left;
        }
        .gitdata{
            background-color: rgb(227, 227, 227);
            padding: 2rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: auto;
            border-radius: 2rem;
            margin-top: 1rem;
        }
        .ul{
            display: flex;
            gap: 5rem;
            flex-wrap: wrap;
        }
        ul{
            list-style-type: none;
        }
        .skilldata{
            background-color: rgb(227, 227, 227);
            padding: 2rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            height: auto;
            border-radius: 2rem;
            margin-top: 1rem;
        }
        .educationandexp{
            min-height: 15rem;
            display: flex;
            justify-content: space-between;
            position: relative;
            margin-top: 1rem;
            background-color: rgb(227, 227, 227);
            border-radius: 2rem;
            padding: 2rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }
        .educationinfo{
            width: 45%;
            height: 100%;
            
        }
        .eduline{
            background-color: #333;
            width: 2px;
            height: auto;
        }
        .experience{
            width: 45%;
            height: 100%;
            text-align: left;
        }
    </style>
    `;
}
    
}
    

// Review resume on Step 3
document.getElementById('prev-step-3').addEventListener('click', function() {
    line2.style.backgroundColor = 'lightgray'
    step3p.classList.remove('active');
    step2p.querySelector('.circle').textContent = '2';
    step3p.querySelector('.circle').textContent = '3';
    showStep(2);
});

document.getElementById('download-resume').addEventListener('click', function() {
    // Select the resume element
    const resumeElement = document.getElementById('resume-display');

    // Set PDF options for better fitting and styling
    const options = {
        margin: 0.2,                    // Margin in inches
        filename: 'resume.pdf',         // Filename
        image: { type: 'jpeg', quality: 0.98 },  // Image quality
        html2canvas: { scale: 2 },      // Higher scale for better quality
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }  // A4 size PDF
    };

    // Generate and download the PDF
    html2pdf().from(resumeElement).set(options).save();
    step3p.querySelector('.circle').textContent = '✓';
});



document.getElementById('reset').addEventListener('click', function() {
    location.reload();
});