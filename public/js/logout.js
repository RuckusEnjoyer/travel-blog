const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        console.log(response)
        document.location.replace('/');
    } else {
        const errorMessageElement = document.getElementById('error-message');
        errorMessageElement.textContent = 'Failed to log out';
    }
}


    document.querySelector("#logout").addEventListener('click', logoutHandler);
