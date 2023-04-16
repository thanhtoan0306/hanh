function downloadFile() {
    var link = document.createElement("a");
    link.setAttribute("href", "images/giftcard.png");
    link.setAttribute("download", "thanhtoan-card.png");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}