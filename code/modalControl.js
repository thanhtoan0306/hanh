// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByTagName("button")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        temp();

}

function temp() {
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fbfcab7ef3msh144c993bb3e0a00p1e7437jsn8e61ebf5fabb',
            'X-RapidAPI-Host': 'tiktok-scraper2.p.rapidapi.com'
        }
    };

    fetch('https://tiktok-scraper2.p.rapidapi.com/video/comments?video_url=https%3A%2F%2Fwww.tiktok.com%2F%40he200496%2Fvideo%2F7217082640862678299', options2)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
}