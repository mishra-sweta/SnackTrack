import sum from "../components/sum";

test("Should return sum of two numbers ", () => {
  const result = sum(3, 7);

  expect(result).toBe(10);
});
