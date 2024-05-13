document.getElementById('addJobBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission via button click
    
    // Retrieve job details from form inputs
    let jobId = document.getElementById('jobId').value.trim();
    let jobTitle = document.getElementById('jobTitle').value.trim();
    let jobSalary = document.getElementById('jobSalary').value.trim();
    let companyName = document.getElementById('companyName').value.trim();
    let jobStatus = document.querySelector('select').value;
    let description = document.getElementById('description').value.trim();
    let yearsOfExperience = document.getElementById('yearsOfExperience').value.trim();

    // Check if all fields are filled
    if (!jobId || !jobTitle || !jobSalary || !companyName || !description || !yearsOfExperience) {
        alert('Please fill in all fields');
        return;
    }

    // Create a job object
    let newJob = {
        jobId: jobId,
        jobTitle: jobTitle,
        jobSalary: jobSalary,
        companyName: companyName,
        jobStatus: jobStatus,
        jobDescription: description,
        yearsOfExperience: yearsOfExperience
    };

    // Retrieve existing jobs from localStorage, if any
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    // Add the new job to the list
    jobs.push(newJob);

    // Save the updated jobs list back to localStorage
    localStorage.setItem('jobs', JSON.stringify(jobs));

    // Confirmation and form reset (optional)
    alert('Job added successfully');
    document.getElementById('addJobForm').reset();
});
