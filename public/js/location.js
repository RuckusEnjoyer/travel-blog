//GRABS ALL LOCATIONS FROM API
const newLocation = async (event) => {
    event.preventDefault();
    const location_name = document.querySelector("#location-name").value.trim();
    if (location_name) {
        const response = await fetch("/api/location", {
            method: "POST",
            body: JSON.stringify({ location_name }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/locations");
        } else {
            const data = await response.json();
            if (data.error === 'Location already exists') {
                const errorMessageElement = document.getElementById('error-location');
                errorMessageElement.textContent = 'Location already exists';
                
            }
        }
    }
}   

//GET LOCATION ID FOR LINKS
const locationLinkHandler = async (event) => {
    const link = `/locations/${event.target.id}`
    console.log(link)
    window.location.href = link
    
}

//
document.querySelectorAll(".locBtn").forEach((element) => {
    element.addEventListener('click', locationLinkHandler)
})


document.querySelector(".new-location-form").addEventListener("submit", newLocation);