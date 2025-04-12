import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../../__mocks__/mockResSwiggy.json";
import "@testing-library/jest-dom";

//Trying to create a mock fetch fumction that is a browse function but the test cases work on JS DOM and it doesn't depend on browser or network call
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should search Res List for pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  //Simulation of the whole search function
  const searchBtn = screen.getByRole("button", { name: "Search" });

  const cardsBefore = screen.getAllByTestId("resCard");

  expect(cardsBefore.length).toBe(8);

  const searchInput = screen.getByTestId("searchId");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(2);

  expect(searchBtn).toBeInTheDocument();
});

test("should filter top rated restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const filteredRes = screen.getAllByTestId("resCard");

  expect(filteredRes.length).toBe(3);
});
