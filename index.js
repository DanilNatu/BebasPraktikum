// Asynchronous
function satu(){
    console.log("satu");
}

function dua(){
    console.log("function 2 akan dieksekusi");
    setTimeout(() => {
        console.log("dua");
    }, 3000);
}

function tiga() {
    console.log("tiga");
}

satu();
dua();
tiga();

// ===

function callback(){
    console.log("Hello World");
}

function buttonClick(){
    setTimeout(function () {
        callback();
    }, 5000);

//setInterval(function(){
//     callback();
// }, 2000);

console.log("Succes Click Button");
}