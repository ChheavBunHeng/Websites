document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.querySelector('.username').value;
        const password = document.querySelector('.password').value;

        const jsonDATA = {
            username: username,
            password: password
        };

        fetch('http://localhost:3000/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonDATA),
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Handle the response from the server as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors
        });
    });
});
