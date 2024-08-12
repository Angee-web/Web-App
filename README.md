Express Working Hours Application
Description
A simple Express.js application that serves static HTML pages and enforces access restrictions based on working hours. The application is available only from Monday to Friday, between 9 AM and 10 PM.

Features
-Middleware to restrict access based on working hours
-Serves static files (HTML, CSS, JavaScript) from the views directory
-Routes for Home, Services, and Contact pages

File Structure
1. views/
- home.html
- services.html
- contact.html
(CSS and other static files)
2. server.js (main server file)

  The checkWorkingHours middleware function is designed to restrict access to your Express.js application based on the current day and time.
- new Date() creates a Date object representing the current date and time.
- getDay() retrieves the day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday).
- getHours() retrieves the current hour of the day (0-23).
- day >= 1 && day <= 5 ensures the request is made from Monday to Friday.
- hour >= 9 && hour < 22 ensures the request is made between 9 AM and 10 PM.
- If the conditions are met, next() is called to pass control to the next middleware or route handler.
- If the conditions are not met, res.status(403).send('The application is only available during working hours.') sends a 403 Forbidden response, indicating that the application is only available during specified hours.
