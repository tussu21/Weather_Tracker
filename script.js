const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let a=document.getElementById("cityName");
function getWeather(city)
{
	
	a.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => 
			response.json())//jo response object mila h convert it into json format
		.then(response =>
			 {//working with that data whether to print it or do something else
			console.log(response)
			cloud_pct = response.cloud_pct
			temp.innerHTML = response.temp
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			sunrise = response.surnrise
			sunset = response.sunset
		})
		.catch(err => console.log(err));
}
let element=document.getElementById("submit1")
element.addEventListener("click",e=>{
	e.preventDefault();
	getWeather(city.value)
})
getWeather("Kolkata")