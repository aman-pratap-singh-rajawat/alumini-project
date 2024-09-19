// // Smooth scrolling for navigation
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Sample alumni data for the directory
// const alumni = [
//     { name: "John Doe", email: "john@example.com", graduationYear: 2010 },
//     { name: "Jane Smith", email: "jane@example.com", graduationYear: 2012 },
//     // Add more alumni as needed
// ];

// // Handle registration form submission with validation
// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (validateForm(name, email, password)) {
//         console.log("Registered User:", { name, email, password });
//         alert("Registration successful!");
//     }
// });

// // Handle login form submission with validation
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('emailLogin').value;
//     const password = document.getElementById('passwordLogin').value;

//     if (validateForm(email, password)) {
//         console.log("Login Attempt:", { email, password });
//         alert("Login successful!");
//     }
// });

// // Display alumni in the directory
// function loadAlumniDirectory() {
//     const directoryList = document.getElementById('directoryList');
//     alumni.forEach(alum => {
//         const alumElement = document.createElement('div');
//         alumElement.className = 'alum';
//         alumElement.innerHTML = `<strong>${alum.name}</strong> (${alum.graduationYear})<br>${alum.email}`;
//         directoryList.appendChild(alumElement);
//     });
// }

// // Simple form validation function
// function validateForm(...fields) {
//     for (const field of fields) {
//         if (field.trim() === '') {
//             alert("Please fill in all fields.");
//             return false;
//         }
//     }
//     return true;
// }

// // Initialize the directory on page load
// document.addEventListener('DOMContentLoaded', loadAlumniDirectory);


// // Get user's name from localStorage (simulating user data retrieval after registration)
// document.addEventListener('DOMContentLoaded', function() {
//     const userName = localStorage.getItem('userName') || 'Alumni';
//     document.getElementById('userName').textContent = userName;
// });

// // Example: Store user's name after registration (you would normally handle this during registration)
// localStorage.setItem('userName', 'John Doe'); // This line should be triggered after successful registration























