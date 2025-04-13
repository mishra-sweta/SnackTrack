import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../../__mocks__/mockResMenu.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load Restaurant Menu Component with Titles ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const categoryTitle = screen.getByText("Recommended (15)");

  expect(categoryTitle).toBeInTheDocument();

  fireEvent.click(categoryTitle);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(15);
});

test("should add items to Cart and update header ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const categoryTitle = screen.getByText("Recommended (15)");
  fireEvent.click(categoryTitle);

  const addButtons = await screen.findAllByTestId("addButton");

  fireEvent.click(addButtons[0]);
  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  fireEvent.click(addButtons[2]);
  expect(screen.getByText("Cart - 2")).toBeInTheDocument();
});

test("should render cart page with added items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const categoryTitle = screen.getByText("Recommended (15)");

  fireEvent.click(categoryTitle);

  const foodItems = screen.getAllByTestId("foodItems");

  const addButtons = await screen.findAllByTestId("addButton");

  fireEvent.click(addButtons[0]);

  fireEvent.click(addButtons[1]);

  //2 gets added to 15 as 2 items are added
  expect(foodItems.length).toBe(17);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  const foodItemsAfter = screen.getAllByTestId("foodItems");

  expect(foodItemsAfter.length).toBe(15);
});

test("should remove items when remove button is clicked", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const categoryTitle = screen.getByText("Recommended (15)");

  fireEvent.click(categoryTitle);

  const addButtons = await screen.findAllByTestId("addButton");

  fireEvent.click(addButtons[0]);

  fireEvent.click(addButtons[1]);
  const foodItems = screen.getAllByTestId("foodItems");

  //2 gets added to 15 as 2 items are added
  expect(foodItems.length).toBe(17);

  const removeButton = screen.getAllByRole("button", { name: "Remove -" });

  fireEvent.click(removeButton[0]);

  const foodItemsAfter = screen.getAllByTestId("foodItems");

  expect(foodItemsAfter.length).toBe(16);
});
