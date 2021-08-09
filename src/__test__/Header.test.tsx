import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

//component and function for the test
import Header from "../Header";
import getWeather from "../axios/getWeather";


  // test with: " $ yarn test --detectOpenHandles" for validate the last test
describe("<Header/>", () => {

  it(" city value default in searchbar", async () => {
    const setState = jest.fn();
    const { getByTestId } = render(<Header setWeather={setState} />);
    const form = getByTestId("form");

    expect(form).toHaveFormValues({ city: "" });
  });

  it("Change city value in searchbar", async () => {
    const useStateSpy = jest.spyOn(React, "useState");

    const weather = {};
    useStateSpy.mockImplementation(() => [weather, setState] as any);

    const setState = jest.fn();
    const { getByTestId } = render(<Header setWeather={setState} />);

    const form = getByTestId("form");
    const cityName = "Lyon";

    fireEvent.submit(form, { target: { city: cityName } });
    expect(await getWeather(cityName)).toBeCalled;
    expect(await getWeather(cityName)).toHaveProperty("location.name"); 
  });


});
