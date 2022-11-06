const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greetings = document.querySelector("#greeting");

function handleLogin(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem("username", userName);
  loginForm.classList.add("hidden");
  paintGreeting(userName);
}

function paintGreeting(userName) {
  greetings.innerText = `Hello ${userName}`;
  greetings.classList.remove("hidden");
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", handleLogin);
} else {
  paintGreeting(savedUsername);
}
