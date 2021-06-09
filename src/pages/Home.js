import React, {useEffect, useState} from "react";
import Logo from "../components/Logo";
import LogoHappy from "../components/LogoHappy"
import LogoAngry from "../components/LogoAngry"
import { Button, ProgressBar } from "react-bootstrap";
const Home = () => {
  let [location, setLocation] = useState('Loading weather data')
  let [currentTemp, setCurrentTemp] = useState({temp: '0˚', weather: 'Clear'})
  let [hourOne, setHourOne] = useState('12 AM')
  let [hourTwo, setHourTwo] = useState('12 AM')
  let [hourThree, setHourThree] = useState('12 AM')
  let [hourFour, setHourFour] = useState('12 AM')
  let [hourOneTemp, setHourOneTemp] = useState({temp: '0˚', weather: 'Clear'})
  let [hourTwoTemp, setHourTwoTemp] = useState({temp: '0˚', weather: 'Clear'})
  let [hourThreeTemp, setHourThreeTemp] = useState({temp: '0˚', weather: 'Clear'})
  let [hourFourTemp, setHourFourTemp] = useState({temp: '0˚', weather: 'Clear'})

  let futureTimes = (time) => {
    let t = time *= 1000;
    let d = new Date(t).toLocaleTimeString(navigator.language, {hour: 'numeric'});
    d = d.toLowerCase()
    d = d.replace(/\s+/g, '')
    return d;
  }

  let weatherIcons = (value) => {
    let d = new Date(Date.now()).getHours()
    if (d < 19){
    switch (value) {
      case 'Rain':
        return (<i class="fas fa-cloud-sun-rain"></i>)
      case 'Clear':
        return (<i class="fas fa-sun"></i>)
      case 'Clouds':
        return (<i class="fas fa-cloud-sun"></i>)
      default:
        return (<i class="fas fa-sun"></i>)
    }
    }else{
      switch (value) {
        case 'Rain':
          return (<i class="fas fa-cloud-moon-rain"></i>)
        case 'Clear':
          return (<i class="fas fa-moon"></i>)
        case 'Clouds':
          return (<i class="fas fa-cloud-moon"></i>)
        default:
          return (<i class="fas fa-sun"></i>)
      }
    }
  }

  useEffect(() => {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        let pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&result_type=postal_code&key=`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.results.length){
            setLocation(data.results[0].formatted_address)
          }
        })
        .catch((err) => {
          console.log(err)
        })
        
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${pos.lat}&lon=${pos.lng}&units=imperial&appid=`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          let h1 = futureTimes(data.hourly[1].dt)
          let h2 = futureTimes(data.hourly[2].dt)
          let h3 = futureTimes(data.hourly[3].dt)
          let h4 = futureTimes(data.hourly[4].dt)
          let current = Math.floor(data.current.temp).toString()
          current += '˚'
          setCurrentTemp({temp: current, weather: data.current.weather[0].main})
          setHourOne(h1)
          setHourTwo(h2)
          setHourThree(h3)
          setHourFour(h4)
          setHourOneTemp({temp: Math.floor(data.hourly[1].temp).toString() +'˚', weather: data.current.weather[0].main})
          setHourTwoTemp({temp: Math.floor(data.hourly[2].temp).toString() +'˚', weather: data.current.weather[0].main})
          setHourThreeTemp({temp: Math.floor(data.hourly[3].temp).toString() +'˚', weather: data.current.weather[0].main})
          setHourFourTemp({temp: Math.floor(data.hourly[4].temp).toString() +'˚', weather: data.current.weather[0].main})
        })
        .catch((err) => {
          if (err) console.log(err);
        })
        
      })
    }
  },[])

  let changeColor = (e) => {
    e.preventDefault()
    let thing = document.getElementsByClassName('progress-bar')[0].classList.add('yo')
    console.log(thing)
  }

  return (
    <div style={{ backgroundColor: "#282c34", height: "100vh" }}>
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <h1 style={{color: 'white', marginRight: '10px', marginTop: '10px', marginBottom: '0px'}}><i class="fas fas-link fa-cog"></i></h1>
        </div>
        <div className='text-center'style={{margin: '0 auto'}}>
      <h2
        style={{
          color: "white",
          fontFamily: "Courier new, Sans serif",
          textAlign: "center",
          paddingBottom: '10px'
        }}
      >
        {location}
      </h2>
      <h2
        style={{
          color: "white",
          fontFamily: "Courier new, Sans serif",
          textAlign: "center",
        }}
      >
        {currentTemp.temp}
      </h2>
      <p style={{position: 'absoulte', transform: 'translate(-40px,-38px)', color: 'white'}}>{weatherIcons(currentTemp.weather)}</p>
      </div>
      <div className="future-weather">
          <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px', textAlign: 'center'}}>
        <p>{hourOne}</p>
        {weatherIcons(hourOneTemp.weather)}
        <p>{hourOneTemp.temp}</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px', textAlign: 'center'}}>
        <p>{hourTwo}</p>
        {weatherIcons(hourTwoTemp.weather)}
        <p>{hourTwoTemp.temp}</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px', textAlign: 'center'}}>
        <p>{hourThree}</p>
        {weatherIcons(hourThreeTemp.weather)}
        <p>{hourThreeTemp.temp}</p>
        </div>
        <div style={{fontSize: '20px', fontFamily: 'Courier new, Sans serif', paddingTop: '10px', textAlign: 'center'}}>
        <p>{hourFour}</p>
        {weatherIcons(hourFourTemp.weather)}
        <p>{hourFourTemp.temp}</p>
        </div>
          
      </div>
      <div
        className="text-center"
        style={{ margin: "0 auto", top: "50%", transform: "translateY(6%)" }}
      >
        <LogoAngry />
        <div style={{ width: "50%", margin: "0 auto", marginBottom: "40px" }}>
          <ProgressBar
            now={10}
          />
        </div>
        <Button onClick={(e) => changeColor(e)} variant="outline-primary" size="lg" block>
          Give me Water!
        </Button>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          height: "8vh",
          width: "100%",
          backgroundColor: "#98C379",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
            margin: "0 auto",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#282c34",
          }}
        >
          <h1>
            <i class="fas fas-link fa-home"></i>
          </h1>
          <h1>
            <i class="fas  fas-link fa-seedling"></i>
          </h1>
          <h1>
            <i class="fas  fas-link fa-signal"></i>
          </h1>
          <h1>
            <i class="fas fas-link fa-gamepad"></i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
