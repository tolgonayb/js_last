//fetch(`https://restcountries.eu/rest/v2/all`)
//.then(function (res){
    //console.log(res)
  //  return res.json()
  //  }) 
  //  .then(function (data){
   //     console.log(data);
    //    inizialize(data);
     //   })
  //  .catch(function (err){
   //     console.log("Error:", err)
     //   });
// function inizialize(countriesData) {
   // console.log(countriesData)
// }



const countriesList = document.getElementById("countries");
let countries;

//countriesList.addEventListener("change", function (event){
   // displayCountryInfo(event.target.value);
   // console.log(event.target.value)
   // })

countriesList.addEventListener("change", event => displayCountryInfo(event.target.value))


fetch("https://restcountries.eu/rest/v2/all")
    .then((res => res.json()))
    .then(data => inizialize(data))
    .catch(err => console.log("Error:", err))

function inizialize(countriesData) {
    countries = countriesData;
    let options = "";
  //  for (let i=0; i<countries.length; i++){
       // options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`
   // }
  //  document.getElementById("countries").innerHTML = options;
 countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);
    countriesList.innerHTML = options;
 countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
 displayCountryInfo(countriesList[countriesList.selectedIndex].value)
 
}

function displayCountryInfo(countryByAlphaCode) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlphaCode)
    console.log(countryData)
    document.querySelector("#flag-container img").src = countryData.flag;
    document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`
    document.getElementById("native-name").innerHTML = countryData.nativeName;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("alpha3Code").innerHTML = countryData.alpha3Code
    document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currencies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code})`).join(",");
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("subregion").innerHTML = countryData.subregion;
    
    document.querySelector('#borderBtn').addEventListener("click",(event) => {
        document.getElementById("borders").innerHTML = countryData.borders.join(" , ");
        
    })
}





