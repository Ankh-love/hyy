document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("background-music");
    var playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = 'none'; // 隐藏按钮
    });

    music.volume = 0.1;  // 控制音量
});
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("background-music");
    var playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = 'none'; // 隐藏按钮
    });

    music.volume = 1;  // 控制音量
});
