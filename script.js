// Function to open the popup
function openPopup(popupId) {
    const popupOverlay = document.getElementById(popupId); // Get the popup overlay element
    popupOverlay.style.display = "flex"; // Display the popup
}

// Function to handle form submission for the search popup
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const foodName = document.getElementById("foodName").value;
    alert(`Searching for the food product: ${foodName}`);
    closePopup('searchPopupOverlay'); // Close the search popup after submission
});

// Function to handle form submission for the share solution popup
document.getElementById("solutionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const authorName = document.getElementById("authorName").value;
    alert(`Thank you, ${authorName}, for submitting your solution!`);
    closePopup('sharePopupOverlay'); // Close the solution submission popup after submission
});

// Function to close the popup
function closePopup(popupId) {
    const popupOverlay = document.getElementById(popupId); // Get the popup overlay element
    popupOverlay.style.display = "none"; // Hide the popup
}

// Event listeners for the buttons
document.getElementById("searchButton").addEventListener("click", function () {
    openPopup("searchPopupOverlay"); // Open the search popup
});

document.getElementById("shareButton").addEventListener("click", function () {
    openPopup("sharePopupOverlay"); // Open the share solution popup
});

// Close the popup if the user clicks outside of the popup content
document.getElementById("searchPopupOverlay").addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup('searchPopupOverlay');
    }
});

document.getElementById("sharePopupOverlay").addEventListener("click", function (event) {
    if (event.target === this) {
        closePopup('sharePopupOverlay');
    }
});
