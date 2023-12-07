document.querySelectorAll('.favorite-button').forEach(button => {
    button.addEventListener('click', function() {
        const blogId = this.dataset.blogId;
        fetch('http://localhost:3001/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ blogId }),
        });
    });
});