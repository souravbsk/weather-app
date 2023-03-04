// api key 
const API_KEY = `d52e9634db15fc860ba5715ea6c0dfbe`;

const weatherDataLoad = async (city) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await res.json();
    displayShowData(data);
}

const displayShowData = (data) => {
    const icon = data.weather[0].icon;
const tempID = document.getElementById('tempID');
tempID.innerText = data.main.temp;
const weatherId = document.getElementById('weatherId');
weatherId.innerText = data.weather[0].main;
const countryName = document.getElementById('countryName');
countryName.innerText = data.name;
const weatherImg = document.getElementById('weatherImg');
weatherImg.setAttribute('src',`https://openweathermap.org/img/wn/${icon}@2x.png`)
}
weatherDataLoad('dhaka')

document.getElementById('btnINput').addEventListener('click',() => {
    const inputField = document.getElementById('inputField');
    const inputValue = inputField.value;
    weatherDataLoad(inputValue)
})