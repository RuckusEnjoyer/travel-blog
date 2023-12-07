
const loginFormHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector("#username-login").value;
  const password = document.querySelector("#password-login").value;

  if (username && password) {
    
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({username, password} ),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      const errorMessageElement = document.getElementById('error-login');
      errorMessageElement.textContent = 'Username or password is incorrect';
    }
  }
};

const login = document.querySelector(".login-form");
if (login) {
  login.addEventListener("submit", loginFormHandler);
}
