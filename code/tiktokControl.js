const api = new TikTokAPI();

api.login({
    username: 'toan_tok',
    password: 'Tiktok@0306'
}).then(() => {
    api.getFollowers().then((followers) => {
        const subscribedFollowers = followers.data.filter((follower) => {
            return follower.is_following;
        });

        const sortedFollowers = subscribedFollowers.sort((a, b) => {
            return b.heart_count - a.heart_count;
        });

        const topFollowers = sortedFollowers.slice(0, 10);

        const topNames = topFollowers.map((follower) => {
            return follower.nickname;
        });

        const topNamesText = topNames.join(', ');

        console.log('Top followers by heart count:', topNamesText);

        const avatarContainer = document.getElementById('avatar-container');

        topFollowers.forEach((follower) => {
            const avatarImg = document.createElement('img');
            avatarImg.src = follower.avatar_medium;
            avatarContainer.appendChild(avatarImg);
        });
    }).catch((error) => {
        console.error(error);
    });
}).catch((error) => {
    console.error(error);
});
