import "@testing-library/jest-dom";
import { mocked } from "ts-jest/utils";
import axios from "axios";

//functions for the test
import getWeather from "../axios/getWeather";

jest.mock("axios");

describe("init state weather", () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  beforeEach(() => mocked(axios).mockClear());

  it("Calls the getWeather function", async () => {
    const expectedResult: any = { data: "weather data result" };

    mockedAxios.get.mockReturnValueOnce(expectedResult);

    const result = await getWeather("marseille");

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toEqual("weather data result");
  });
});
