# Week 5 Exercises

1. 
    The `<GroceryList />` component has a `groceries` prop, which receives an array of grocery objects. Each grocery object has an `id` and a `name` property. Complete this component by rendering the `groceries` array as a list of `<li>` elements. Be sure to aslo add the `key` prop with a unique value for each item. Use `groceries.map` to create an `<li>` element for each item. The `name` property can be used for the content of the `<li>` and the `id` property can be used for the `key` value. See the week 5 `README.md` file for an example.

    The HTML output would look something like this (**Note**: React will remove the `key` property from the final HTML output, but I've left it for demonstration purposes)
    
    ```html
    <ul id="grocery-list">
      <li key="1">Olive Oil</li>
      <li key="2">Avacados</li>
      <li key="3">Apples</li>
      <li key="4">Eggs</li>
    </ul>
    ```

2. 
    This exercise expands on exercise 1, by adding top-level `<App>` component, which renders an `input`, a `button`, and a `<GroceryList>` component. The component should allow you to add new items to your grocery list by entering the new item in the input and then clicking the **Add** button. However, there's still work to do in order to get it working. You'll need to

    a. Use `React.useState` to add a `groceries` array state and `setGroceries` setter function.

    b. Finish the `addItem` function by appending the new item to the `groceries` array and then using the `setGroceries` function to set the new value. Note that, the new grocery item can be obtained from `inputRef.current.value`.

    c. At the end of `addItem`, clear the value of `inputRef.current.value` by setting it to `""`

    ## Appending to an array
    There are several ways to append a new value to an array in JavaScript. The two I'll mention here return a copy of the original array with the newly-appended value, but leave the original array unchanged. This is ideal as React requires using `this.setState`, or the setter functions provided by `useState` to change state. Attempting to change a state variable directly will cause the application to not work correctly.

    ### Array concat
    Using the Array `concat` function, you can append a single item or an entire array to another array. This example shows adding a single item.

    ```js
    const threeNumbers = [1,2,3];
    const fourNumbers = threeNumbers.concat(4);
    // Output: [1, 2, 3, 4]
    console.log(fourNumbers)

    // Output: [1, 2, 3]
    // original array unchanged
    console.log(threeNumbers)
    ```

    ### Array Spread Syntax
    Array spread syntax is just another way (syntactic sugar) for using `concat`. Here's the same example using it.

    ```js
    const threeNumbers = [1,2,3];
    const fourNumbers = [...threeNumbers, 4]; // spread syntax
    // Output: [1, 2, 3, 4]
    console.log(fourNumbers)

    // Output: [1, 2, 3]
    // original array unchanged
    console.log(threeNumbers)
    ```
