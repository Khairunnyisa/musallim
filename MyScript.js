const city = 1211;
const date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
const now = yyyy + '-' + mm + '-' + dd;

const number = 1;

window.onload = function() {
    getData();
}

function getData(){
    fetch('https://api.banghasan.com/quran/format/json/surat')
    .then(function (response) {
        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }
        return response.json();
    })
.then(function(data){
    displayData(data);
})
.catch(function(error){
    console.log("terjadi kesalahan", error);
})
}

function displayData(data) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "",

    data.hasil.forEach(function(surat){
        var suratDiv = document.createElement('div');
        suratDiv.classList.add('surah');
        suratDiv.className = 'container'

        var namaSurah = document.createElement('h2');
        namaSurah.textContent = surat.nama;
        namaSurah.className = "nama-surah";

        var hr = document.createElement('hr');
                hr.className = 'hr';

        var namaAsma = document.createElement('p');
        namaAsma.textContent = surat.asma;
        namaAsma.className = "nama-asma";

        var namaType = document.createElement('p');
        namaType.textContent = surat.type;
        namaType.className = "nama-type";

        // var namaKeterangan = document.createElement('p');

        
        
       
        // namaKeterangan.textContent = surat.keterangan;

        suratDiv.appendChild(namaSurah);
        suratDiv.appendChild(hr);
        suratDiv.appendChild(namaAsma);
        suratDiv.appendChild(namaType);
        // suratDiv.appendChild(namaKeterangan);

        resultDiv.appendChild(suratDiv);

        
    })
}









