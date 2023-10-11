let track_index = 0;
let isPlaying = false;
let isRepeat = false;
let isCurtida = false;
let updateTimer;

function salvar(){
    localStorage.audiosave = document.getElementsByTagName("audio").value;
}

function carregar(){
    if(localStorage.audiosave){
        document.getElementsByTagName("audio").value = localStorage.audiosave;
    }
    
}

let track_art = document.querySelector('.img1-img-playerbar'),
    track_name = document.querySelector('.a1-nomemusica-playerbar'),
    track_artist = document.querySelector('.a1-cantormusica-playerbar');

let pctinpctbtn = document.querySelector('.i1-cnntdisp-playerbar');

let playpause_btn = document.querySelector('.div4-playpausetrack-playerbar'),
    playmsc_btn = document.querySelector('.play'),
    pausemsc_btn = document.querySelector('.pause')
    next_btn = document.querySelector('.div4-nexttrack-playerbar'),
    prev_btn = document.querySelector('.div4-prevtrack-playerbar'),
    repeatIcon = document.querySelector('.bi-repeat');

let seek_slider = document.querySelector('.seek-slider'),
    progressBar = document.querySelector('.div4-progress-playerbar');


let curr_time = document.querySelector('.p1-currenttime-playerbar'),
    total_duration = document.querySelector('.p1-totalduration-playerbar');

let volume_slider = document.querySelector('.volume-slider'),
    volume_range = document.querySelector('.div4-volumerange-playerbar');


let volumeup = document.querySelector('.i1-volup-playerbar'),
    volumedown = document.querySelector('.i1-voldown-playerbar'),
    volumute = document.querySelector('.i1-volmute-playerbar');

let curr_track = document.querySelector('audio');

let btncurtida = document.querySelector('.i1-curtida-playerbar'),
    btndescurtida = document.querySelector('.i1-descurtida-playerbar');

const music_list = [
    {
        img : './sounds/jpg/capa2.jpg',
        name : 'Moskau',
        artist : 'Dschinghis Khan',
        music : './sounds/mp3/sound1.mp3'
    },
    {
        img : './sounds/jpg/capa1.jpg',
        name : 'Hino da Independência',
        artist : 'Orquestra musical do corpo de Bombeiros',
        music : './sounds/mp3/sound3.mp3'
    },
    {
        img : './sounds/jpg/capa7.jpg',
        name : 'Vestido de seda',
        artist : 'Teodoro e Sampaio',
        music : './sounds/mp3/sound13.mp3'
    },
    {
        img : './sounds/jpg/capa3.jpg',
        name : 'Erika',
        artist : 'Herms Niel',
        music : './sounds/mp3/sound2.mp3'
    },
    {
        img : './sounds/jpg/capa4.jpg',
        name : 'RUSH E',
        artist : 'Neil Peart',
        music : './sounds/mp3/sound4.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 42 - Ó minha alma, por que te abates?',
        artist : 'Douglas Alves',
        music : './sounds/mp3/sound5.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 76 - Cristo Jesus Sua mão me dá',
        artist : 'Douglas Alves',
        music : './sounds/mp3/sound6.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 322 - Vem, Rei eterno',
        artist : 'Fabiana Paula',
        music : './sounds/mp3/sound7.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 293 - Tu és Oleiro',
        artist : 'Fabiana Paula',
        music : './sounds/mp3/sound8.mp3'
    },
    {
        img : './sounds/jpg/capa12.jpg',
        name : 'Sete Palavras',
        artist : 'Pedro Bento & Zé da Estrada',
        music : './sounds/mp3/sound22.mp3'
    },
    {
        img : './sounds/jpg/capa10.jpg',
        name : 'Nocturnes Op. 9 : No. 2 In E Flat Major',
        artist : 'Frédéric Chopin',
        music : './sounds/mp3/sound20.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 247 - Se fores tentado',
        artist : 'Fabiana Paula',
        music : './sounds/mp3/sound9.mp3'
    },
    {
        img : './sounds/jpg/capa8.png',
        name : 'Telefone Mudo',
        artist : 'Trio parada dura',
        music : './sounds/mp3/sound15.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 238 - Teu servo ouve; fala, Senhor',
        artist : 'Fabiana Paula',
        music : './sounds/mp3/sound10.mp3'
    },
    {
        img : './sounds/jpg/capa11.jpg',
        name : 'Uma Música, uma História: Tapera Belha',
        artist : 'Marcos e Matteus',
        music : './sounds/mp3/sound21.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 220 - Cristo voltará',
        artist : 'Douglas Alves',
        music : './sounds/mp3/sound11.mp3'
    },
    {
        img : './sounds/jpg/capa6.png',
        name : 'Estrada da Vida',
        artist : 'Milionário e José Rico',
        music : './sounds/mp3/sound19.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 201 - Deus nos guarde...',
        artist : 'Fabiana Paula',
        music : './sounds/mp3/sound12.mp3'
    },
    {
        img : './sounds/jpg/capa8.png',
        name : 'As andorinhas',
        artist : 'Trio parada dura',
        music : './sounds/mp3/sound14.mp3'
    },
    {
        img : './sounds/jpg/capa9.jpg',
        name : 'Milionário & Marciano – Pot-Pourri',
        artist : 'Milionário & Marciano',
        music : './sounds/mp3/sound16.mp3'
    },
    {
        img : './sounds/jpg/capa5.jpg',
        name : 'Hino 259 - Só triunfará o de sincero coração',
        artist : 'Douglas Alves',
        music : './sounds/mp3/sound17.mp3'
    },
    {
        img : './sounds/jpg/capa6.png',
        name : 'Fim da Estrada',
        artist : 'Milionário e José Rico',
        music : './sounds/mp3/sound18.mp3'
    }
];

loadTrack(track_index);
function loadTrack(track_index){
    clearInterval(updateTimer);
    reset()

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.src = music_list[track_index].img;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
    seek_slider.value = 0;
    pauseTrack()
}

function repeatTrack(){
    isRepeat ? pauseRepeat() : playRepeat();
}

function playRepeat(){
    isRepeat = true;
    repeatIcon.classList.add('randomActive');
}

function pauseRepeat(){
    isRepeat = false;
    repeatIcon.classList.remove('randomActive');
}

function randomTack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

playpause_btn.addEventListener('click', playpauseTrack);

function playTrack(){
    curr_track.play();
    isPlaying = true;
    playmsc_btn.style.display = 'none';
    pausemsc_btn.style.display = 'block';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    pausemsc_btn.style.display = 'none';
    playmsc_btn.style.display = 'block';
}

/* Next Prev Track */

function nextTrack(){
    if (track_index < music_list.length - 1 && isRepeat === false){
        track_index += 1;
    }else if(track_index < music_list.lenght - 1 && isRepeat === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if (track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

next_btn.addEventListener('click', nextTrack);

prev_btn.addEventListener('click', prevTrack);

function setVolume(){
    curr_track.volume = volume_slider.value / 100;

    if (volume_slider.value <= 50 && volume_slider.value >=2){
        volumeup.style.display = 'none';
        volumedown.style.display = 'block';
        volumute.style.display = 'none';
        document.getElementById("audio-player").muted = false;
    }else if(volume_slider.value <= 1){
        volumeup.style.display = 'none';
        volumedown.style.display = 'none';
        volumute.style.display = 'block';
        document.getElementById("audio-player").muted = true;
    }else{
        volumeup.style.display = 'block';
        volumedown.style.display = 'none';
        volumute.style.display = 'none';
        document.getElementById("audio-player").muted = false;
    }
}

volume_slider.addEventListener('click', setVolume);

curr_track.addEventListener('timeupdate', function() {
    var pgs = 100 / curr_track.duration * curr_track.currentTime;
    seek_slider.style.width = pgs + '%';
});

progressBar.addEventListener('mousedown', function(event) {
    const pos  = (event.pageX - (progressBar.offsetLeft + progressBar.offsetParent.offsetLeft)) /progressBar.offsetWidth;
    curr_track.currentTime = pos * curr_track.duration;
});

function setUpdate(){
    curr_time.textContent = segundosParaMinutos(Math.floor(curr_track.currentTime));
    total_duration.textContent = segundosParaMinutos(Math.floor(curr_track.duration));
}

/* Converter Seg para Min */

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return '0' + campoMinutos + ':' + campoSegundos;
}

/* Área Curtida */

function curtidaTrack(){
    btncurtida.style.display = 'none';
    btndescurtida.style.display = 'block';
}

function dcurtidaTrack(){
    btndescurtida.style.display = 'none';
    btncurtida.style.display = 'block';
}

btncurtida.addEventListener('click', curtidaTrack);

btndescurtida.addEventListener('click', dcurtidaTrack);
