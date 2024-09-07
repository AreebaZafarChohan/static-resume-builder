document.addEventListener('DOMContentLoaded', function () {
    // Select the theme switcher button
    var themeSwitcher = document.getElementById('themeSwitcher');
    // Check if the button exists
    if (themeSwitcher) {
        // Add an event listener to toggle the theme
        themeSwitcher.addEventListener('click', function () {
            // Toggle the 'theme-dark' class on the body
            document.body.classList.toggle('theme-dark');
        });
    }
});
