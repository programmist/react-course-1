# Week 2 Exercises

1. 
    Using the boilerplate below from exercise 1, create a functional React component (see lesson 4) called `<TimeGreeting>`, which displays the current time along with a name, which is passed in using a prop called `name` (See [**Notes**](#Notes) section below).

    **Example Usage**:
    ```jsx
    // Output: Hello Tony. The current time is 12:29:12 PM
    <TimeGreeting name="Tony" />
    ```

    **Boilerplate:**
    ```html
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
    <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script type="text/javascript">
    // Code goes here

    </script>
    ```

    **Note:** You can display the current time using the Javascript built-in `Date` class' `toLocaleTimeString` method.
    ```js
    const currentTime = new Date().toLocaleTimeString()
    // Output (will obviously vary): 12:29:12 PM
    console.log(currentTime)
    ```

2. Using the provided `prop-types` library, add prop validation for the `name` prop of the `<TimeGreeting />` component that you created in exercise 1. The `name` prop should be a **string** and should be **required**.

    **Note:** To test that your prop-type validation is working correctly try deleting the prop (`<Timegreeting />`) and reloading hte page to see if you get an error message in your browser console. To test the type validation, try passing something other than a string to the `name` prop (e.g. `<Timegreeting name={42} />`) and, again, reload and use the browser console to check for error messages. In both of these cases you should see some type of error message.

3. Using `React.Fragment` and the boilerplate code below, create a component called `<GroceryList />` which returns a static list of grocery items. Each item must be within an `<li>` HTML tag. Use `React.render` to render this component within the existing `<ul>` tag that has an id of `grocery-list`. 

    **Boilerplate:**
    ```html
    <ul id="grocery-list"></ul>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
    <script crossorigin src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
    <script type="text/javascript">
    // Code goes here

    </script>
    ```

    The output of should be structured something like this:

    ```html
    <ul id="grocery-list">
      <li>olive oil</li>
      <li>avacados</li>
      <li>apples</li>
    </ul>
    ```
