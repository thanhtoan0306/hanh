const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fbfcab7ef3msh144c993bb3e0a00p1e7437jsn8e61ebf5fabb',
        'X-RapidAPI-Host': 'tiktok82.p.rapidapi.com'
    }
};

fetch('https://tiktok82.p.rapidapi.com/getProfile?username=he200496', options)
    .then(response => response.json())
    .then(response => console.log('user',response))
    .catch(err => console.error(err));

// fetch('https://tiktok82.p.rapidapi.com/getVideoComments?video_id=7216142041615486234', options)
//     .then(response => response.json())
//     .then(response => console.log('video: ',response))
//     .catch(err => console.error(err));


// fetch('https://tiktok82.p.rapidapi.com/getUserVideos?user_id=6524313953195458562&secUid=MS4wLjABAAAAGUzY1LhWb54rdZhSqhJv4KfdFlSRrAoA3gBFTph3rl_x1bBEKQv1QdHK9gOvyMzU', options)
//     .then(response => response.json())
//     .then(response => console.log('video-user: ',response))
//     .catch(err => console.error(err));

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'fbfcab7ef3msh144c993bb3e0a00p1e7437jsn8e61ebf5fabb',
//         'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
//     }
// };

// fetch('https://tiktok-all-in-one.p.rapidapi.com/user/follower?id=6524313953195458562&min_time=1640026682', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// id: // id: 6571296006024101889
