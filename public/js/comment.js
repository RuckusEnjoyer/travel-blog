const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = event.target.getAttribute('data-id');
    const comment_text = document.querySelector('#comment_text').value.trim();
  
    if (comment_text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);