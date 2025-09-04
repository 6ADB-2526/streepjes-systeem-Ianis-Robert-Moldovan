// Voorgedefinieerde leerkrachten
const teachers = [
    { username: 'jansen', password: 'wachtwoord123', name: 'Mevrouw Jansen' },
    { username: 'peters', password: 'wachtwoord123', name: 'Meneer Peters' },
    { username: 'admin', password: 'admin123', name: 'Administrator' }
];

document.addEventListener('DOMContentLoaded', function() {
    const typeButtons = document.querySelectorAll('.type-btn');
    const teacherForm = document.getElementById('teacherForm');
    const studentForm = document.getElementById('studentForm');
    const errorMessage = document.getElementById('error-message');

    // Login type switching
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            
            // Update active button
            typeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show/hide forms
            if (type === 'teacher') {
                document.getElementById('teacherLogin').classList.add('active');
                document.getElementById('studentLogin').classList.remove('active');
            } else {
                document.getElementById('teacherLogin').classList.remove('active');
                document.getElementById('studentLogin').classList.add('active');
            }
            
            // Clear error message
            hideError();
        });
    });

    // Teacher login
    teacherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('teacherUsername').value.trim();
        const password = document.getElementById('teacherPassword').value;
        
        // Valideer inloggegevens
        const teacher = teachers.find(t => t.username === username && t.password === password);
        
        if (teacher) {
            // Sla leerkracht informatie op in localStorage
            localStorage.setItem('currentTeacher', JSON.stringify(teacher));
            
            // Redirect naar admin pagina
            window.location.href = 'adminPage.html';
        } else {
            // Toon foutmelding
            showError('Ongeldige gebruikersnaam of wachtwoord voor leerkracht');
        }
    });

    // Student login
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const studentName = document.getElementById('studentName').value.trim();
        const studentClass = document.getElementById('studentClass').value;
        
        if (!studentName || !studentClass) {
            showError('Vul alle velden in om in te loggen als leerling');
            return;
        }

        // Maak of vind leerling data
        let studentsData = JSON.parse(localStorage.getItem('studentsData')) || {};
        
        if (!studentsData[studentClass]) {
            studentsData[studentClass] = {};
        }

        if (!studentsData[studentClass][studentName]) {
            studentsData[studentClass][studentName] = {
                name: studentName,
                class: studentClass,
                streepjes: 0,
                minpunten: 0,
                history: []
            };
        }

        // Sla leerling informatie op
        localStorage.setItem('studentsData', JSON.stringify(studentsData));
        localStorage.setItem('currentStudent', JSON.stringify({
            name: studentName,
            class: studentClass
        }));
        
        // Redirect naar leerling pagina
        window.location.href = 'leerlingPage.html';
    });
    
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        errorMessage.classList.add('shakeError');
        
        // Verberg foutmelding na 5 seconden
        setTimeout(() => {
            hideError();
        }, 5000);
    }

    function hideError() {
        errorMessage.style.display = 'none';
        errorMessage.classList.remove('shakeError');
    }
    
    // Wis eventuele bestaande sessies
    localStorage.removeItem('currentTeacher');
    localStorage.removeItem('currentStudent');
});