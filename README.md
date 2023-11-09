## Question 1 Ans:
In Typescript we can so many things that we are unable while using Javascript. With the help of typescript we can **improved code readability and maintainability**, **reduced errors**, **better code reuse**, **improved IDE support**, **catching errors early**, **documenting code**, **refactoring code**

## Question 2 Ans:
The optional chaining (?.) and nullish coalescing (??) operators in TypeScript are used to safely access properties of objects and arrays, even if the object or array is null or undefined. Here is an example: 

    // Optional chaining
    const name = user?.name; // undefined if user is null or undefined
    
    // Nullish coalescing
    const name = user?.name ?? 'Guest'; // 'Guest' if user is null or undefined
    
    // Array optional chaining
    const firstItem = arr?.[0]; // undefined if arr is null or undefined or if arr has no elements
    
    // Array nullish coalescing
    const firstItem = arr?.[0] ?? 'default'; // 'default' if arr is null or undefined or if arr has no elements

## Question 3 Ans:
I many handle with Async/Await because of using it help to **Readability**, **Error handling**, **Maintainability**

## Question 4 Ans:
There are some advantage of use enums in Typescript. Here are some: **Representing the different states of a system**, **Representing the different types of data that a variable can store**, **Representing the different options that a user can select**, **Enums are type-safe**, **Enums are easy to read and understand**, **Enums can be used to enforce coding conventions**

## Question 5 Ans:
Using type guard we can have **Improved readability and maintainability**, **Error prevention**. Here is a custom exam of type guard: 

    type Product = {
      name: string;
      price: number;
    };
    
    function isDiscountedProduct(product: Product): boolean {
      return product.price < 10;
    }
    
    const products: Product[] = [
      { name: "Product 1", price: 10 },
      { name: "Product 2", price: 5 },
      { name: "Product 3", price: 15 },
    ];
    
    const discountedProducts = products.filter(isDiscountedProduct);
    
    // discountedProducts is an array of Product objects with a price less than 10

## Question 6 Ans:
Here is an example of how to use `readOnly` in Typescript:

    class Person {
      readonly name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
    
    const person = new Person('John Doe');
    
    // person.name = 'Jane Doe'; // Error: Cannot assign to read-only property 'name'
    
    console.log(person.name); // "John Doe"

## Question 7 Ans:

  
A union type in TypeScript is a type that can be one of two or more other types. Union types are used to represent values that can have different types. Union types are declared using the pipe `|` operator and Union types can be used to make code more flexible and expressive. Here is an example: 

    let myAge: number | string = 10; // OK
    myAge = "20"; // Error: Type 'string' is not assignable to type 'number | string'.
