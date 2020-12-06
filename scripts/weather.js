const renderWeather = (city, state) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=165ebfd150edbfeb373130b2c9734c67&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);

    function displayResults(weather){
        console.log(weather);
        $('.city-state').text(weather.name+', '+state);
        $('#temp').text(weather.main.temp+'℃');
        $('#cond').text(weather.weather[0].main);
        $('#min-max').text(weather.main.temp_min+' / '+weather.main.temp_max);
    }
}

$(document).ready(function(){
    $('#state-selector-right').click(function(){
        switch ($('#state-selector-right').val()) {
            case 'maha':
                renderWeather('mumbai', 'maharashthra');
                myMap(19.0760,72.8777);
                break;
            case 'pun':
                renderWeather('amritsar','punjab');
                myMap(31.6340,74.8723);
                break;
            case 'wb':
                renderWeather('kolkata', 'west bengal');
                myMap(22.5726,88.3639);
                break;
            default:
                break;
        }
    });
    renderWeather('mumbai','maharashtra');
})