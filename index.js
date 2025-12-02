let guestScore = 0;
let homeScore = 0;
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

function updateHomeScore1(){
    homeScore += 1;
    homeEl.textContent = homeScore;
}

function updateHomeScore2(){
    homeScore += 2;
    homeEl.textContent = homeScore;
}
function updateHomeScore3(){
    homeScore += 3;
    homeEl.textContent = homeScore;
}
function updateGuestScore1(){
    guestScore += 1;
    guestEl.textContent = guestScore;
}
function updateGuestScore2(){
    guestScore += 2;
    guestEl.textContent = guestScore;
}
function updateGuestScore3(){
    guestScore += 3;
    guestEl.textContent = guestScore;
}