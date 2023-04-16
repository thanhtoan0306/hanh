// Get the modal
var modalGift = document.getElementById("myModalGift");

// Get the button that opens the modal
var btn = document.getElementsByTagName("button")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModalGift() {
    console.log(12);

    modalGift.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModalGift() {
    console.log(18);
    modalGift.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modalGift.style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modalGift.style.display = "none";
//     }
// }