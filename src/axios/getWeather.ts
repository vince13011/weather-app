import axios from 'axios';

async function getWeather(city:string){
    console.log('key :',process.env.REACT_APP_API_KEY)

    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`);
    const responseData=  response.data;
    console.log('responseData: ', responseData)
    return responseData
    
    
}
export default getWeather;