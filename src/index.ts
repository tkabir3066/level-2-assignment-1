{
  //------------------------------------Start---------------------------------//

  //1.

  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  const result1 = formatString("Hello"); // Output: "HELLO"
  const result2 = formatString("Hello", true); // Output: "HELLO"
  const result3 = formatString("Hello", false); // Output: "hello"

  //   console.log(result1);
  //   console.log(result2);
  //   console.log(result3);

  // 2.

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item?.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  filterByRating(books);

  // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

  //3.

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.reduce((acc, currArr) => acc.concat(currArr), []);
    return result;
  }

  concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
  concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

  //4.

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
  myCar.getModel(); // Output: "Model: Corolla"

  //5.

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  processValue("hello"); // Output: 5
  processValue(10); // Output: 20

  //6.

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    } else {
      let mostExpensiveProduct = products[0];

      for (let product of products) {
        if (mostExpensiveProduct.price < product.price) {
          mostExpensiveProduct = product;
        }
      }

      return mostExpensiveProduct;
    }
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  getMostExpensiveProduct(products);
  // Output: { name: "Bag", price: 50 }

  //7.

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  getDayType(Day.Monday); // Output: "Weekday"
  getDayType(Day.Sunday); // Output: "Weekend"
  //------------------------------------End---------------------------------//
}
