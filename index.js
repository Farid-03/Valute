/*   fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(function (data) {
        return data.json()
    }).then(function (data) {
        console.log(data);
    }) 
  */

async function getCurrencies () {
    const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await responce.json();
    
    const usdRate = data.Valute.USD.Value.toFixed(2);
    const eurRate = data.Valute.EUR.Value.toFixed(2);

    // OTOBRAZIT eti danniye na stranice

    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}

getCurrencies();