const newLocation = async (event) => {
    event.preventDefault();
    const location_name = document.querySelector("#location-name").value.trim();
    if (location_name) {
        const response = await fetch("/api/locations", {
            method: "POST",
            body: JSON.stringify({ location_name }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/locations");
        } else {
            alert("Failed to create location");
        }
    }
}   
document.querySelector(".new-location-form").addEventListener("submit", newLocation);