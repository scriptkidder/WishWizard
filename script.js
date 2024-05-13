document.getElementById('wishesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var message = document.getElementById('message').value;
    var contact = document.getElementById('contact').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Construct datetime string
    var datetimeString = date + ' ' + time + ':00';
    
    // Create request body
    var requestBody = {
        message: message,
        contact: contact,
        datetime: datetimeString
    };
    
    // Send POST request to backend API
    fetch('http://localhost:5000/send_wishes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => {
        if (response.ok) {
            console.log('Wishes sent successfully!');
            // Clear form fields (optional)
            document.getElementById('message').value = '';
            document.getElementById('contact').value = '';
            document.getElementById('date').value = '';
            document.getElementById('time').value = '';
        } else {
            console.error('Failed to send wishes:', response.status);
        }
    })
    .catch(error => {
        console.error('Error sending wishes:', error);
    });
});
