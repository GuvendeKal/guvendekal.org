/* Gece/gündüz modu  */

let isDarkMode = true; 

function toggleTheme(checkbox) {
    const themeStyle = document.getElementById('theme-style');
    isDarkMode = checkbox.checked;

    if (isDarkMode) {
        themeStyle.setAttribute('href', 'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css');
    } else {
        themeStyle.setAttribute('href', 'https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css');
    }
}


