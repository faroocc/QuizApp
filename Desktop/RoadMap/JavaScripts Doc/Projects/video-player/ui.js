class UI {
    constructor() {
        this.questionText = document.querySelector("#question-text")
        this.next =document.querySelector("#next")
        this.prev =document.querySelector("#prev")
        this.option_list=document.querySelector(".option_list")
        this.correction=` <div class="icon"><i class="fas fa-check"></i></div>`,
        this.incorrection = ` <div class="icon"><i class="fas fa-times"></i></div>`,
        this.play = document.querySelector("#play"),
        this.container = document.querySelector(".container")
      
       
    }

    soruGoster(soru) {
        let question = `<span>${soru.soruMetni}</span>`;
        document.querySelector("#question-text").innerHTML = question;
        let options = "";


    for (let cevap in soru.cevapSecenekleri) {
        options += `
        <div class="option ">
        <span><b>${cevap}</b>:${soru.cevapSecenekleri[cevap]}</span>
        <div class="icon"><i class=""></i></div>
        </div>
    `;
    }
    this.option_list.innerHTML=options;

    const option =this.option_list.querySelectorAll(".option");

    for(let opt of option){
        opt.setAttribute("onclick","optionSelected(this)")
    }

    }

    musicOpen(music){
         let musicFoto = `<img src="img/${music.musicfoto}"class="card-img img-fluid " id="cardfoto" alt="...">
        <audio id="audio" src="music/${music.musicSes}"></audio>`;
        document.querySelector("#musicDetails").innerHTML = musicFoto;
        
    }
    
}
