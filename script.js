let k = 0;
const darkModeToggle = document.getElementById('dark')
let users = [];
const DEMO_DELAY = 1500;

function fetchUsers() {
    loader(true);
    userList().innerHTML = "";

    fetch("https://dummyjson.com/users?limit=10")
        .then(r => {
            if (!r.ok) throw new Error("API xatosi");
            return r.json();
        })
        .then(d => new Promise(resolve => {
            setTimeout(() => resolve(d), DEMO_DELAY);
        }))
        .then(d => {
            users = d.users.map(u => ({
                name: u.firstName + " " + u.lastName,
                age: u.age,
                picture: u.image
            }));

            displayUsers(users);
        })
        .catch(() => {
            userList().innerHTML = "Xatolik yuz berdi!";
        })
        .finally(() => loader(false));
}

function displayUsers(list) {
    userList().innerHTML = list.map(u => `
        <div class="user-card">
            <img src="${u.picture}" alt="${u.name}">
            <p>${u.name}, <br> ${u.age} yosh</p>
        </div>
    `).join("");
}

function sortUsers(type) {
    users.sort((a, b) => type === "name"
        ? a.name.localeCompare(b.name)
        : a.age - b.age
    );

    displayUsers(users);
}

function filterUsers() {
    const q = document.getElementById("filterInput").value.toLowerCase();

    displayUsers(
        users.filter(u => u.name.toLowerCase().includes(q))
    );
}

function userList() {
    return document.getElementById("userList");
}

function loader(show) {
    document.querySelector(".loader").style.display =
        show ? "block" : "none";
}

fetchUsers();

function loader(show) {
    document.querySelector(".loader").style.display =
        show ? "flex" : "none";
}

darkModeToggle.addEventListener("click", function () {
    k++
    if (k % 2 == 0) {
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #0f1720;
    display: flex;
    align-items: center;
    justify-content: center;
}

.conteiner {
    width: 1000px;
    height: 600px;
    background-color: #111827;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 3.5);
    padding: 15px;
    margin-top: 70px;
    border-radius: 20px;
}

h1 {
    margin-bottom: 16px;
    font-size: 26px;
    color: white;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 19px;

}

.contarols {
    display: flex;
    gap: 20px;
}

button {
    background-color: rgb(26, 26, 186);
    border: none;
    padding: 15px;
    color: white;
    width: 200px;
    border-radius: 10px;
    transition: 0.2s;
}

button:hover {
    transform: translateY(-10px);
}

input {
    flex: 1;
    min-width: 220px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #334155;
    outline: none;
    background: #0b1220;
}

.loader {
    margin: 10px 0 16px;
    padding: 12px;
    background: #0b1220;
    border: 1px solid #334155;
    color: white;
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    text-align: center;
    margin-top: 39px;
}

.user-card {
    width: 150px;
    background-color: #0b1220;
    border-radius: 10%;
    padding: 8px;
}

.user-card img {
    width: 100px;
}


.loader {
    display: none;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 30px;
    color: #6366f1;
    font-size: 16px;
    font-weight: bold;
}

.spinner {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.spinner::before {
    content: "";
    width: 25px;
    height: 25px;
    border: 4px solid #ddd;
    border-top-color: #ff0000;
    border-radius: 50%;
    animation: aylanish 0.7s linear infinite;
}

#dark {
    width: 100px;
    height: 40px;
    padding: 0;
    background-color: #6366f1;
    margin-bottom: 20px;
    margin-left: 800px;
}

@keyframes aylanish {
    to {
        transform: rotate(360deg);
    }
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #0f1720;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 30px 20px;
}

.conteiner {
    width: 100%;
    max-width: 1000px;
    min-height: 600px;
    height: auto;
    background-color: #111827;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
    padding: 20px;
    border-radius: 20px;
}

h1 {
    font-size: 26px;
    text-align: center;
    margin: 5px 0 20px;
}

#dark {
    display: block;
    width: 100px;
    height: 40px;
    padding: 0;
    background-color: #6366f1;
    margin: 0 0 20px auto;
}

.contarols {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}

button {
    background-color: rgb(26, 26, 186);
    border: none;
    padding: 14px 16px;
    width: auto;
    min-height: 45px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
    font-size: 14px;
}

button:hover {
    transform: translateY(-4px);
    background-color: #3730a3;
}

input {
    flex: 1;
    min-width: 180px;
    min-height: 45px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #334155;
    outline: none;
    background: #0b1220;
    font-size: 14px;
}

input:focus {
    border-color: #6366f1;
}

.loader {
    display: none;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 25px 10px;
    background: #0b1220;
    border: 1px solid #334155;
    color: #6366f1;
    font-size: 16px;
    font-weight: bold;
}

.spinner {
    display: inline-flex;
    align-items: center;
    gap: 10px;
}

.spinner::before {
    content: "";
    width: 25px;
    height: 25px;
    border: 4px solid #ddd;
    border-top-color: #ff0000;
    border-radius: 50%;
    animation: aylanish 0.7s linear infinite;
    flex-shrink: 0;
}

.user-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 20px;
    text-align: center;
    margin-top: 35px;
}

.user-card {
    min-width: 0;
    background-color: #0b1220;
    border: 1px solid #1e293b;
    border-radius: 14px;
    padding: 15px 8px;
    overflow-wrap: anywhere;
    transition: 0.2s;
}

.user-card:hover {
    transform: translateY(-5px);
    border-color: #6366f1;
}

.user-card img {
    width: 100px;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

.user-card h3 {
    font-size: 15px;
    margin-top: 10px;
}

.user-card p {
    font-size: 13px;
    margin-top: 7px;
    color: #cbd5e1;
}

@keyframes aylanish {
    to {
        transform: rotate(360deg);
    }
}



body {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.conteiner {
    width: 100%;
    max-width: 1000px;
    height: auto;
    min-height: 600px;
    margin: 0 auto;
}

#dark {
    display: block;
    margin: 0 0 20px auto;
}

.contarols {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.contarols button {
    flex: 1 1 180px;
}

.contarols input {
    flex: 1 1 220px;
    min-width: 0;
}

.user-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 15px;
}

.user-card {
    width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
}

.user-card img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 900px) {
    .user-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    body {
        padding: 12px;
    }

    .conteiner {
        padding: 15px 10px;
        border-radius: 15px;
    }

    .contarols {
        flex-direction: column;
    }

    .contarols button,
    .contarols input {
        width: 100%;
        flex: auto;
    }

    .user-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 25px;
    }

    .user-card {
        padding: 10px 5px;
    }

    .user-card img {
        width: 75px;
    }

    .user-card h3 {
        font-size: 13px;
    }

    .user-card p {
        font-size: 12px;
    }
}

@media (max-width: 350px) {
    body {
        padding: 8px;
    }

    .user-list {
        gap: 8px;
    }

    .user-card img {
        width: 60px;
    }
}

    </style> `
    }


    else {
        document.head.innerHTML = `<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: #1e293b;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background-color: #f1f5f9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.conteiner {
    width: 1000px;
    height: 570px;
    background-color: #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
    padding: 15px;
    margin-top: 70px;
    border-radius: 20px;
}

h1 {
    font-size: 26px;
    color: #0f172a;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 19px;
}

.contarols {
    display: flex;
    gap: 20px;
}

button {
    background-color: #4f46e5;
    border: none;
    padding: 15px;
    color: white;
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    transform: translateY(-5px);
    background-color: #4338ca;
}

input {
    flex: 1;
    min-width: 220px;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    outline: none;
    background: #f8fafc;
    color: #1e293b;
}

input:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
}

input::placeholder {
    color: #94a3b8;
}

.loader {
    display: none;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin: 10px 0 16px;
    padding: 30px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #4f46e5;
    font-size: 16px;
    font-weight: bold;
}

.spinner {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: #4f46e5;
}

.spinner::before {
    content: "";
    width: 25px;
    height: 25px;
    border: 4px solid #e2e8f0;
    border-top-color: #4f46e5;
    border-radius: 50%;
    animation: aylanish 0.7s linear infinite;
}

#dark {
    width: 100px;
    height: 40px;
    padding: 0;
    background-color: #6366f1;
    margin-bottom: 20px;
    margin-left: 800px;
}


@keyframes aylanish {
    to {
        transform: rotate(360deg);
    }
}

.user-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-around;
    text-align: center;
    margin-top: 39px;
}

.user-card {
    width: 150px;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 8px;
    transition: 0.3s;
}

.user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.user-card img {
    width: 100px;
    border-radius: 8px;
}

.user-card h3 {
    color: #0f172a;
    margin-top: 8px;
}

.user-card p {
    color: #64748b;
    margin-top: 5px;
}


body {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
}

.conteiner {
    width: 100%;
    max-width: 1000px;
    height: auto;
    min-height: 600px;
    margin: 0 auto;
}

#dark {
    display: block;
    margin: 0 0 20px auto;
}

.contarols {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.contarols button {
    flex: 1 1 180px;
}

.contarols input {
    flex: 1 1 220px;
    min-width: 0;
}

.user-list {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 15px;
}

.user-card {
    width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
}

.user-card img {
    max-width: 100%;
    height: auto;
}

@media (max-width: 900px) {
    .user-list {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 600px) {
    body {
        padding: 12px;
    }

    .conteiner {
        padding: 15px 10px;
        border-radius: 15px;
    }

    .contarols {
        flex-direction: column;
    }

    .contarols button,
    .contarols input {
        width: 100%;
        flex: auto;
    }

    .user-list {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 25px;
    }

    .user-card {
        padding: 10px 5px;
    }

    .user-card img {
        width: 75px;
    }

    .user-card h3 {
        font-size: 13px;
    }

    .user-card p {
        font-size: 12px;
    }
}

@media (max-width: 350px) {
    body {
        padding: 8px;
    }

    .user-list {
        gap: 8px;
    }

    .user-card img {
        width: 60px;
    }
}
    </style> `
    }
});