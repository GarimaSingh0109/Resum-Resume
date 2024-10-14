// test.js

const { calculateATSScore } = require('./atsScoreFinder');

const resumeText = "Experienced software engineer with a strong background in JavaScript and web development. Proficient in React, Node.js, and agile methodologies. Excellent problem-solving skills and a passion for technology.";
const jobDescription = "We are looking for a software engineer with experience in JavaScript and React. The ideal candidate should have strong problem-solving skills and experience in agile methodologies.";

const score = calculateATSScore(resumeText, jobDescription);
console.log(`ATS Score: ${score.toFixed(2)}%`);  
