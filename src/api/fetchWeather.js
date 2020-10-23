import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'aa0f2853ccb3a74117c35d870ff325f0';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL,{
        params:{
            q:query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    
    return data;

}
