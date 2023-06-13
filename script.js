// script.js
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Store the dark mode preference in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkModePreference', isDarkMode);
  }
  
  // Check if the dark mode preference is stored in localStorage
  const darkModePreference = localStorage.getItem('darkModePreference');
  if (darkModePreference === 'true') {
    // Apply dark mode if the preference is set to true
    document.body.classList.add('dark-mode');
  }