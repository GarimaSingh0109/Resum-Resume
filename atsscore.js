// Function to calculate the ATS score based on job description and resume
function calculateATSScore(jobDescription, resumeText) {
    // Normalize text by converting to lowercase to ensure case-insensitive matching
    const jobDescriptionLower = jobDescription.toLowerCase();
    const resumeTextLower = resumeText.toLowerCase();

    // Split the text into arrays of words using space or comma as separators
    const jobKeywords = jobDescriptionLower.split(/[\s,]+/); // Keywords from job description
    const resumeWords = resumeTextLower.split(/[\s,]+/); // Words from resume

    // Count how many keywords from the job description appear in the resume
    let matchCount = 0;
    jobKeywords.forEach(keyword => {
        if (resumeWords.includes(keyword)) {
            matchCount++;
        }
    });

    // Calculate the percentage match as the ATS score
    const score = (matchCount / jobKeywords.length) * 100;
    return Math.round(score * 100) / 100; // Round the score to two decimal places
}

// Function to provide feedback based on the ATS score
function displayFeedback(score) {
    if (score === 100) {
        return "Excellent! Your resume is highly compatible with the job description.";
    } else if (score >= 75) {
        return "Good job! Your resume is quite compatible, but consider adding more relevant keywords.";
    } else if (score >= 50) {
        return "Fair. Your resume needs improvement. Focus on including more keywords from the job description.";
    } else {
        return "Low compatibility. Revise your resume to better match the job description.";
    }
}

// Main function to handle form submission
document.getElementById("analyze-button").addEventListener("click", function() {
    const jobDescription = document.getElementById("job-description").value;
    const resumeText = document.getElementById("resume-text").value;

    if (jobDescription && resumeText) {
        const atsScore = calculateATSScore(jobDescription, resumeText);
        const feedback = displayFeedback(atsScore);

        document.getElementById("score").innerText = atsScore + "%";
        document.getElementById("feedback").innerText = feedback;
    } else {
        document.getElementById("feedback").innerText = "Please enter both the job description and resume.";
    }
});
