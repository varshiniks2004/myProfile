function initGeolocation() {
    const locationMessage = document.getElementById("location-message");
    if (!locationMessage) return;

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // Optional: fetch city name using a reverse geocoding API.
                // Since APIs require keys, we will just show coords or a mock message.
                locationMessage.textContent = `You are browsing from approximately Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`;
            },
            (error) => {
                console.log("Geolocation error or denied", error);
            }
        );
    }
}
