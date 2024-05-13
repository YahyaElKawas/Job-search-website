document.addEventListener('DOMContentLoaded', function () {
    loadData();  // Load the data when the document is ready
 
    // Select all edit and delete buttons are dynamically created, need to delegate from parent
    let  jobListElement = document.getElementById('ourJobsList');

    jobListElement.addEventListener('click', function(event) {
        if (event.target.classList.contains('editBtn')) {
            event.preventDefault();  // Prevent form submission
            let form = event.target.closest('form');
            let inputs = form.querySelectorAll('input[type="text"]');
            let isEditing = event.target.textContent === 'Edit';
            inputs.forEach(input => input.disabled = !isEditing);
            event.target.textContent = isEditing ? 'Save' : 'Edit';
            if (!isEditing) {
                saveData();  // Save the data when switching from 'Save' to 'Edit'
            }
        } else if (event.target.classList.contains('deleteBtn')) {
            event.preventDefault();  // Prevent form submission
            let form = event.target.closest('form');
            deleteJob(form.dataset.jobid);  // Delete the job from localStorage
            form.closest('li').remove();  // Remove the list item
        }
    });
});

function loadData() {
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    let jobListElement = document.getElementById('ourJobsList');
    jobListElement.innerHTML = '';  // Clear existing list items if any

    jobs.forEach(job => {
        jobListElement.innerHTML += `
            <li>
                <form data-jobid="${job.jobId}">
                    <label>Job ID</label><input type="text" value="${job.jobId}" disabled><br>
                    <label>Job Title</label><input type="text" value="${job.jobTitle}" disabled><br>
                    <label>Job Salary</label><input type="text" value="${job.jobSalary}" disabled><br>
                    <label>Company Name</label><input type="text" value="${job.companyName}" disabled><br>
                    <label>Job Status</label><input type="text" value="${job.jobStatus}" disabled><br>
                    <label>Job Description</label><input type="text" value="${job.jobDescription}" disabled><br>
                    <label>Years of Experience</label><input type="text" value="${job.yearsOfExperience}" disabled><br>
                    <div class="buttons">
                        <button class="editBtn">Edit</button> 
                        <button class="deleteBtn">Delete</button>
                    </div>
                </form>
            </li>
        `;
    });
}

function saveData() {
    let jobs = Array.from(document.querySelectorAll('form')).map(form => ({
        jobId: form.dataset.jobid,
        jobTitle: form.jobTitle.value,
        jobSalary: form.jobSalary.value,
        companyName: form.companyName.value,
        jobStatus: form.jobStatus.value,
        jobDescription: form.jobDescription.value,
        yearsOfExperience: form.yearsOfExperience.value
    }));
    localStorage.setItem('jobs', JSON.stringify(jobs));
}

function deleteJob(jobId) {
    let jobs = JSON.parse(localStorage.getItem('jobs')) || [];
    let filteredJobs = jobs.filter(job => job.jobId !== jobId);
    localStorage.setItem('jobs', JSON.stringify(filteredJobs));
}
