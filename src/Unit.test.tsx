/* eslint-disable jest/no-identical-title */
import { handleProductName } from "./methods/handleProductName";
import { paginationElems } from "./methods/paginationElems";

//===  handleProductName Tests ===//

test("all words of product name should start with uppercase letter", () => {
  const productNamePhrase: string = handleProductName("dog food");
  expect(productNamePhrase).toBe<string>("Dog Food");
});

test("all words of product name should start with uppercase letter", () => {
  const productNamePhrase: string = handleProductName("coat - red");
  expect(productNamePhrase).toBe<string>("Coat - Red");
});

test("all words of product name should start with uppercase letter", () => {
  const productNamePhrase: string = handleProductName("caRpEt");
  expect(productNamePhrase).toBe<string>("Carpet");
});

test("all words of product name should start with uppercase letter", () => {
  const productNamePhrase: string = handleProductName(
    "zircon encrusted tweezers for sale"
  );
  expect(productNamePhrase).toBe<string>("Zircon Encrusted Tweezers For Sale");
});

test("all words of product name should start with uppercase letter", () => {
  const productNamePhrase: string = handleProductName("CHEESE & FISH");
  expect(productNamePhrase).toBe<string>("Cheese & Fish");
});

//===  paginationElems Tests ===//

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(5);
  expect(divideByFive).toBe<number>(1);
});

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(15);
  expect(divideByFive).toBe<number>(3);
});

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(22);
  expect(divideByFive).toBe<number>(5);
});

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(123.5);
  expect(divideByFive).toBe<number>(25);
});

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(1);
  expect(divideByFive).toBe<number>(1);
});

test("total amount of products have to be divided by 5", () => {
  const divideByFive: number = paginationElems(0);
  expect(divideByFive).toBe<number>(0);
});
