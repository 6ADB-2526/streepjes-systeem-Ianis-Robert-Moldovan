import { getStoredUsers, updateStoredUsers } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!loggedInUser || (loggedInUser.type !== "admin" && loggedInUser.type !== "leerkracht")) {
        window.location.href = "index.html";
        return;
    }

    const welcomeMessage = document.getElementById("welcomeMessage");
    const classGrid = document.getElementById("classGrid");
    const classSelectionDiv = document.getElementById("classSelection");
    const studentActionsDiv = document.getElementById("studentActions");
    const currentClassNameSpan = document.getElementById("currentClassName");
    const studentsContainer = document.getElementById("studentsContainer");
    const backToClassesBtn = document.getElementById("backToClasses");
    
    welcomeMessage.textContent = `Welkom, ${loggedInUser.voornaam}!`;

    const users = getStoredUsers();
    const uniqueClasses = [...new Set(users.filter(u => u.type === "leerling").map(u => u.klas))];

    uniqueClasses.forEach(klas => {
        const classBtn = document.createElement("button");
        classBtn.textContent = klas;
        classBtn.className = "class-btn";
        classBtn.addEventListener("click", () => showStudents(klas));
        classGrid.appendChild(classBtn);
    });

    const showStudents = (klas) => {
        classSelectionDiv.style.display = "none";
        studentActionsDiv.style.display = "block";
        currentClassNameSpan.textContent = klas;
        studentsContainer.innerHTML = "";

        const studentsInClass = getStoredUsers().filter(u => u.klas === klas && u.type === "leerling");

        studentsInClass.forEach(student => {
            const studentCard = document.createElement("div");
            studentCard.className = "student-card";
            studentCard.innerHTML = `
                <h3>${student.voornaam} ${student.naam}</h3>
                <p>Streepjes: <span id="streepjes-${student.id}">${student.streepjes}</span></p>
                <p>Minpunten: <span id="minpunten-${student.id}">${student.minpunten}</span></p>
                <div class="actions">
                    <button class="action-btn minus-btn" data-id="${student.id}" data-action="minus">-</button>
                    <button class="action-btn plus-btn" data-id="${student.id}" data-action="plus">+</button>
                </div>
            `;
            studentsContainer.appendChild(studentCard);
        });

        document.querySelectorAll(".action-btn").forEach(button => {
            button.addEventListener("click", handleStreepjeAction);
        });
    };

    const handleStreepjeAction = (e) => {
        const studentId = parseInt(e.target.dataset.id);
        const actionType = e.target.dataset.action;
        
        const reason = prompt(`Geef een reden op voor de actie (${actionType}):`);
        if (reason === null || reason.trim() === "") {
            alert("Actie geannuleerd. Reden is verplicht.");
            return;
        }

        const users = getStoredUsers();
        const student = users.find(u => u.id === studentId);
        
        if (student) {
            const oldStreepjes = student.streepjes;
            if (actionType === "plus") {
                student.streepjes++;
            } else if (actionType === "minus" && student.streepjes > 0) {
                student.streepjes--;
            }

            if (student.streepjes >= 3) {
                student.streepjes = 0;
                student.minpunten++;
            }

            student.acties.push({
                type: actionType,
                reden: reason,
                datum: new Date().toLocaleDateString('nl-BE'),
                streepjesBefore: oldStreepjes,
                streepjesAfter: student.streepjes,
                minpuntenAfter: student.minpunten
            });

            updateStoredUsers(users);

            document.getElementById(`streepjes-${student.id}`).textContent = student.streepjes;
            document.getElementById(`minpunten-${student.id}`).textContent = student.minpunten;
        }
    };
    
    backToClassesBtn.addEventListener("click", () => {
        studentActionsDiv.style.display = "none";
        classSelectionDiv.style.display = "block";
    });
});