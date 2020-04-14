# Week 3 Exercises

1. 
    This exercise reuses the familiar `Box` component from the `week-3/exercises/exercise1.html`. `Box` has been converted from a class to a function component, but the implementation is not yet complete. Please use the `React.useState` to complete this component.

    a. Use `React.useState` to
      - create the `isRed` state variable
      - create the `setRed` setter function
      - set the default value to `false`
    
    b. In the provided `handleClick` function, use the `setRed` function to set the state of `isRed` when the box is clicked. If `isRed` is `true`, set it to `false`. If `isRed` is `false`, set it to `true`.

    **Demo:**

    ![ex1](https://user-images.githubusercontent.com/527082/78700587-37ea0800-78cb-11ea-83cc-1d0d68a1ffbd.gif)

2. 
    This exercise reuses the `App` component from `week-3/exercises/exercise3.html`. `App` has been converted from a class to a function component, but like exercise 1 it still needs work. Please use  the `React.useState` hook to complete this component.
    
    a. Use `React.useState` to
      - create the `outputText` state variable
      - create the `setOutputText` setter function
      - set the default value to `""`.

    b. In the provided `handleChange` function, use the `setOutputText` function to set the value of `outputText` to the value of `inputText` when 

    **Demo:**

    ![ex3](https://user-images.githubusercontent.com/527082/78699309-49caab80-78c9-11ea-8f88-a134ac80b899.gif)


3. 
    Exercise 3 uses the `ClickCounter` component introduced during the week 3 recitation session. As you can see, `ClickCounter` has been converted to a function component that uses the `useState` hook to implement the state updates. If you test it out, you'll see it works as expected. However, we'd like to add one more side effect to this component. When the component re-redners we'd like to change the title of the browser tab to say "Count:" followed by the current count (e.g. "Count: 2" when the click count reaches 2). In order to implement this you'll need to use the `React.useEffect` hook along with JavaScript template literals to create the new title text.

    a. Add a call to `React.useEffect` with a callback function just below the `React.useState` line. See the video, [Manage side-effects in a React Component with the useEffect hook](https://egghead.io/lessons/react-manage-side-effects-in-a-react-component-with-the-useeffect-hook) for more info on how to do this.

    b. Inside of the `React.useEffect` callback function, change the title of the browser tab

    In order to set the title of the current tab you must set the value of `document.title`, e.g.

    ```js
    document.title = "New Title";
    ```

    You can test this by opening a browser developer console and executing that line.

    ![doc_title](https://user-images.githubusercontent.com/527082/79235088-c6610b00-7e30-11ea-9caa-6765153bb8c5.gif)

    > **Note:** `document` is a built-in reference to the JavaScript DOM object representing the entire HTML page.

    Also, recall that template literals are strings in which you can insert other values, e.g.

    ```js
    const name = "Wes";
    const greeting = `Hello ${name}`;
    
    // Output: "Hello Wes"
    console.log(greeting);
    ```