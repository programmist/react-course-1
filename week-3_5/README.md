# Week 3.5: Intro to Hooks

## General Hooks Resources
- [Hooks Intro](https://reactjs.org/docs/hooks-intro.html)
- [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

## 1. Manage state in a React Component with the useState hook
**Video**: [Manage state in a React Component with the useState hook](https://egghead.io/lessons/react-manage-state-in-a-react-component-with-the-usestate-hook)

### Resources
- [Using the State Hook](https://reactjs.org/docs/hooks-state.html)
- [Javascript Array Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring)
  - Recall that we learned about object destructuring in week 2.

    ```js
      // Create object and assign to variable named obj
      const obj = {name: "Wes", country: "Canada"};

      // Destructure "name" and "country" properties from the object
      const {name, country} = obj;

      // Access destructured name property without referencing the obj variable handle
      console.log(name) // Output: "Wes"
    ```

    Array destructuring is similar, but whereas object destructuring uses curly braces, array destructuring uses square brackets. Unlike object destructuring which gets property names from an object, array destructuring is positional, meaning the destructured array entries are chosen based on the order they appear in the array. Because of this the variable names chosen for array destructuring are arbitrary.

    ```js
      const states = ["California", "Colorado", "Texas", "New York"]

      // Destructure only the 1st and 2nd entries in the "states" array
      const [firstState, secondState] = states;

      console.log(firstState) // Output: "California"
      console.log(secondState) // Output: "Colorado"
    ```

    The destructuring code above is identical in effect with just referencing the desired array index, shown below. In other words, destructuring is shorthand, (a.k.a. [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)) for a more verbose way of accessing data.

    ```js
      const states = ["California", "Colorado", "Texas", "New York"]

      // Get the 1st and 2nd entries in the "states" array by index
      const firstState = states[0];
      const secondState = states[1];

      // Note: Arrays in JavaScript are zero-indexed, meaning the first
      // entry in the array has an index of 0; the second an index of 1,
      // and so on.

      console.log(firstState) // Output: "California"
      console.log(secondState) // Output: "Colorado"
    ```


## 2. Manage side-effects in a React Component with the useEffect hook
**Video**: [Manage side-effects in a React Component with the useEffect hook](https://egghead.io/lessons/react-manage-side-effects-in-a-react-component-with-the-useeffect-hook)

### Resources
- [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)


## 3. Use a lazy initializer with useState
**Video**: [Use a lazy initializer with useState](https://egghead.io/lessons/react-use-a-lazy-initializer-with-usestate)

### Resources
- [Lazy Loading of State](https://reactjs.org/docs/hooks-reference.html#lazy-initial-state)


## 4. Manage the useEffect dependency array
**Video**: [Manage the useEffect dependency array](https://egghead.io/lessons/react-manage-the-useeffect-dependency-array)

### Resources
- [Conditionally Firing an Effect](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)


## 5. Create reusable custom hooks
**Video**: [Create reusable custom hooks](https://egghead.io/lessons/react-create-reusable-custom-hooks)

### Resources
- [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)


## Further Reading
- [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html)
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
- [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)
