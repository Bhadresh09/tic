document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("play-button");
    const welcomeAudio = document.getElementById("welcome-audio");

    // Play welcome sound
    welcomeAudio.play();

    playButton.addEventListener("click", function () {
        // Redirect to the game page (index.html)
        window.location.href = "game.html";
    });
});
