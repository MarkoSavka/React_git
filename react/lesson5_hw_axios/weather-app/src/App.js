import axios from "axios";
import { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const API_Key='e5d36d9c578e8f135b538a615f06bfe1';
const limit=1;
const units='metric';

const instance = axios.create({
  baseURL:"https://api.openweathermap.org",
  headers:{
      "Content-type":"application/json"
  }
});

function App(){
  
  const [city,setCity] = useState('');
  const [data, setData] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        // Use latitude and longitude to get weather data
        instance.get(`/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_Key}`)
          .then(response => {
            console.log(response.data);
            setWeather(response.data);
            setCity("Your city");
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const enterCity=(e)=>{
    setCity(e.target.value);
  }

  const searchCity = () => {
    instance.get(`/geo/1.0/direct?q=${city}&limit=${limit}&appid=${API_Key}`)//робимо проміс
        .then(response => { //обробник проміса
            setData(response.data);
            const { lat, lon } = response.data[0];
            return instance.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_Key}`);
        })
        .then(response => {
          console.log(response.data);
          setWeather(response.data);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}

  return(
    <div className="container bg-secondary p-5 rounded">
    <div className="row justify-content-center">
      <div className="col-3">
        <input type="text" value={city} onChange={enterCity} className="form-control my-3" />
        <button onClick={searchCity} className="btn btn-primary mb-3">Search</button>
      </div>
    </div>
    {data && data.map((item, index) => (
      <div key={index} className="row justify-content-center">
        <div className="col-3">
        <table className="table table-bordered">
            <tbody>
              <tr>
                <td><h5 className="text-primary">City: {item.name}</h5></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ))}
    {weather && (
  <div className="row justify-content-center">
    <div className="col-3">
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Temperature: {weather.main.temp} °C</td>
          </tr>
          <tr>
            <td>Weather: {weather.weather[0].description}</td>
          </tr>
          <tr>
            <td><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" /></td>
          </tr>
          <tr>
            <td>Wind Speed: {weather.wind.speed} m/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    )}
  </div>
  )
}

export default App;
