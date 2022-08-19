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
/**renders the map from google maps api with the iss location at the centre and then creates a marker which displas as an image of the iss */
function init(pos) {
    // renders map
    const map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15,
    });
    // displays the location marker on the map
    const image = 'https://user-images.githubusercontent.com/1794026/81976251-43c99800-95f6-11ea-9cfe-b3e1520f31f7.png'
    const marker = new google.maps.Marker({
        map,
        position: pos,
        icon: image,
    });

    /**reloads the page every 30 seconds to track the ISS */
    setTimeout(() => {
        document.location.reload();
    }, 30000);

}