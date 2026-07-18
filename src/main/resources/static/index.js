document.addEventListener('DOMContentLoaded', function() {
    var audio = document.createElement('audio');
    audio.id = 'bg-music';
    audio.loop = true;
    
    var source = document.createElement('source');
    source.src = 'your-audio-file.mp3';
    source.type = 'audio/mpeg';
    
    audio.appendChild(source);
    document.body.appendChild(audio);

    document.addEventListener('click', function() {
        audio.play();
    }, { once: true });
});