

var text = '';
function findCountry(){
    text = document.getElementById('country-search').value;
    connectCountry(text);

}


function connectCountry(text) {
    fetch(`https://api.covid19api.com/total/dayone/country/${text}`)
    .then(res=> res.json() )
    .then(cdata=> loadcountry(cdata));

}

connectCountry();

function loadcountry(cdata){
    var countryCoronraInfo = document.getElementById('corona-info-of-a-country');
    countryCoronraInfo.innerHTML = `
                                    <h1> ${cdata[cdata.length-1].Active}</h1>
                                    <p>Active Cases</p>
                                    <h1>${cdata[cdata.length-1].Confirmed}</h1>
                                    <p>Confirmed Cases</p>
                                    <h1>${cdata[cdata.length-1].Deaths}</h1>
                                    <p>Death Cases</p>
                                    <p>Date: ${cdata[cdata.length-1].Date}</p>
                                    <button onclick="FindCountryDetails()">More Details</button><br> <br>
                                    `;
}

function FindCountryDetails(){
    text = document.getElementById('country-search').value;
    connectCountryDetails(text);
}

function connectCountryDetails(text){
    fetch(`https://restcountries.com/v3.1/name/${text}`)
    .then(res=> res.json() )
    .then(CountryDetailsdata=> LoadCountryDetails(CountryDetailsdata));
}

function LoadCountryDetails(CountryDetailsdata){
    console.log(CountryDetailsdata);
    var countryDetailsDiv = document.getElementById('countrydetails');
    countryDetailsDiv.innerHTML = ` <img src='${CountryDetailsdata[0].flags.png}'><br>
                                    <p>Common Name: ${CountryDetailsdata[0].name.common}<p>
                                    <p>Official Name: ${CountryDetailsdata[0].name.official}<p>
                                    <p>Population: ${CountryDetailsdata[0].population}<p>
                                    <p>Capital: ${CountryDetailsdata[0].capital[0]}<p>
                                    <p>Region: ${CountryDetailsdata[0].region}<p>
                                    `;
    
}