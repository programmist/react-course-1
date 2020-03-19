# Week 1 Exercises

1. Copy the boilerplate code below, and use `React.createElement` and `ReactDOM.render` to display a `span` element, within the existing `<div id="root">` element, that has `className` and `children` content of your choosing (text or elements).

    ```html
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script type="text/javascript">
    // Code goes here

    </script>
    ```

2. Review the [React.createElement API documentation](https://reactjs.org/docs/react-api.html#createelement), and describe the purpose of the first argument to the `createElement` function.

3. What's the purpose of the [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render) function?

4. Refactor your code from exercise 1 to use JSX instead of `React.createElement` and `ReactDOM.render` (See lesson 3).

5. Using the boilerplate code from exercise 1, create a functional React component (see lesson 4) called `<TimeGreeting>`, which displays the current time along with a name, which is passed in using a prop called `name` (See notes below). e.g.

```jsx
// Output: Hello Tony. The current time is 12:29:12 PM
<TimeGreeting name="Tony" />
```

## Notes
Using [Javascript Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) you can insert strings or other values (including variables and React props) into a static string "template."

> Note: Template strings use the backtick (`) character at the beginning and end, instead of quotes like normal strings.

```js
const name = "Tony"
// Output: Hello Tony
console.log(`Hello ${name}`)
```

You can display the current time using the Javascript built-in `Date` class' `toLocaleTimeString` method.
```js
const currentTime = new Date().toLocaleTimeString()
// Output (will obviously vary): 12:29:12 PM
console.log(currentTime)
```

The output of `toLocaleTimeString` can also be used within template literals.
```js
const currentTime = new Date().toLocaleTimeString()
// Output: The current time is 12:29:12 PM
console.log(`The current time is ${currentTime}`)
```
