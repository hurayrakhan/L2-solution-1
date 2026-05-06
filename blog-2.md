# Question 3: Generics 

## Introduction
Have you ever written a function that only works with numbers, only to realize you need the exact same logic for strings? In regular JavaScript, this isn't an issue, but in TypeScript, we want to keep our types strict. This is where **Generics** come in.

## What are Generics?
Generics allow us to create "type variables." Instead of fixing a type like `string` or `number`, we use a placeholder (usually `<T>`) that gets replaced with the actual type when we use the function.

## A Simple Example
Imagine a function that takes an item and returns it in an array. Without generics, we might use `any`:

```typescript
function createArray(item: any): any[] {
    return [item];
}
```
But with `any`, we lose the type. If we pass a number, TypeScript doesn't know the output is a number array.

With **Generics**, we can fix this:

```typescript
function createArray<T>(item: T): T[] {
    return [item];
}

const numArray = createArray(10); // TypeScript knows this is number[]
const strArray = createArray("Hello"); // TypeScript knows this is string[]
```

## Why Use Generics?
1. **Reusability**: You can use the same function for many different types.
2. **Type Safety**: TypeScript keeps track of the types throughout your code, preventing bugs.
3. **Clarity**: It makes your intent clear—this function works with "some type" but maintains that type's identity.

## Conclusion
Generics might look a bit scary with the `<T>` syntax at first, but they are one of the most powerful tools in TypeScript. They help you write flexible, reusable, and bug-free code without repeating yourself!
