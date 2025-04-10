let alis= document.getElementById("usdalis").textContent
let satis= document.getElementById("usdsatis")
const apiUrl='https://min-api.cryptocompare.com/data/price?fsym='
const apiKey='fd63909f08bcb113fbdd5c62beff8c0a94dcc8d66625ff9acf570973792cd9a1';
const dolar="USD"
const lira="TRY"
const avro="EUR"

function dovizAlUsd(){

fetch(apiUrl + dolar + "&tsyms=" + lira)
    .then(responce=>responce.json())
    .then(data=>{
        
        usdalis.innerHTML=data[lira]
        usdsatis.innerHTML=data[lira]
    })
    .catch(error=>alert("sfgdsgdsgsgsafda"))

}

function dovizAlEuro(){
    fetch(apiUrl + avro + "&tsyms=" + lira)
    .then(responce=>responce.json())
    .then(data=>{
        euroalis.innerHTML=data[lira]
        eurosatis.innerHTML=data[lira]

    })
    .catch(error=>alert("yxcbölmhjbnknlknlknlkn"))
}

window.onload=function(){
    dovizAlUsd();
    dovizAlEuro();
}
