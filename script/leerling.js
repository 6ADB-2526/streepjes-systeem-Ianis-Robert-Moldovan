import { getStoredUsers } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (!loggedInUser || loggedInUser.type !== "leerling") {
        window.location.href = "index.html";
        return;
    }

    const users = getStoredUsers();
    const student = users.find(u => u.id === loggedInUser.id);
    
    if (!student) {
        window.location.href = "index.html";
        return;
    }

    const studentDisplayName = document.getElementById("studentDisplayName");
    const displayName = document.getElementById("displayName");
    const displayClass = document.getElementById("displayClass");
    const streepjesCount = document.getElementById("streepjesCount");
    const streepjesDisplay = document.getElementById("streepjesDisplay");
    const streepjesLeft = document.getElementById("streepjesLeft");
    const minpuntenCount = document.getElementById("minpuntenCount");
    const actionsHistory = document.getElementById("actionsHistory");

    studentDisplayName.textContent = `Welkom ${student.voornaam} ${student.naam}`;
    displayName.textContent = `${student.voornaam} ${student.naam}`;
    displayClass.textContent = student.klas;
    streepjesCount.textContent = student.streepjes;
    minpuntenCount.textContent = student.minpunten;

    streepjesDisplay.innerHTML = "";
    for (let i = 0; i < student.streepjes; i++) {
        const line = document.createElement("div");
        line.className = "streepje";
        streepjesDisplay.appendChild(line);
    }
    
    const streepjesRemaining = 3 - student.streepjes;
    streepjesLeft.textContent = streepjesRemaining > 0 ? streepjesRemaining : 0;

    if (actionsHistory) {
        actionsHistory.innerHTML = "";
        if (student.acties.length > 0) {
            student.acties.forEach(action => {
                const actionItem = document.createElement("li");
                const actionText = action.type === 'plus' ? `+1 streepje: ${action.reden}` : `-1 streepje: ${action.reden}`;
                actionItem.textContent = `${action.datum}: ${actionText}`;
                actionsHistory.appendChild(actionItem);
            });
        } else {
            actionsHistory.innerHTML = "<li>Nog geen acties geregistreerd.</li>";
        }
    }
});