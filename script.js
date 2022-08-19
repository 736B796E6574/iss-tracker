/**retrieves the current location for ISS via an API call then calls the map initialisation function using the returned geocode */
async function issLocation() {
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544")
    const data = await response.json();
    let issPos = {
        lat: data.latitude,
        lng: data.longitude
    }
    console.log(issPos)
    init(issPos);
}