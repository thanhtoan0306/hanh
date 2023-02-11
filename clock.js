function clock() {
    var date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    hour = appendZero(hour);
    min = appendZero(min);
    sec = appendZero(sec);
    console.log(hour, min, sec);
    document.getElementById("clock").innerText = `${hour}:${min}:${sec}`
    setTimeout(clock, 1000);
}

function appendZero(t) {
    if (t < 10) {
        return "0" + t;
    }
    else {
        return t;
    }
}
clock();