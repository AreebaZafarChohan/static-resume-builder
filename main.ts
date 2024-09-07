document.addEventListener('DOMContentLoaded', () => {
    // Select the theme switcher button
    const themeSwitcher = document.getElementById('themeSwitcher') as HTMLButtonElement;

    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', () => {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
});