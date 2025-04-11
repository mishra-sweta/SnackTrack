import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../__mocks__/mockData.json";
import { render, screen } from "@testing-library/react";
import withTopRatedLabel from "../../utils/withTopRatedLabel";
import "@testing-library/jest-dom";

const TopRatedRestaurant = withTopRatedLabel(RestaurantCard);

it("should load RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("MOJO Pizza - 2X Toppings");

  expect(name).toBeInTheDocument();
});

it("should load RestaurantCard component with TopRated label", () => {
  render(<TopRatedRestaurant resData={MOCK_DATA} />);

  const name = screen.getByText("Top Rated");

  expect(name).toBeInTheDocument();
});
