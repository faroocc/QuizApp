class Music {
    constructor(artname, musicname,musicfoto,musicSes) {
        this.artname = artname,
        this.musicname = musicname,
        this.musicfoto = musicfoto,
        this.musicSes = musicSes
           }
    getName() {
        return this.artname + "-" + this.musicname
    }
        
}
class MusicPlayer{
    constructor(musicList){
        this.musicList=musicList;
        this.musicIndex=0;
    }
    getMusic(){
        return this.musicList[this.musicIndex]
    }
}

const musicList = [
    new Music("Dolu Kadehi Ters Tut", "Madem","madem.png","madem.mp3"),
    new Music("Teoman", "Renkli Dünyalar Oteli","teoman.jpeg"),
    new Music("Mor ve Ötesi", "Oyunbozan","oyunbozan.png"),
    new Music("Duman", "Yürek","Duman.png"),
]