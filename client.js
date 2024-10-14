// ATS Score Calculation Functionality
document.getElementById('atsForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const resumeInput = document.getElementById('resumeInput').value;
    const resumeFile = document.getElementById('resumeFile').files[0];

    let resumeText = resumeInput;

    if (resumeFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const fileContent = e.target.result;
            // Here you could extract text from the file
            resumeText = fileContent; // For demo purposes, directly use file content
            calculateATSScore(resumeText);
        };
        reader.readAsText(resumeFile);
    } else {
        calculateATSScore(resumeText);
    }
});

function calculateATSScore(resumeText) {
    // Sample ATS score calculation logic
    const keywords = ["JavaScript", "HTML", "CSS", "Python", "Java"]; // Example keywords
    let score = 0;

    keywords.forEach(keyword => {
        if (resumeText.includes(keyword)) {
            score += 20; // Increment score for each keyword found
        }
    });

    // Display the result
    document.getElementById('score').innerText = `${score}/100`;
    document.getElementById('feedback').innerText = getFeedback(score);
    document.getElementById('atsResult').style.display = 'block';
}

function getFeedback(score) {
    if (score >= 80) {
        return "Great job! Your resume is highly compatible with ATS.";
    } else if (score >= 50) {
        return "Your resume is moderately compatible. Consider adding more keywords.";
    } else {
        return "Your resume may not perform well with ATS. It's recommended to revise it.";
    }
}
