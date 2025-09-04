// Voorbeelddata voor klassen en leerlingen
const classData = {
    '1A': [
        'Emma van der Berg', 'Liam Jansen', 'Sophie de Vries', 'Noah Bakker', 'Olivia Smit',
        'Lucas van Dijk', 'Mila Visser', 'Mason de Jong', 'Ava Mulder', 'Ethan Bos',
        'Isabella Peters', 'Alexander Vos', 'Amelia Groot', 'Benjamin Kok', 'Charlotte Wit',
        'Jacob van Leeuwen', 'Mia Hendriks', 'Michael Brouwer', 'Abigail Dijkstra', 'Daniel Meijer',
        'Emily van der Meer', 'Matthew Koning', 'Elizabeth Dekker', 'Anthony Jacobs', 'Sofia Willems'
    ],
    '1B': [
        'William de Boer', 'Harper Vermeulen', 'James van den Berg', 'Evelyn Schouten', 'Logan Hoekstra',
        'Ella van der Laan', 'Sebastian Prins', 'Scarlett Huisman', 'Jack Blom', 'Madison Verhoeven',
        'Owen Koster', 'Layla Martens', 'Luke Timmermans', 'Zoe van Vliet', 'Wyatt Kuiper',
        'Nora Roos', 'Henry Scholten', 'Lily Postma', 'Leo Mol', 'Hannah Bosman',
        'Gabriel Laan', 'Chloe Vink', 'Carter Donker'
    ],
    '2A': [
        'Samuel Groen', 'Zoey Zwart', 'David Rood', 'Natalie Wit', 'Caleb Geel',
        'Audrey Blauw', 'Joshua Paars', 'Maya Roze', 'Andrew Oranje', 'Leah Grijs',
        'Christopher Bruin', 'Aaliyah Zilver', 'Joseph Goud', 'Savannah Koper', 'John Ijzer',
        'Brooklyn Steen', 'Dylan Hout', 'Bella Glas', 'Isaiah Papier', 'Claire Stof',
        'Ryan Metaal', 'Skylar Plastic', 'Nathan Rubber', 'Addison Leer', 'Ian Wol',
        'Aubrey Zijde', 'Jaxon Katoen'
    ],
    '2B': [
        'Jeremiah Linnen', 'Anna Fluweel', 'Jose Denim', 'Samantha Polyester', 'Adam Nylon',
        'Grace Lycra', 'Luis Spandex', 'Cora Viscose', 'Juan Modal', 'Ruby Bamboe',
        'Carson Hennep', 'Serenity Jute', 'Dominic Vlas', 'Autumn Ramie', 'Jace Alpaca',
        'Genesis Mohair', 'Grayson Kasjmier', 'Ariana Angora', 'Colton Merino', 'Kinsley Lamswol',
        'Easton Zijde', 'Peyton Satijn', 'Nolan Chiffon', 'Lydia Tule'
    ]
};

let currentClass = null;
let studentData = {};

document.addEventListener('DOMContentLoaded', function() {
    // Controleer of gebruiker is ingelogd
    const currentTeacher = JSON.parse(localStorage.getItem('currentTeacher'));
    if (!currentTeacher) {
        window.location.href = 'loginPage.html';
        return;
    }

    // Toon leerkracht naam
    document.getElementById('teacherName').textContent = `Welkom, ${currentTeacher.name}`;

    // Laad bestaande studentdata
    loadStudentData();

    // Event listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Logout functionaliteit
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('currentTeacher');
        window.location.href = 'loginPage.html';
    });

    // Klas selectie
    document.querySelectorAll('.class-card').forEach(card => {
        card.addEventListener('click', function() {
            const className = this.dataset.class;
            selectClass(className);
        });
    });

    // Terug naar klassen knop
    document.getElementById('backToClasses').addEventListener('click', function() {
        showClassSelection();
    });

    // Modal event listeners
    setupModalEventListeners();
}

function setupModalEventListeners() {
    const modal = document.getElementById('reasonGameModal');
    const closeBtn = document.querySelector('.close');
    const confirmBtn = document.getElementById('confirmAction');
    const cancelBtn = document.getElementById('cancelAction');

    // Close modal when clicking X
    closeBtn.addEventListener('click', function() {
        closeModal();
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Confirm action
    confirmBtn.addEventListener('click', function() {
        confirmAction();
    });

    // Cancel action
    cancelBtn.addEventListener('click', function() {
        closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('reasonGameModal');
    modal.style.display = 'none';
    
    // Reset variables
    currentAction = null;
    currentStudentId = null;
    selectedReason = null;
}

function confirmAction() {
    if (!currentStudentId || !currentAction || !selectedReason) {
        return;
    }

    const student = studentData[currentStudentId];
    
    if (currentAction === 'streepje' && student.streepjes < 3) {
        student.streepjes++;
        
        // Add to history
        if (!student.history) student.history = [];
        student.history.push({
            type: 'streepje',
            reason: selectedReason,
            date: new Date().toLocaleString('nl-NL'),
            teacher: JSON.parse(localStorage.getItem('currentTeacher')).name
        });
        
        // Show success message
        showSuccessMessage(`Streepje gegeven! Reden: ${selectedReason}`);
        
    } else if (currentAction === 'minpunt' && student.streepjes >= 3) {
        student.minpunten++;
        student.streepjes = 0; // Reset streepjes na minpunt
        
        // Add to history
        if (!student.history) student.history = [];
        student.history.push({
            type: 'minpunt',
            reason: selectedReason,
            date: new Date().toLocaleString('nl-NL'),
            teacher: JSON.parse(localStorage.getItem('currentTeacher')).name
        });
        
        // Show success message
        showSuccessMessage(`Minpunt gegeven! Reden: ${selectedReason}`);
    }
    
    saveStudentData();
    loadStudents(currentClass);
    closeModal();
}

function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">✅</span>
            <span class="notification-text">${message}</span>
        </div>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show immediately
    notification.classList.add('show');
    
    // Remove after 2 seconds (veel sneller!)
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

function selectClass(className) {
    currentClass = className;
    document.getElementById('currentClassName').textContent = `Klas ${className}`;
    
    // Verberg klas selectie, toon leerling beheer
    document.getElementById('classSelection').style.display = 'none';
    document.getElementById('studentManagement').style.display = 'block';
    
    // Laad leerlingen
    loadStudents(className);
}

function showClassSelection() {
    document.getElementById('classSelection').style.display = 'block';
    document.getElementById('studentManagement').style.display = 'none';
    currentClass = null;
}

function loadStudents(className) {
    const studentsGrid = document.getElementById('studentsGrid');
    const students = classData[className] || [];
    
    studentsGrid.innerHTML = '';
    
    students.forEach((studentName, index) => {
        const studentId = `${className}_${index}`;
        const student = getStudentData(studentId, studentName);
        
        const studentCard = createStudentCard(studentId, student);
        studentsGrid.appendChild(studentCard);
    });
}

function getStudentData(studentId, studentName) {
    if (!studentData[studentId]) {
        studentData[studentId] = {
            name: studentName,
            streepjes: 0,
            minpunten: 0
        };
    }
    return studentData[studentId];
}

function createStudentCard(studentId, student) {
    const card = document.createElement('div');
    card.className = 'student-card';
    
    const canGiveMinpunt = student.streepjes >= 3;
    const canGiveStreepje = student.streepjes < 3;
    
    card.innerHTML = `
        <div class="student-header">
            <div class="student-name">${student.name}</div>
        </div>
        
        <div class="student-stats">
            <div class="stat">
                <div class="stat-number">${student.streepjes}</div>
                <div class="stat-label">Streepjes</div>
            </div>
            <div class="stat">
                <div class="stat-number">${student.minpunten}</div>
                <div class="stat-label">Minpunten</div>
            </div>
        </div>
        
        <div class="streepjes-display">
            ${createStreepjesDisplay(student.streepjes)}
        </div>
        
        <div class="student-actions">
            <button class="action-btn streepje-btn" 
                    onclick="giveStreepje('${studentId}')" 
                    ${!canGiveStreepje ? 'disabled' : ''}>
                + Streepje
            </button>
            
            ${canGiveMinpunt ? `
                <button class="action-btn minpunt-btn" 
                        onclick="giveMinpunt('${studentId}')">
                    + Minpunt
                </button>
            ` : ''}
            
            <button class="action-btn reset-btn" 
                    onclick="resetStudent('${studentId}')">
                Reset
            </button>
        </div>
    `;
    
    return card;
}

function createStreepjesDisplay(streepjes) {
    let display = '';
    for (let i = 0; i < 3; i++) {
        if (i < streepjes) {
            display += `<div class="streepje">${i + 1}</div>`;
        } else {
            display += `<div class="streepje empty">○</div>`;
        }
    }
    return display;
}

// Reden lijsten voor het gokspelletje
const streepjeReasons = [
    "Praten tijdens de les 🗣️",
    "Vergeten huiswerk 📚",
    "Te laat komen ⏰",
    "Niet luisteren naar instructies 👂",
    "Storen van klasgenoten 😤",
    "Telefoon gebruiken in de les 📱",
    "Eten tijdens de les 🍎",
    "Niet meewerken in groepswerk 🤝",
    "Rommel maken 🗑️",
    "Brutaal gedrag 😠",
    "Niet opletten 👀",
    "Spullen vergeten 🎒",
    "Onbeleefd zijn tegen klasgenoten 😒",
    "Niet op tijd klaar zijn 🕐",
    "Afleiden van anderen 🎭"
];

const minpuntReasons = [
    "Herhaaldelijk storen na waarschuwingen ⚠️",
    "Respectloos gedrag naar leerkracht 😡",
    "Pesten van klasgenoten 😢",
    "Weigeren mee te werken 🚫",
    "Agressief gedrag 💢",
    "Liegen tegen de leerkracht 🤥",
    "Opzettelijk materiaal beschadigen 💥",
    "Schelden of grof taalgebruik 🤬",
    "Weglopen uit de klas 🏃",
    "Ernstig verstoren van de les 🌪️",
    "Niet luisteren naar meerdere waarschuwingen 🔇",
    "Gevaarlijk gedrag 🚨",
    "Discriminerend gedrag 🚷",
    "Herhaaldelijk te laat komen 🕐",
    "Opzettelijk niet meewerken aan taken 📝"
];

let currentAction = null;
let currentStudentId = null;
let selectedReason = null;

function giveStreepje(studentId) {
    currentAction = 'streepje';
    currentStudentId = studentId;
    const student = studentData[studentId];
    
    if (student.streepjes < 3) {
        showReasonGame(student.name, 'streepje');
    }
}

function giveMinpunt(studentId) {
    currentAction = 'minpunt';
    currentStudentId = studentId;
    const student = studentData[studentId];
    
    if (student.streepjes >= 3) {
        showReasonGame(student.name, 'minpunt');
    }
}

function showReasonGame(studentName, actionType) {
    const modal = document.getElementById('reasonGameModal');
    const studentNameModal = document.getElementById('studentNameModal');
    const actionDescription = document.getElementById('actionDescription');
    const reasonBoxes = document.querySelectorAll('.reason-box');
    const selectedReasonDiv = document.getElementById('selectedReason');
    const confirmBtn = document.getElementById('confirmAction');
    
    // Reset modal state
    selectedReason = null;
    selectedReasonDiv.style.display = 'none';
    confirmBtn.style.display = 'none';
    
    // Set content
    studentNameModal.textContent = studentName;
    if (actionType === 'streepje') {
        actionDescription.innerHTML = `Je gaat een <strong style="color: #dc3545;">streepje</strong> geven aan <strong>${studentName}</strong>`;
    } else {
        actionDescription.innerHTML = `Je gaat een <strong style="color: #fd7e14;">minpunt</strong> geven aan <strong>${studentName}</strong>`;
    }
    
    // Reset boxes
    reasonBoxes.forEach(box => {
        box.textContent = '❓';
        box.classList.remove('clicked', 'disabled');
        box.dataset.category = actionType;
    });
    
    // Show modal
    modal.style.display = 'block';
    
    // Add click listeners to boxes
    reasonBoxes.forEach((box, index) => {
        box.onclick = () => selectReasonBox(box, index, actionType);
    });
}

function selectReasonBox(box, index, actionType) {
    if (box.classList.contains('clicked') || box.classList.contains('disabled')) {
        return;
    }
    
    // Disable all other boxes
    document.querySelectorAll('.reason-box').forEach(otherBox => {
        if (otherBox !== box) {
            otherBox.classList.add('disabled');
        }
    });
    
    // Mark this box as clicked
    box.classList.add('clicked');
    
    // Get random reason
    const reasons = actionType === 'streepje' ? streepjeReasons : minpuntReasons;
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    
    // Show reason immediately (geen timer meer!)
    box.textContent = getReasonEmoji(randomReason);
    selectedReason = randomReason;
    
    // Show selected reason immediately
    document.getElementById('reasonText').textContent = randomReason;
    document.getElementById('selectedReason').style.display = 'block';
    document.getElementById('confirmAction').style.display = 'inline-block';
}

function getReasonEmoji(reason) {
    if (reason.includes('Praten')) return '🗣️';
    if (reason.includes('huiswerk')) return '📚';
    if (reason.includes('laat')) return '⏰';
    if (reason.includes('luisteren')) return '👂';
    if (reason.includes('Storen')) return '😤';
    if (reason.includes('Telefoon')) return '📱';
    if (reason.includes('Eten')) return '🍎';
    if (reason.includes('groepswerk')) return '🤝';
    if (reason.includes('Rommel')) return '🗑️';
    if (reason.includes('Brutaal')) return '😠';
    if (reason.includes('opletten')) return '👀';
    if (reason.includes('vergeten')) return '🎒';
    if (reason.includes('Onbeleefd')) return '😒';
    if (reason.includes('klaar')) return '🕐';
    if (reason.includes('Afleiden')) return '🎭';
    if (reason.includes('Herhaaldelijk')) return '⚠️';
    if (reason.includes('Respectloos')) return '😡';
    if (reason.includes('Pesten')) return '😢';
    if (reason.includes('Weigeren')) return '🚫';
    if (reason.includes('Agressief')) return '💢';
    if (reason.includes('Liegen')) return '🤥';
    if (reason.includes('beschadigen')) return '💥';
    if (reason.includes('Schelden')) return '🤬';
    if (reason.includes('Weglopen')) return '🏃';
    if (reason.includes('verstoren')) return '🌪️';
    if (reason.includes('waarschuwingen')) return '🔇';
    if (reason.includes('Gevaarlijk')) return '🚨';
    if (reason.includes('Discriminerend')) return '🚷';
    return '❓';
}

function resetStudent(studentId) {
    if (confirm('Weet je zeker dat je alle streepjes en minpunten voor deze leerling wilt resetten?')) {
        const student = studentData[studentId];
        student.streepjes = 0;
        student.minpunten = 0;
        saveStudentData();
        loadStudents(currentClass);
    }
}

function loadStudentData() {
    const saved = localStorage.getItem('studentData');
    if (saved) {
        studentData = JSON.parse(saved);
    }
}

function saveStudentData() {
    localStorage.setItem('studentData', JSON.stringify(studentData));
}