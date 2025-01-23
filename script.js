// Function to show info box with content
function showInfo(type) {
    const infoBox = document.getElementById('info-box');
    const infoContent = document.getElementById('info-content');

    let content = '';

    switch (type) {
        case 'contact':
            content = `
                <h2>Contact Information</h2>
                <p>Phone: 9818983136</p>
                <p>Email: rangergoku1@gmail.com</p>
                <p>GitHub: Gautam9818</p>
            `;
            break;
        case 'education':
            content = `
                <h2>Education</h2>
                <p>Currently pursuing BCA at IGNOU</p>
                <p>12th Pass</p>
            `;
            break;
        case 'skills':
            content = `
                <h2>Skills</h2>
                <ul>
                    <li>Advanced Excel and Word</li>
                    <li>Proficient in HTML, CSS and JS (can replicate any website)</li>
                    <li>React and Bootstrap
                    <li>Excellent video editing and music production skills</li>
                    <li>Experienced with AI tools like ChatGPT, MidJourney, and more</li>
                    <li>Currently enrolled in a Full-Stack Development course</li>
                </ul>
            `;
            break;
            case 'Objective':
            content = `
                <h2>Objective</h2>
                <p>I aim to use my technical and creative skills in video editing, music production, and AI tools to contribute to a dynamic organization. 
                     
                      </p>
                
            `;
            break;
            case 'Strengths':
            content = `
                <h2>Strengths</h2>
                <p>Adaptable to any environment</p>
                <p>Quick learner with the ability to master new tasks efficiently</p>
                <p>Efficiently manage and prioritize multiple tasks with precision</p>
                <p>excelling at solving complex challenges</p>


            `;
            break;
    }

    infoContent.innerHTML = content;
    infoBox.classList.add('visible');
}

// Function to hide info box
function hideInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.classList.remove('visible');
}
