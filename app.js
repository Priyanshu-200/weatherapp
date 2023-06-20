city="Jaipur";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '87fa37259bmsh9ac27e9df603ab4p11f041jsn9d5266070a5a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML=city;
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
try {
	async function fun1(){
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	cloud_pct.innerHTML=(JSON.parse(result).cloud_pct);
	feels_like.innerHTML=(JSON.parse(result).feels_like);
	temp.innerHTML=(JSON.parse(result).temp);
    feels_like.innerHTML=(JSON.parse(result).feels_like);
    humidity.innerHTML=(JSON.parse(result).humidity);
    min_temp.innerHTML=(JSON.parse(result).min_temp);
    max_temp.innerHTML=(JSON.parse(result).max_temp);
    wind_speed.innerHTML=(JSON.parse(result).wind_speed);
	}
	fun1();
} catch (error) {
	console.error(error);
}
}

document.getElementById("submit").addEventListener("click", function(e){
     e.preventDefault();
	 var city1 = document.getElementById("city").value;
	 getWeather(city1);
});
getWeather("Jaipur");