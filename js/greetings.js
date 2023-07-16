const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const nameElement = document.querySelector("#username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    var today = new Date();
    var currHr = today.getHours();

    nameElement.innerText = username;

    if (currHr < 12) {
      greeting.innerText = 'Good Morning, ';
      greeting.appendChild(nameElement);
    } else if (currHr < 18) {
      greeting.innerText = 'Good Afternoon, ';
      greeting.appendChild(nameElement);
    } else {
      greeting.innerText = 'Good Evening, ';
      greeting.appendChild(nameElement);
    }

    greeting.classList.remove(HIDDEN_CLASSNAME);
    nameElement.innerText = username;
    nameElement.addEventListener("click", onClickName);
}

function onClickName() {
    greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginInput.focus();
    loginForm.addEventListener("submit", onLoginSubmit);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else { 
    paintGreetings(savedUsername);
}