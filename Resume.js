
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
    const stepone = document.querySelector('.form-container')

    if (!name || !profile || !email || !contact || !location) {
        alert('Please fill out all required fields in Step 1.');
        return;
    }
    stepone.style.display = 'none';
    step1p.querySelector('.circle').textContent = '✓';
    line1.style.backgroundColor = '#007bff'
    step2p.classList.add('active');
    showStep(2);
});

// card color change when click on card
const basicCard = document.querySelector('#basic');
const classicCard = document.querySelector('#classic');
const modernCard = document.querySelector('#modern');
basicCard.addEventListener('click',()=>{
    basicCard.style.backgroundColor = '#ADD8E6';
    classicCard.style.backgroundColor = '#f4f4f4';
    modernCard.style.backgroundColor = '#f4f4f4';
});
classicCard.addEventListener('click',()=>{
    basicCard.style.backgroundColor = '#f4f4f4';
    classicCard.style.backgroundColor = '#ADD8E6';
    modernCard.style.backgroundColor = '#f4f4f4';
});
modernCard.addEventListener('click',()=>{
    basicCard.style.backgroundColor = '#f4f4f4';
    classicCard.style.backgroundColor = '#f4f4f4';
    modernCard.style.backgroundColor = '#ADD8E6';
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

    const educationEntries = collectEducationData();
    const experienceEntries = collectExperienceData();
    const projectEntries = collectProjectData();

    // Generate resume HTML based on the selected template
    const resumeContent = generateResumeHTML(name, profile, email, contact, location, educationEntries, experienceEntries, projectEntries, selectedTemplate);
    
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
    const education = collectEducationData();
    const experience = collectExperienceData();
    const projects = collectProjectData();
    
    return {
        name,
        profile,
        email,
        contact,
        location,
        education,
        experience,
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

function collectProjectData() {
    return Array.from(document.querySelectorAll('.project-entry')).map(entry => ({
        title: entry.querySelector('input[placeholder="Enter project title"]').value,
        description: entry.querySelector('textarea[placeholder="Describe the project"]').value,
        responsibilities: entry.querySelector('textarea[placeholder="Describe your role"]').value,
        link: entry.querySelector('input[placeholder="Enter project link"]').value,
    }));
}

// Function to generate resume HTML based on selected template
function generateResumeHTML(name, profile, email, contact, location, educationEntries, experienceEntries, projectEntries, template) {
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

    let projectHTML = projectEntries.map(proj => `
        <div>
            <strong>${proj.title}</strong><br>
            <p>${proj.description}</p>
            <em>${proj.responsibilities}</em><br>
            <a href="${proj.link}" target="_blank">Project Link</a>
        </div>
    `).join('');

    return `
        <h1>${name}</h1>
        <p>${profile}</p>
        <p>Email: ${email} | Contact: ${contact} | Location: ${location}</p>
        <h2>Education</h2>
        ${educationHTML}
        <h2>Experience</h2>
        ${experienceHTML}
        <h2>Projects</h2>
        ${projectHTML}
    `;
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
        margin: 0.5,                    // Margin in inches
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


