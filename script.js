const apiKey="1c5e3520576e0661981b313a1baed7f8";
const apiUrl= " https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";


const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
async function  checkWeather(city){
const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
const weatherIcon= document.querySelector(".weather-icon");


if(response.status== 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   
}
else{
    var data= await response.json();



    document.querySelector(".city").innerHTML=data.name;
    
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°F";
    
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    
    document.querySelector(".wind").innerHTML=data.wind.speed + " Mph";
    
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "../IMAGES/images/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src= "../IMAGES/images/clear.png";
    }
    
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "../IMAGES/images/rain.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src= "../IMAGES/images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src= "../IMAGES/images/mist.png";
    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

}



searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value); 
})


