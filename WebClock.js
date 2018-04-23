"use strict";
(function() {
    window.onload = function() {
        this.setInterval(moveHands, 1000);
    }

    function moveHands() {
        let time = new Date();
        let secondsHand = document.querySelector("#sec-hand");
        let degrees = 90 + (time.getSeconds() / 60) * 360;
        secondsHand.style.transform = `rotate(${degrees}deg)`;

        let minutesHand = document.querySelector("#min-hand");
        let minutes = 90 + (time.getMinutes() / 60) * 360;
        minutesHand.style.transform = `rotate(${minutes}deg)`;

        let hourHand = document.querySelector("#hour-hand");
        let hours = 90 + (time.getHours() / 12) * 360;
        hourHand.style.transform = `rotate(${hours}deg)`;
    }
})();