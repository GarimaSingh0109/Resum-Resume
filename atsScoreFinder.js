// atsScoreFinder.js

function calculateATSScore(resumeText, jobDescription) {
    const resumeKeywords = resumeText.split(/\W+/).map(word => word.toLowerCase());
    const jobKeywords = jobDescription.split(/\W+/).map(word => word.toLowerCase());

    const matchedKeywords = resumeKeywords.filter(word => jobKeywords.includes(word));
    const score = (matchedKeywords.length / jobKeywords.length) * 100;

    return score;
}

function analyzeFormatting(resumeText) {
    const feedback = [];
    const lines = resumeText.split('\n');

    if (lines.length < 3) {
        feedback.push("Resume should have at least 3 lines.");
    }
    if (resumeText.length < 300) {
        feedback.push("Resume is too short; consider adding more content.");
    }

    return feedback;
}

module.exports = { calculateATSScore, analyzeFormatting };
