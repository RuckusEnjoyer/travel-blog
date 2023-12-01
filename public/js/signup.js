const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    
  console.log(username, password, email)
    if (username && password && email) {
        console.log("Hello")
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify([ username, email, password ]),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  }

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
