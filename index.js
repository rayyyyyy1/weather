const temperature=document.querySelector('.temp');
const humidity=document.querySelector('.humidity');
const feelslike=document.querySelector('.feelslike');
const searchButton = document.querySelector('.searchButton');
const inputvalue=document.getElementById('search').value



async function getData(){
    const city=document.getElementById('search').value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cd869e0b74d33d03f1f7ce220a8902a6`, {mode: 'cors' })
    const data = await response.json();
    temperature.textContent=data.main.temp;
    humidity.textContent=data.main.humidity;
    feelslike.textContent=data.main.feels_like;
}
searchButton.addEventListener('click',getData);

function celsius()