// Data van alle gebruikers
const initialUsers = [
  { id: 1, username: "i.moldovan", password: "123", naam: "Moldovan", voornaam: "Ianis", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 2, username: "j.moeneclaey", password: "123", naam: "Moeneclaey", voornaam: "Jonas", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 3, username: "a.willaert", password: "123", naam: "Willaert", voornaam: "Arno", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 4, username: "k.willems", password: "123", naam: "Willems", voornaam: "Kyrill", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 5, username: "t.labeeuw", password: "123", naam: "Labeeuw", voornaam: "Thimen", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 6, username: "e.decraemer", password: "123", naam: "Decraemer", voornaam: "Emiel", klas: "6ADB", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 7, username: "x.pacquet", password: "123", naam: "Pacquet", voornaam: "Xander", klas: "6ICW", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 8, username: "x.xheka", password: "123", naam: "Xheka", voornaam: "Xen", klas: "6ICW", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 9, username: "j.bourgois", password: "123", naam: "Bourgois", voornaam: "Jarne", klas: "6ICW", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 10, username: "b.debeuckelaere", password: "123", naam: "Debeuckelaere", voornaam: "Brecht", klas: "5ICW", type: "leerling", streepjes: 0, minpunten: 0, acties: [] },
  { id: 11, username: "h.dekesel", password: "123", naam: "Dekesel", voornaam: "Hannes", type: "leerkracht" },
  { id: 12, username: "k.boedt", password: "123", naam: "Boedt", voornaam: "Ken", type: "leerkracht" },
  { id: 13, username: "admin", password: "123", naam: "Admin", voornaam: "Hoofd", type: "admin" },
];

// Checkt bij elke pagina load of de localStorage is geïnitialiseerd.
// Als de "users" key niet bestaat, wordt deze aangemaakt en gevuld met de initiële data.
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(initialUsers));
}

export const getStoredUsers = () => {
    return JSON.parse(localStorage.getItem('users'));
};

export const updateStoredUsers = (updatedUsers) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
};