document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  const form = document.getElementById("form");

  // Add a submit event listener to the form
  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input string from the form
    const inputString = document.getElementById("input_string").value;

    // Remove all the white spaces from the string
    const processedString = inputString.replace(/\s/g, "-");

    // Convert the string to a URL
    const url = "https://www.scaler.com/hire/test/problem/" + processedString + "/";

    // Redirect to the URL
    window.location.href = url;
  });
});
