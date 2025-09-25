import { getStoredUsers } from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("LoginVeld");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessageDiv = document.getElementById("error-message");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const storedUsers = getStoredUsers();

            const user = storedUsers.find(u => u.username === username && u.password === password);

            if (user) {
                sessionStorage.setItem("loggedInUser", JSON.stringify(user));
                errorMessageDiv.style.display = "none";
                
                if (user.type === "leerling") {
                    window.location.href = "leerling.html";
                } else {
                    window.location.href = "admin.html";
                }
            } else {
                errorMessageDiv.textContent = "Onjuiste gebruikersnaam of wachtwoord.";
                errorMessageDiv.style.display = "block";
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            sessionStorage.removeItem("loggedInUser");
            window.location.href = "index.html";
        });
    }
});