// Example data to render
const profileData = {
    name: 'Aman Pratap Singh Rajawat',
    title: 'Software Engineer at XYZ Corp',
    location: 'San Francisco, CA',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nulla ut purus malesuada interdum.',
    skills: ['JavaScript', 'React', 'Node.js'],
    experience: [
        {
            position: 'Senior Developer',
            company: 'XYZ Corp',
            duration: '2018 - Present',
            details: 'Leading a team of developers to build web applications using modern technologies.'
        },
        {
            position: 'Junior Developer',
            company: 'ABC Inc.',
            duration: '2015 - 2018',
            details: 'Developed front-end features for the company’s flagship product.'
        }
    ],
    education: [
        {
            institution: 'University of Example',
            degree: 'BSc in Computer Science',
            year: '2015'
        }
    ],
    certifications: ['Certified JavaScript Developer', 'Certified React Developer'],
    contact: {
        email: 'johndoe@example.com',
        phone: '+1 234 567 8901',
        linkedin: 'https://linkedin.com/in/johndoe'
    }
};

function renderProfile() {
    document.getElementById('profileName').textContent = profileData.name;
    document.getElementById('profileTitle').textContent = profileData.title;
    document.getElementById('profileLocation').textContent = profileData.location;
    document.getElementById('profileAbout').textContent = profileData.about;

    const skillsList = document.getElementById('profileSkills');
    profileData.skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    const experienceContainer = document.getElementById('profileExperience');
    profileData.experience.forEach(exp => {
        const experienceItem = document.createElement('div');
        experienceItem.classList.add('experience-item');
        experienceItem.innerHTML = `<strong>${exp.position}</strong> at <em>${exp.company}</em> (${exp.duration})<p>${exp.details}</p>`;
        experienceContainer.appendChild(experienceItem);
    });

    const educationContainer = document.getElementById('profileEducation');
    profileData.education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item');
        educationItem.innerHTML = `<strong>${edu.degree}</strong>, ${edu.institution} (${edu.year})`;
        educationContainer.appendChild(educationItem);
    });

    const certificationsList = document.getElementById('profileCertifications');
    profileData.certifications.forEach(cert => {
        const listItem = document.createElement('li');
        listItem.textContent = cert;
        certificationsList.appendChild(listItem);
    });

    document.getElementById('profileEmail').textContent = profileData.contact.email;
    document.getElementById('profilePhone').textContent = profileData.contact.phone;
    document.getElementById('profileLinkedIn').textContent = profileData.contact.linkedin;
    document.getElementById('profileLinkedIn').setAttribute('href', profileData.contact.linkedin);
}

// Call the function to render profile data
renderProfile();
