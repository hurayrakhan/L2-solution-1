# Why `unknown` is better than `any` in TypeScript

## Introduction
When we first start learning TypeScript, we often feel frustrated when we don't know what type to give a variable. To fix the error quickly, many beginners use `any`. While this works, it actually defeats the purpose of using TypeScript. In this post, we will explore why `any` is risky and why `unknown` is a much safer alternative.

## The Problem with `any`
Using `any` tells TypeScript to completely stop checking that variable. You can call any method on it, even if that method doesn't exist. This often leads to runtime errors that TypeScript was supposed to prevent.

```typescript
let data: any = "Hello World";

// TypeScript won't complain, but this will crash if data is not a number!
data.toFixed(2); 
```

## Why `unknown` is the Safer Choice
The `unknown` type also allows any value to be assigned to it, just like `any`. However, TypeScript will **not** let you use the variable until you confirm its type. This process is called **Type Narrowing**.

```typescript
let data: unknown = "Hello World";

// data.toFixed(2); // Error! TypeScript warns us.

if (typeof data === "string") {
    console.log(data.toUpperCase()); // Now it's safe!
}
```

## Conclusion
While `any` might seem easier at first, it creates "type safety holes" in your code. By using `unknown` and type narrowing, you ensure that your code stays safe and predictable, which is the whole point of using TypeScript!
