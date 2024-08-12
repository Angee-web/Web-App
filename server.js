const express = require('express');

const path = require('path');

const app = express();

const port = 5000;

// Middleware to check working hours
const checkWorkingHours = (req, res, next) => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Debug log
  console.log(`Current time: Day ${day}, Hour ${hour}`);

  // Check if it's Monday to Friday and between 9 AM and 10 PM
  if (day >= 1 && day <= 5 && hour >= 9 && hour < 22) {
    next();
  } else {
    res.status(403).send('The application is only available during working hours.');
  }
};

// Apply middleware globally
app.use(checkWorkingHours);

// Serve static files from the views directory
app.use(express.static(path.join(__dirname, 'views')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
