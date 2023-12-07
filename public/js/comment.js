// // const commentHandler = async (event) => {
// //     event.preventDefault();
  
// //     // const blogElement = document.getElementsByClassName('blog')
// //     // console.log(blogElement)

// //     const blog_id = event.target.dataset.blogId
// //     console.log(blog_id)
// //     const comment_content = document.querySelector('#comment-content').value.trim();
// //     const user_id = sessionStorage.getItem('user_id')
  
// //     if (comment_content) {
// //       const response = await fetch('/api/comments', {
// //         method: 'POST',
// //         body: JSON.stringify({ blog_id, comment_content, user_id }),
// //         headers: { 'Content-Type': 'application/json' },
// //       });
  
// //       if (response.ok) {
// //         // document.location.reload();
// //       } else {
// //         alert('Failed to create comment');
// //       }
// //     }
// //   };
  
// //   document
// //     .querySelector('.new-comment-form')
// //     .addEventListener('submit', commentHandler);

// const commentHandler = async (event) => {
//   event.preventDefault();

//   const blogId = event.target.window.parent
//   console.log(blogId + "this is the blog id")
//   const comment_content = event.target.querySelector('#comment-content').value.trim();
//   // const user_id = sessionStorage.getItem('user_id');

//   if (comment_content) {
//     const response = await fetch(`${window.location.origin}/api/comments`, {
//       method: 'POST',
//       body: JSON.stringify({ blog_id: blogId, comment_content }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       // document.location.reload();
//     } else {
//       alert('Failed to create comment');
//     }
//   }
// };

// document.addEventListener('submit', (event) => {
//   if (event.target.classList.contains('.new-comment-form')) {
//     commentHandler(event);
//   }
// });


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