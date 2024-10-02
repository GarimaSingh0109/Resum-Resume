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
