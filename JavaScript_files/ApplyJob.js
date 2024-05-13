function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the file input element and the selected file
    var fileInput = document.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    // Check if a file is selected
    if (file) {
      // Create a FileReader to read the file contents
      var reader = new FileReader();

      // Define the onload event handler
      reader.onload = function(event) {
        // Store the file contents in local storage
        localStorage.setItem('uploadedFile', event.target.result);
        

        alert('File uploaded and stored in local storage.');
        window.location.href="../HTML_files/AvailableJobs.html";
        

        
      };
 

      // Read the file as text
      reader.readAsText(file);
    } else {
      alert('Please select a file.');
    }
  }