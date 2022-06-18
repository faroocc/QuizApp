class Soru {
    constructor(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    }
    cevapKontrol(cevap){
        return cevap === this.dogruCevap
    }
}

let sorular = [
    new Soru("1-Çalan şarkının adı nedir?", { a: "Dolu kadehi ters tut - Madem", b: "Teoman-papatya", c: "İsmail yk-nerdesin",d:"Adamlar-Koca Yaşlı Şişko Dünya" }, "a"),
    new Soru("2-Çalan şarkının adı nedir?", {a: "Dolu kadehi ters tut - Madem", b: "Teoman-papatya", c: "İsmail yk-nerdesin",d:"Adamlar-Koca Yaşlı Şişko Dünya" },  "c"),
    new Soru("3-Çalan şarkının adı nedir?", {a: "Dolu kadehi ters tut - Madem", b: "Teoman-papatya", c: "İsmail yk-nerdesin",d:"Adamlar-Koca Yaşlı Şişko Dünya" },  "c"),
    new Soru("4-Çalan şarkının adı nedir?", {a: "Dolu kadehi ters tut - Madem", b: "Teoman-papatya", c: "İsmail yk-nerdesin",d:"Adamlar-Koca Yaşlı Şişko Dünya" },  "c")
]