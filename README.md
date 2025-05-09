## 🎯 Blog Task

1. What are some differences between interfaces and types in TypeScript?

**Solution:-**

\*Types in TypeScript are more flexible and primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object

\*Types use the type keyword for creating new type, while interfaces use the interface keyword for declaring an interface.

\*Both can define object shapes.
\*Both support readonly and optional properties.
\*Both are used for type-checking and autocompletion.

**Example:**
**Type:**

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

**Interface:**

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
