//alert('Hai Kamu')

//console.log("hi")

//prompt('masukan usia anda')

//==
//var usia = 26
//console.log('Hai Kamu, usia kamu adalah ' + usia)

//===
//const nilai tidak bisa diubah
//let nilai bisa diubah
//const usia = 30
//let usia = 30
//usia = 35
//console.log('Hai Kamu, usia kamu adalah ' + usia)
//alert('Hai Kamu, usia kamu adalah ' + usia)

//combine dengan promt
//let usia = prompt('berapa usia kamu?')
//alert ('usia kamu adalah ' + usia)

// === tipe data
//let nama = 'Danil natu' //string
//let usia = 19 //integer number
//let tinggiBadan = 172 //float number
//let hobi = ['Basket', 'Ngoding'] //array of string
//let tempatLahir = {provinsi: 'NTT',kota:'Kefa'} //
//let beratBadan
//let pacar = null
//console.log('Halo, usia kamu adalah ' + usia, 'nama saya ' + nama, 'tinggi badan saya ' + tinggiBadan, 'hobi saya ' + hobi, 'saya lahir di ' + tempatLahir.kota)
//alert (`nama saya ${nama} usia saya ${usia} tinggi badan${tinggiBadan}, hobi${hobi} tempat lahir ${tempatLahir.kota}, pacar ${pacar}`)

// let nama = 'Danil natu'; //string
// let usia = 19; //integer number
// let tinggiBadan = 172; //float number
// let hobi = ['Basket', 'Ngoding']; //array of string
// let tempatLahir = {provinsi: 'NTT',kota:'Kefa'}; //
// let beratBadan;
// let pacar = 2;

// if (pacar == null){
//     pacar = 'belum punya'
// } else {
//     pacar = 'udah punya'
// }

// console.log('Halo, usia kamu adalah ' + usia, 'nama saya ' + nama, 'tinggi badan saya ' + tinggiBadan, 'hobi saya ' + hobi, 'saya lahir di ' + tempatLahir.kota, 'pacar saya ' + pacar)

// switch (pacar) {
//     case 1:
//         pacar = "punya 1 aja";
//         break;
//     case 2:
//         pacar = "punya 2, aku cukup playboy";
//         break;
//     default:
//         pacar = "belum punya pacar";
//         break;
// }

// console.log('Halo, usia kamu adalah ' + usia, 'nama saya ' + nama, 'tinggi badan saya ' + tinggiBadan, 'hobi saya ' + hobi, 'saya lahir di ' + tempatLahir.kota, 'pacar saya ' + pacar)

// let saldoAwal = 50000
// let saldoTambahan = 100000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// alert (`saya memiliki saldo awal Rp${saldoAwal}, dan akan mendapatkan gaji dengan saldo tambahan sejumlah Rp${saldoTambahan}, jadi total saldo yang saya miliki sebanyak Rp.${saldoAkhir}`);

// const x = 20
// const y = 3
// const z = x * y

//===array
// let namaMahasiswa = ['Dagdag', 'Kali', 'Supri']
// namaMahasiswa.push('cinta', 'bakar')
// namaMahasiswa.shift() //menghapus value data pertama
// namaMahasiswa.pop() //menghapus value data terakhir
// alert (namaMahasiswa)

// === for loop
// for (let i = 1; i <= 10; ++i){
//     console.log('dasar javascript')
// }

// const namaMahasiswa=['Dagdag', 'Kali', 'Supri', 'Cinta', 'Bakar'];
// for (let i = 0; i < namaMahasiswa.length; ++i){
//     console.log (`NIM :${i+1} Nama : ${namaMahasiswa[i]}`);
// }

// === while
// let i = 0
// while (i < 5){
//     i++
//     console.log('dasar javascript')
// }

console.log(document.title)
document.title = 'Pemrograman Web'
//console.log(document.title)

console.log(document.body)

const body = document.body //let
body.append('Hello World!') //body = 'Hello World!)

const h1 = document.createElement('h1')
h1.textContent = 'Ini adalah baris Heading 1'

body.append(h1)

const variabelPertama = document.createElement('p')
variabelPertama.innerHTML = '<marquee> Ini merupakan baris paragraph</marquee>'
body.append(variabelPertama)

const variabelKedua =  document.createElement('b')
variabelKedua.innerText = 'Ini merupakan Baris dengan tulisan bold'
body.append(variabelKedua)

const variabelKetiga =  document.createElement('p')
variabelKetiga.innerHTML = '<marquee width="60%" direction="up" height="100px"> Ini merupakan baris paragraph</marquee>'
body.append(variabelKetiga)
// marquee untuk menggerakankan text
// memberikan bold pada text

const btn1 = document.getElementById('btn1')
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'tomato'

const btn2 = document.querySelector('.btn2')
console.log(btn2)

function gantiwarna(){
    btn3.style.background = 'aqua'
    btn3.style.fontSize = '20px'
}

function ubahText(){
    btn4.textContent = 'Button Text Berubah'
}

