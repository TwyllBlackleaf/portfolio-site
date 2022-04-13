// A little trick to keep spam bots from scraping my contact info by inserting it on a delay
// using JavaScript instead of putting it in the raw HTML.
// Credit to: https://joeczubiak.com/my-secret-to-putting-my-email-on-my-website-without-getting-spammed/

const setContactInfo = function() {
    const emailLink = document.getElementById("email-link");
    emailLink.setAttribute("href", "mailto:katiebethdixon@gmail.com");
    emailLink.innerText = "katiebethdixon@gmail.com";

    const phoneSpan = document.getElementById("phone-text");
    phoneSpan.innerText = "757-477-9507";
}

setInterval(setContactInfo, 1000);