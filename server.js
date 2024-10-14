const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Destination for uploaded files

// Serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle ATS score calculation
app.post('/calculate-ats-score', upload.single('resumeFile'), (req, res) => {
    let resumeText = req.body.resumeInput;

    if (req.file) {
        const fileContent = fs.readFileSync(req.file.path, 'utf8'); // Read uploaded file
        resumeText += '\n' + fileContent; // Combine text from textarea and file
    }

    const score = calculateATSScore(resumeText);
    res.json({ score, feedback: getFeedback(score) });

    // Optionally delete the uploaded file after processing
    if (req.file) {
        fs.unlinkSync(req.file.path);
    }
});

// Function to calculate ATS score
function calculateATSScore(resumeText) {
    const keywords = ["JavaScript", "HTML", "CSS", "Python", "Java"]; // Example keywords
    let score = 0;

    keywords.forEach(keyword => {
        if (resumeText.includes(keyword)) {
            score += 20; // Increment score for each keyword found
        }
    });

    return score;
}

// Function to get feedback based on the score
function getFeedback(score) {
    if (score >= 80) {
        return "Great job! Your resume is highly compatible with ATS.";
    } else if (score >= 50) {
        return "Your resume is moderately compatible. Consider adding more keywords.";
    } else {
        return "Your resume may not perform well with ATS. It's recommended to revise it.";
    }
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
