// Sample user data for demonstration purposes
const users = [
    { name: 'Alice Johnson', skills: 'Software Engineer, AI Specialist' },
    { name: 'Bob Smith', skills: 'Product Manager, UX Designer' },
    { name: 'Carol White', skills: 'Marketing Specialist, SEO Expert' }
];

// Function to render search results
function renderSearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear existing results

    results.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';

        profileCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.skills}</p>
            <div class="profile-details">
                <a href="#">View Profile</a>
            </div>
        `;
        searchResults.appendChild(profileCard);
    });
}

// Handle search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchInput) || 
        user.skills.toLowerCase().includes(searchInput)
    );
    
    renderSearchResults(filteredUsers);
});

// Load sample data when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderSearchResults(users); // Initially render all users
});
