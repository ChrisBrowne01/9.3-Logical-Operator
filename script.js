// Function to to toggle between dark and light mode
function toggleTemplate() {
  // Toggle body class for dark mode
  document.body.classList.toggle('dark-mode');

  // Toggle button text and icon
  var button = document.getElementById('toggleButton');
  if (document.body.classList.contains('dark-mode')) {
    button.innerText = 'Switch to Light Mode';
  } else {
    button.innerText = 'Switch to Dark Mode';
  }
}

// Event listener for the toggle button
document.getElementById("toggleButton").addEventListener('click', toggleTemplate);