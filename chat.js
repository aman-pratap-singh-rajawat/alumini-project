// Sample user data for demonstration purposes
const currentUser = {
    name: 'Aman Pratap Singh Rajawat',
    role: 'Alumni'
};

// Array to store chat messages with preloaded messages
let chatMessages = [
    {
        name: 'Abhishek Patel ',
        role: 'Fresher',
        text: 'Hi everyone! Excited to be part of this community.'
    },
    {
        name: 'Aman Pratap Singh Rajawat',
        role: 'Fresher',
        text: 'Welcome, Abhishek! Glad to have you here.'
    },
    {
        name: 'Anushka Patkar',
        role: 'Alumni',
        text: 'Looking forward to connecting with everyone.'
    }
];

// Function to render chat messages
function renderChatMessages() {
    const chatFeed = document.getElementById('chatFeed');
    chatFeed.innerHTML = ''; // Clear existing messages

    chatMessages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message ' + (msg.name === currentUser.name ? 'user' : 'other');
        
        // Adding name and message text
        messageElement.innerHTML = `<strong>${msg.name}</strong><br><p>${msg.text}</p>`;
        chatFeed.appendChild(messageElement);
    });

    // Scroll to the latest message
    chatFeed.scrollTop = chatFeed.scrollHeight;
}

// Handle posting a new message
document.getElementById('sendMessage').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        const newMessage = {
            name: currentUser.name,
            role: currentUser.role,
            text: messageText
        };

        chatMessages.push(newMessage); // Add message to chatMessages array
        renderChatMessages(); // Re-render chat feed

        messageInput.value = ''; // Clear input field
    } else {
        alert('Please enter a message.');
    }
});

// Load previous messages when the page loads
document.addEventListener('DOMContentLoaded', function() {
    renderChatMessages(); // Initially render chat feed
});
