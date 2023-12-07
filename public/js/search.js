// Get the search form element
const searchForm = document.getElementById('search-form');

// Add event listener to the search form
searchForm.addEventListener('submit', async function(event) {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the search query entered by the user
  const searchQuery = document.getElementById('search-input').value;
 

  try {
    // Make a GET request to the server to search for the location
    const response = await fetch(`/api/location/search?search=${searchQuery}`);
    const data = await response.json();
   
  console.log(data)
  
    // Check if any locations match the search query

    if (data.id) {
      // Redirect the user to the location page with the ID in the URL
      window.location.replace(`/locations/${data.id}`);
    } else {
      const errorMessageElement = document.getElementById('error-look');
      errorMessageElement.textContent = 'Please enter a valid location';
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

