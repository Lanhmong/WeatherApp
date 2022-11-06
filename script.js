let weather = {
    apiKey: "d0e85ed282961ddc6ffd32e76dc959cf",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city
        +"&units=metric&appid=" 
        + this.apiKey
        )
        //fetching the data from the api into data
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data));
    },
    displayWeather: function(data){
        //Destructuring assignment
        //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
        // or properties from objects, into distinct variables.
        const { name } = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const {speed} = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/"+icon+".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "C°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};
//search weather by pressing icon
document.querySelector(".search button").addEventListener("click", function(){
weather.search();
});
//search weather by pressing enter /keyup means when key is released, click doesnt work bc it only works on mouse
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Münster");
