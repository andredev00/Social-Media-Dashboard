function toggleDemo() {
    halfmoon.toggleDarkMode();
}

function functionTwo () {
    var url = "https://www.instagram.com/andrefr770";
    request.get(url, function (err, response, body) {
        if (response.body.indexOf(("meta property=\"og:description\" content=\"")) != -1) {
            console.log("followers:", response.body.split("meta property=\"og:description\" content=\"")[1].split("Followers")[0])
        }
    });
}