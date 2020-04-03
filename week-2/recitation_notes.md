# Week 1 Recitation

## Exercise Solutions
See [`react-course-1/week-2/exercise-solutions.html`](https://github.com/programmist/react-course-1/blob/master/week-2/exercise-solutions.md)

## Create React App CLI
 See [`react-course-1/create-react-app.md`](https://github.com/programmist/react-course-1/blob/master/create-react-app.md)

## Notes

### Object Destructuring
Javascript has a feature called [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), which is a convenienct and concise way of "pulling out" certain properties from an object and making them available as variables in the current execution context.

### Destructuring Example
For instance, here is an example of accessing a property within an object variable:

```js
// Create object and assign to variable named obj
const obj = {name: "Wes", country: "Canada"};

// access name property of object
console.log(obj.name)
```

And here is the same example, using object destructuring to access the same property.

```js
// Create object and assign to variable named obj
const obj = {name: "Wes", country: "Canada"};

// Destructure name and country properties
const {name, country} = obj;

// Access destructured name property without referencing the obj variable handle
console.log(name)
```

### Destructuring for React Props
When using a React function component, you can destructure the `props` object in the function signature. So, instead of this:

```jsx
function Person(props) {
  return (
    <div>
      <span>{props.name}</span>
      <span>{props.country}</span>
    </div>
  )
}
```

You can do this:

```jsx
function Person({name, country}) {
  return (
    <div>
      <span>{name}</span>
      <span>{country}</span>
    </div>
  )
}
```
