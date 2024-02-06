alert("Selamat Datang di Ticket App \n Yang Bisa Masuk umur 13 Tahun Keatas");

const umur = prompt ("Masukkan Umur Anda");

if (umur >= 13) {
    const studio = prompt("Masukkan Studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C")

    if (studio == "A" || studio == "B" || studio == "C") {
        const film =  prompt("Pilih Film \n 1 : Avengers \n 2 : Star Wars \n 3 : Justice League")
        let namaFilm
        if (film == "1") {
            namaFilm = "Avengers";
        }else if  (film == "2") {
            namaFilm = "Star Wars";
        }else if (film == "3") {
            namaFilm = "Justice League"
        }
            
    

        if (film == "1" || film == "2" || film == "3" ) {
            const nama = prompt("Masukkan Nama Anda");
            alert
            (`Berikut Ticket Anda! \n Nama : ${nama} \n umur : ${umur} \n Studio : ${studio} \n film : ${namaFilm}`);
        } else {
            alert("Maaf Film Yang Anda Pilih Tidak Tersedia")

        }    
            
    } else{
        alert("Anda Harus Memilih Studio")
    }

} else {
    alert("Maaf Tidak Bisa Masuk,Umur Anda Dibawah 13 Tahun")

}    
