const commentHandler = async (event) => {
  event.preventDefault();
  try {
    const content = document.querySelector('#comment-content').value.trim();

    // Get the form element that the event was triggered on
    const formElement = event.target;

    // Get the parent section element
    const sectionElement = formElement.parentNode;

    // Get the blog_id from the data-id attribute
    const blog_id = sectionElement.getAttribute('data-id');

    if (content && blog_id) {
      const response = await fetch(
        `/api/comments/`,
        {
          method: 'POST',
          body: JSON.stringify({ content, blog_id }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        document.location.reload();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

//Event Listeners
document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentHandler);