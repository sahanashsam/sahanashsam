// app.js
document.addEventListener('DOMContentLoaded', function () {
    const donorForm = document.getElementById('donorForm');
    const donorList = document.getElementById('donorList');

    donorForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Handle form submission (e.g., send data to the server)
        // Update donor list
        updateDonorList();
    });

    function updateDonorList() {
        // Fetch and display the list of donors from the server
        // You may use AJAX or fetch API to communicate with the backend
        donorList.innerHTML = '<p>List of donors will appear here</p>';
    }
});
// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dummy data for testing
let donors = [];

app.post('/add-donor', (req, res) => {
    const newDonor = req.body;
    donors.push(newDonor);
    res.json({ message: 'Donor added successfully', donors });
});

app.get('/get-donors', (req, res) => {
    res.json({ donors });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
