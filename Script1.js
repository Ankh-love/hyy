document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("background-music");
    var playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = 'none'; // ���ذ�ť
    });

    music.volume = 0.1;  // ��������
});
document.addEventListener("DOMContentLoaded", function () {
    var music = document.getElementById("background-music");
    var playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function () {
        music.play();
        playButton.style.display = 'none'; // ���ذ�ť
    });

    music.volume = 1;  // ��������
});
