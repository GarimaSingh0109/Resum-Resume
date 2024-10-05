const toggleSwitch = document.getElementById('dark-mode-toggle');

// Check for saved user preference in local storage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
    toggleSwitch.checked = currentTheme === 'dark';
}

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let comments = [];

app.use(cors());
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body.comment;
    comments.push(newComment);
    res.status(201).json(newComment);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsDiv = document.getElementById('comments');

    // Load comments from the server
    fetch('http://localhost:3000/comments')
        .then(response => response.json())
        .then(comments => {
            comments.forEach(comment => {
                const div = document.createElement('div');
                div.textContent = comment;
                commentsDiv.appendChild(div);
            });
        });

    // Handle form submission
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const comment = commentInput.value;

        fetch('http://localhost:3000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment })
        })
        .then(response => response.json())
        .then(newComment => {
            const div = document.createElement('div');
            div.textContent = newComment;
            commentsDiv.appendChild(div);
            commentInput.value = ''; // Clear the input
        });
    });
    
});

        
// var typed = new Typed('#newlogo', {
//     strings: ['EnhanCV.'],
//     typeSpeed: 50,
// });
       
  

        
       
  
