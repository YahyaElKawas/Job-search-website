document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the saved job data from local storage
    var savedJob = localStorage.getItem('savedJobs');

    // Get the element where you want to display the saved job
    var savedJobElement = document.getElementById('savedJob');

    // Check if the saved job data exists
    if (savedJob) {
        // Display the saved job data in the element
        savedJobElement.textContent = savedJob;
    } else {
        // If no saved job data is found in local storage, display a message
        savedJobElement.textContent = 'No saved job found.';
    }
});
