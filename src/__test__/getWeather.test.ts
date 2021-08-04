import getWeather from '../axios/getWeather';
import '@testing-library/jest-dom';
import axios from 'axios'

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

it('Calls the getWeather function', async () => {
  const expectedResult:any = { data:'weather data result'};


  mockedAxios.get.mockReturnValueOnce(expectedResult);

  
  const result = await getWeather('marseille');

  expect(mockedAxios.get).toHaveBeenCalled();
  expect(result).toEqual('weather data result');
});