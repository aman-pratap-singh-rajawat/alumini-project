// Example data for colleges with city information
const colleges = [
    {
        name: "Government Engineering College",
        city: "Jabalpur",
        state: "MP",
        chatLink: "chat.html?college=gec-sf",
        profileLink: "https://www.youtube.com/"
    },
    {
        name: "Gyanganga Institute of Technology",
        city: "Jabalpur",
        state: "MP",
        chatLink: "chat.html?college=abc-ny",
        profileLink: "college-profile.html?college=abc-ny"
    },
    {
        name: "Gyanganga Collage Of Technology",
        city: "Jabalpur",
        state: "MP",
        chatLink: "chat.html?college=xyz-la",
        profileLink: "collageprofile.html"
    },
    {
        name: "Global Collage Of Technology",
        city: "Jabalpur",
        state: "MP",
        chatLink: "chat.html?college=gta-chicago",
        profileLink: "college-profile.html?college=gta-chicago"
    },
    // Add more college data here
];

function searchByCity() {
    const cityInput = document.getElementById('cityInput').value.toLowerCase();
    const collegeList = document.getElementById('collegeList');
    collegeList.innerHTML = '';

    const filteredColleges = colleges.filter(college => {
        return college.city.toLowerCase().includes(cityInput);
    });

    if (filteredColleges.length > 0) {
        filteredColleges.forEach(college => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = `
                <h3>${college.name}</h3>
                <p>City: ${college.city}, ${college.state}</p>
                <div class="button-group">
                    <a href="${college.chatLink}" class="join-chat">Join Chat Group</a>
                    <a href="${college.profileLink}" class="view-profile">View College Profile</a>
                </div>
            `;
            collegeList.appendChild(resultItem);
        });
    } else {
        collegeList.innerHTML = '<p>No colleges found in this city.</p>';
    }
}
