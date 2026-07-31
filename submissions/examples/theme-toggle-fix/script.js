const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            toggleButton.textContent = 'Switch to Dark Mode';
        } else {
            toggleButton.textContent = 'Switch to Light Mode';
        }
    });
}
