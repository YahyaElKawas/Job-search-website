// // Retrieve jobs from localStorage
// let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

// // Display the jobs
// let jobsList = document.getElementById('jobsList');
// jobs.forEach(function(job) {
//     let li = document.createElement('li');
//     li.textContent = 'Job Title: ' + job.jobTitle + ' at ' + job.companyName + ' Company' + ' - Salary: ' + job.jobSalary + '$';
//     jobsList.appendChild(li);
//     });



let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

let jobsList = document.getElementById('jobsList');
jobs.forEach(function(job) {
    let li = document.createElement('li');
    let link = document.createElement('a');
    link.href = 'applyjob.html'; 
    link.textContent = 'Job Title: ' + job.jobTitle + ' at ' + job.companyName + ' Company' + ' - Salary: ' + job.jobSalary + '$';
    
    li.appendChild(link);
    jobsList.appendChild(li);
});