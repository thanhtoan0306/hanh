var countDownDate = new Date("Apr 20, 2023 00:00:00").getTime();

var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer")
        .innerHTML =
        '<div>' + d + '<span>Ngày</span></div>' +
        '<div>' + h + '<span>Giờ</span></div>' +
        '<div>' + m + '<span>Phút</span></div>' +
        '<div>' + s + '<span>Giây</span></div>';
    // Display the result in the element with id="timer"
    // document.getElementById("timer").innerHTML = "Đếm ngược: " + days + " ngày " + hours + " giờ "
    //     + minutes + " phút " + seconds + " giây";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = `
        <image src="images/doraemon4.jpeg" />
        <image src="images/doraemon3.gif" />
        <image src="images/doraemon5.gif" />
        `;
    }
}, 1000);