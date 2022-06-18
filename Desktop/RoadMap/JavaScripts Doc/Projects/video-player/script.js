const quiz = new Quiz(sorular);
const ui=new UI();
const music=new MusicPlayer(musicList);

ui.soruGoster(quiz.soruGetir())
ui.musicOpen(music.getMusic())

ui.play.addEventListener("click",()=>{
    const isMusicPlay = ui.container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
})

function pauseMusic() {
    ui.container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play"
    audio.pause();
}
function playMusic() {
    ui.container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause"
    audio.play();
}

ui.next.addEventListener("click",()=>{
   quiz.soruIndex > 3 ? quiz.soruIndex =0 : quiz.soruIndex +=1;
   music.musicIndex > 3 ? music.musicIndex = 0 : music.musicIndex +=1;
    ui.soruGoster(quiz.soruGetir());
    ui.musicOpen(music.getMusic());
    
})
ui.prev.addEventListener("click",()=>{
    quiz.soruIndex <0 ? alert("İlk sorudasınız") : quiz.soruIndex -=1;
    music.musicIndex < 0 ? alert("İlk sorudasınız")  : music.musicIndex -=1;
    ui.soruGoster(quiz.soruGetir());
    ui.musicOpen(music.getMusic());
})

optionSelected =(option) =>{
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();
    let dcevap = [soru.dogruCevap]
    
     if (soru.cevapKontrol(cevap)) {
        option.classList.add("correct");
        for(let i = 0 ;i<ui.option_list.children.length; i++){
            ui.option_list.children[i].classList.add("disabled");
        }
        option.insertAdjacentHTML("beforeend",ui.correction);
        
        
    }else{
        option.classList.add("incorrect")
        for(let i = 0 ;i<ui.option_list.children.length; i++){
            ui.option_list.children[i].classList.add("disabled");
            
        }
        alert(dcevap)   
    }
    

    
} 