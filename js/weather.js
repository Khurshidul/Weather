
const API_KEY = '0f2888dd81002ca6811fc5d5112967ee';

const searchCityTemp = () =>{
   const searchCity = document.getElementById('city-name');
   const city = searchCity.value;
   searchCity.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayResult(data));
}
const setInnerText = (id, text) =>{
   document.getElementById(id).innerText = text;
}
const displayResult = temp =>{
   setInnerText('city', temp.name);
   setInnerText('temp', temp.main.temp);
   setInnerText('condition',temp.weather[0].main);
   // Set Weather Icon-----
   const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
   const imgIcon = document.getElementById('weather-icon');
   imgIcon.setAttribute('src',url);
}