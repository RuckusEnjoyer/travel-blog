const logoutHandler = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
    if(response.ok){
        document.location.replace('/login');
    } else {
        alert('Failed to log out');
    }
}

const logout = document.querySelector('#logout');
if(logout){
    logout.addEventListener('click', logoutHandler);
}