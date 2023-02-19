const callAPI = async () => {
    const response = await fetch('https://www.boredapi.com/api/activity', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log('JSON:', myJson);
    document.getElementById("activity").innerText = `TODO: ${myJson.activity}`
}