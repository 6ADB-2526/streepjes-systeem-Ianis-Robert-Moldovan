// Wachtwoord systeem voor leerlingen
// In een echte applicatie zouden deze wachtwoorden veilig opgeslagen worden
function generateStudentPassword(studentName) {
    // Eenvoudig wachtwoord systeem: voornaam + geboortejaar (2010-2015)
    const firstName = studentName.split(' ')[0].toLowerCase();
    const birthYear = Math.floor(Math.random() * 6) + 2010; // Random jaar tussen 2010-2015
    return firstName + birthYear;
}

// Voorgedefinieerde wachtwoorden voor demo (in echte app uit database)
const studentPasswords = {
    // Klas 1A
    'Emma van der Berg': 'emma2012',
    'Liam Jansen': 'liam2011',
    'Sophie de Vries': 'sophie2012',
    'Noah Bakker': 'noah2011',
    'Olivia Smit': 'olivia2012',
    'Lucas van Dijk': 'lucas2011',
    'Mila Visser': 'mila2012',
    'Mason de Jong': 'mason2011',
    'Ava Mulder': 'ava2012',
    'Ethan Bos': 'ethan2011',
    'Isabella Peters': 'isabella2012',
    'Alexander Vos': 'alexander2011',
    'Amelia Groot': 'amelia2012',
    'Benjamin Kok': 'benjamin2011',
    'Charlotte Wit': 'charlotte2012',
    'Jacob van Leeuwen': 'jacob2011',
    'Mia Hendriks': 'mia2012',
    'Michael Brouwer': 'michael2011',
    'Abigail Dijkstra': 'abigail2012',
    'Daniel Meijer': 'daniel2011',
    'Emily van der Meer': 'emily2012',
    'Matthew Koning': 'matthew2011',
    'Elizabeth Dekker': 'elizabeth2012',
    'Anthony Jacobs': 'anthony2011',
    'Sofia Willems': 'sofia2012',
    
    // Klas 1B
    'William de Boer': 'william2011',
    'Harper Vermeulen': 'harper2012',
    'James van den Berg': 'james2011',
    'Evelyn Schouten': 'evelyn2012',
    'Logan Hoekstra': 'logan2011',
    'Ella van der Laan': 'ella2012',
    'Sebastian Prins': 'sebastian2011',
    'Scarlett Huisman': 'scarlett2012',
    'Jack Blom': 'jack2011',
    'Madison Verhoeven': 'madison2012',
    'Owen Koster': 'owen2011',
    'Layla Martens': 'layla2012',
    'Luke Timmermans': 'luke2011',
    'Zoe van Vliet': 'zoe2012',
    'Wyatt Kuiper': 'wyatt2011',
    'Nora Roos': 'nora2012',
    'Henry Scholten': 'henry2011',
    'Lily Postma': 'lily2012',
    'Leo Mol': 'leo2011',
    'Hannah Bosman': 'hannah2012',
    'Gabriel Laan': 'gabriel2011',
    'Chloe Vink': 'chloe2012',
    'Carter Donker': 'carter2011',
    
    // Klas 2A
    'Samuel Groen': 'samuel2010',
    'Zoey Zwart': 'zoey2010',
    'David Rood': 'david2010',
    'Natalie Wit': 'natalie2010',
    'Caleb Geel': 'caleb2010',
    'Audrey Blauw': 'audrey2010',
    'Joshua Paars': 'joshua2010',
    'Maya Roze': 'maya2010',
    'Andrew Oranje': 'andrew2010',
    'Leah Grijs': 'leah2010',
    'Christopher Bruin': 'christopher2010',
    'Aaliyah Zilver': 'aaliyah2010',
    'Joseph Goud': 'joseph2010',
    'Savannah Koper': 'savannah2010',
    'John Ijzer': 'john2010',
    'Brooklyn Steen': 'brooklyn2010',
    'Dylan Hout': 'dylan2010',
    'Bella Glas': 'bella2010',
    'Isaiah Papier': 'isaiah2010',
    'Claire Stof': 'claire2010',
    'Ryan Metaal': 'ryan2010',
    'Skylar Plastic': 'skylar2010',
    'Nathan Rubber': 'nathan2010',
    'Addison Leer': 'addison2010',
    'Ian Wol': 'ian2010',
    'Aubrey Zijde': 'aubrey2010',
    'Jaxon Katoen': 'jaxon2010',
    
    // Klas 2B
    'Jeremiah Linnen': 'jeremiah2010',
    'Anna Fluweel': 'anna2010',
    'Jose Denim': 'jose2010',
    'Samantha Polyester': 'samantha2010',
    'Adam Nylon': 'adam2010',
    'Grace Lycra': 'grace2010',
    'Luis Spandex': 'luis2010',
    'Cora Viscose': 'cora2010',
    'Juan Modal': 'juan2010',
    'Ruby Bamboe': 'ruby2010',
    'Carson Hennep': 'carson2010',
    'Serenity Jute': 'serenity2010',
    'Dominic Vlas': 'dominic2010',
    'Autumn Ramie': 'autumn2010',
    'Jace Alpaca': 'jace2010',
    'Genesis Mohair': 'genesis2010',
    'Grayson Kasjmier': 'grayson2010',
    'Ariana Angora': 'ariana2010',
    'Colton Merino': 'colton2010',
    'Kinsley Lamswol': 'kinsley2010',
    'Easton Zijde': 'easton2010',
    'Peyton Satijn': 'peyton2010',
    'Nolan Chiffon': 'nolan2010',
    'Lydia Tule': 'lydia2010'
};

// Dezelfde klassendata als in admin.js
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

let currentStudent = null;

document.addEventListener('DOMContentLoaded', function() {
    // Controleer of leerling is ingelogd via de nieuwe login pagina
    const savedStudent = JSON.parse(localStorage.getItem('currentStudent'));
    if (savedStudent) {
        currentStudent = savedStudent;
        showDashboard();
    } else {
        // Redirect naar login pagina als niet ingelogd
        window.location.href = 'loginPage.html';
        return;
    }

    setupEventListeners();
});

function setupEventListeners() {
    // Klas selectie change event
    const classSelect = document.getElementById('studentClass');
    const nameSelect = document.getElementById('studentName');
    
    classSelect.addEventListener('change', function() {
        const selectedClass = this.value;
        populateStudentNames(selectedClass);
    });

    // Login form submit
    const loginForm = document.getElementById('studentLoginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleStudentLogin();
    });

    // Logout functionaliteit
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            logout();
        });
    }
}

function populateStudentNames(className) {
    const nameSelect = document.getElementById('studentName');
    const students = classData[className] || [];
    
    // Clear previous options
    nameSelect.innerHTML = '<option value="">Selecteer je naam...</option>';
    
    if (students.length > 0) {
        nameSelect.disabled = false;
        students.forEach((studentName, index) => {
            const option = document.createElement('option');
            option.value = `${className}_${index}`;
            option.textContent = studentName;
            nameSelect.appendChild(option);
        });
    } else {
        nameSelect.disabled = true;
        nameSelect.innerHTML = '<option value="">Geen leerlingen gevonden</option>';
    }
}

function handleStudentLogin() {
    const classSelect = document.getElementById('studentClass');
    const nameSelect = document.getElementById('studentName');
    const passwordInput = document.getElementById('studentPassword');
    
    const selectedClass = classSelect.value;
    const selectedStudentId = nameSelect.value;
    const selectedStudentName = nameSelect.options[nameSelect.selectedIndex].text;
    const enteredPassword = passwordInput.value.trim();
    
    if (!selectedClass || !selectedStudentId) {
        showError('Selecteer eerst je klas en naam');
        return;
    }
    
    if (!enteredPassword) {
        showError('Voer je wachtwoord in');
        return;
    }
    
    // Controleer wachtwoord
    const correctPassword = studentPasswords[selectedStudentName];
    if (!correctPassword || enteredPassword !== correctPassword) {
        showError('Onjuist wachtwoord. Vraag je leerkracht om hulp als je je wachtwoord bent vergeten.');
        return;
    }
    
    // Maak student object
    currentStudent = {
        id: selectedStudentId,
        name: selectedStudentName,
        class: selectedClass
    };
    
    // Sla op in localStorage
    localStorage.setItem('currentStudent', JSON.stringify(currentStudent));
    
    // Toon dashboard
    showDashboard();
}

function showLogin() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('dashboardSection').style.display = 'none';
}

function showDashboard() {
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('dashboardSection').style.display = 'block';
    
    // Update dashboard met student info
    updateDashboard();
}

function updateDashboard() {
    if (!currentStudent) return;
    
    // Update student info
    document.getElementById('studentDisplayName').textContent = `Welkom, ${currentStudent.name}`;
    document.getElementById('displayName').textContent = currentStudent.name;
    document.getElementById('displayClass').textContent = currentStudent.class;
    
    // Haal student data op
    const studentData = getStudentData();
    
    // Update statistieken
    document.getElementById('streepjesCount').textContent = studentData.streepjes;
    document.getElementById('minpuntenCount').textContent = studentData.minpunten;
    
    // Update streepjes left
    const streepjesLeft = Math.max(0, 3 - studentData.streepjes);
    document.getElementById('streepjesLeft').textContent = streepjesLeft;
    
    // Update visuele streepjes display
    updateStreepjesDisplay(studentData.streepjes);
    
    // Update status bericht
    updateStatusMessage(studentData);
}

function getStudentData() {
    const allStudentData = JSON.parse(localStorage.getItem('studentData')) || {};
    const studentData = allStudentData[currentStudent.id] || {
        name: currentStudent.name,
        streepjes: 0,
        minpunten: 0
    };
    
    return studentData;
}

function updateStreepjesDisplay(streepjes) {
    const display = document.getElementById('streepjesDisplay');
    display.innerHTML = '';
    
    for (let i = 0; i < 3; i++) {
        const streepjeDiv = document.createElement('div');
        streepjeDiv.className = 'streepje';
        
        if (i < streepjes) {
            streepjeDiv.textContent = i + 1;
        } else {
            streepjeDiv.className += ' empty';
            streepjeDiv.textContent = '○';
        }
        
        display.appendChild(streepjeDiv);
    }
}

function updateStatusMessage(studentData) {
    const statusDiv = document.getElementById('statusMessage');
    let message = '';
    let className = '';
    
    if (studentData.streepjes === 0 && studentData.minpunten === 0) {
        message = '🎉 Geweldig! Je hebt nog geen streepjes of minpunten!';
        className = 'status-good';
    } else if (studentData.streepjes === 0) {
        message = `✅ Goed bezig! Je hebt ${studentData.minpunten} minpunt${studentData.minpunten !== 1 ? 'en' : ''}, maar geen actieve streepjes.`;
        className = 'status-good';
    } else if (studentData.streepjes === 1) {
        message = '⚠️ Let op! Je hebt 1 streepje. Nog 2 streepjes en je krijgt een minpunt.';
        className = 'status-warning';
    } else if (studentData.streepjes === 2) {
        message = '⚠️ Pas op! Je hebt 2 streepjes. Nog 1 streepje en je krijgt een minpunt!';
        className = 'status-warning';
    } else if (studentData.streepjes >= 3) {
        message = '🚨 Je hebt 3 streepjes! De leerkracht kan nu een minpunt geven.';
        className = 'status-danger';
    }
    
    statusDiv.textContent = message;
    statusDiv.className = `status-message ${className}`;
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

function logout() {
    localStorage.removeItem('currentStudent');
    currentStudent = null;
    showLogin();
    
    // Reset form
    document.getElementById('studentLoginForm').reset();
    document.getElementById('studentName').disabled = true;
    document.getElementById('studentName').innerHTML = '<option value="">Eerst je klas kiezen...</option>';
    document.getElementById('studentPassword').value = '';
}

// Auto-refresh functionaliteit om updates van leerkrachten te tonen
setInterval(() => {
    if (currentStudent && document.getElementById('dashboardSection').style.display !== 'none') {
        updateDashboard();
    }
}, 5000); // Update elke 5 seconden