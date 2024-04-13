import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css'

const Weather = () => {
    const [data, setData] = useState(null)
    const [c,setC]=useState(0)
    const [f,setF]=useState(0)
    const apikey = 'a0ff33baf07a3433acc72b427ba3ba9e'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=London&metric&appid=${apikey}`
    function getData() {
        axios.get(url)
            .then(function (res) {
                console.log(res)
                setData(res.data)
                setC((data.main.temp-273.15).toFixed(2))
                setF(((data.main.temp-273.15)*1.8+32).toFixed(2))
                
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            {
                data &&
                <>

                    <div className='contain'>
                        <h1 className='city'>{data && data.name}</h1>
                        <div className='info'>
                            <div className='info1'>
                                <h3 className='location'><i class="fa-solid fa-location-dot"></i>{data && data.name}</h3>
                                <h3 className='location'><i class="fa-solid fa-calendar-days"></i>Daytime|{ }</h3>
                                <h1 className='temp'>{c}|{f}</h1>
                                <h1 className='des'>{data && data.weather[0].description}</h1>
                                <h5 className='vv'>City:{data && data.name}</h5>
                                <h5 className='vv'>Temp:{data && data.main.temp}</h5>
                                <h5 className='vv'>Country:{data && data.sys.country}</h5>
                            </div>
                            <div className='img'>
                                <img src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`}></img>
                            </div>
                        </div>

                    </div>
                </>


            }

        </div>
    );
}

export default Weather;
