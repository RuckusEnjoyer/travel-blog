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
    const response = await fetch(`/api/location?search=${searchQuery}`);
    const data = await response.json();
    let matchId = null
  
    // Check if any locations match the search query
    for(let i = 0; i < data.length; i++){
      if(data[i].name === searchQuery){
        matchId = data[i].id
        break;
      }
    }
    if (matchId) {
      // Redirect the user to the location page with the ID in the URL
      window.location.replace(`/locations/${matchId}`);
    } else {
      alert('No matching locations found.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

