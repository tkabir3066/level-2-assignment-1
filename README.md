## 🎯 Blog Task

## 1.What are some differences between interfaces and types in TypeScript?

### ✅ Solution

- **Types** in TypeScript are more flexible and can represent primitives, unions, intersections, tuples, etc.
- **Interfaces** are mainly used to describe the structure of objects.
- **Syntax Difference:**
  - Use `type` for creating a type alias.
  - Use `interface` for declaring an interface.
- **Common Features:**
  - Both can define object shapes.
  - Both support `readonly` and optional (`?`) properties.
  - Both are used for type-checking and autocompletion in IDEs.

---

### 💡 Example

#### Using `type`

```ts
type User1 = {
  name: string;
  age: number;
  email?: string;
};

const user1: User1 = {
  name: "John",
  age: 30,
};
```

#### Using `type`

```ts
Interface User2 {
    name:string;
    age:number;
    email?:string
}

const user1: User1 = {
  name: "John",
  age: 30,
  email?:"tk@gmail.com"
};
```

## 2. Provide an example of using **union** and **intersection** types in TypeScript.

**Solution:-**

## ✅ Union Type Example

### 📄 What is a Union Type?

In TypeScript, a **union type** allows a variable to hold more than one type of value.  
You can use the pipe symbol (`|`) to separate the types.

---

### 💡 Example

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase());
  } else {
    console.log("ID (number):", id.toFixed(2));
  }
}

printId(123); // ID (number): 123.00
printId("abc123"); // ID (string): ABC123
```

## ✅ Intersection Type Example

### 📄 What is a Intersection Type?

An **Intersection type** allows to combine multiple types into one. The resulting type must satisfy all the combined types.

```ts
type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};

type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper; //intersection

const fullstackDeveloper: FullstackDeveloper = {
  skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};
```
