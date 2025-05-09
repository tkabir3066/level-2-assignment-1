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
  //------------------------------------End---------------------------------//
}
