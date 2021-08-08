import React, { useState, useEffect } from "react";
import {
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { mocked } from "ts-jest/utils";
import Header from "../Header";
import { IWeather } from "../interfaces/interfaces";
import getWeather from "../axios/getWeather";


describe('<Header/>', () => {
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
  const cityName='Lyon'
  

  fireEvent.submit(form, { target: { city: cityName } });
  expect(await getWeather( cityName )).toBeCalled;
  expect(await getWeather( cityName )).toHaveProperty('location.name');
});

// test with: $ yarn test --detectOpenHandles

})
