# Week 3 Exercises

1. 
    The `Box` component in the `week-3/exercises/exercise1.html` file displays a box with a label at its center. Clicking on the box once should change the color to red. Clicking the box again should remove the red color. Clicking a third time should change to red again, and so forth, ad nauseam. Unfortunately, this doesn't currently work because the implementation is not quite complete. Complete the following steps to complete the implementation.

    a. Add an `onClick` prop to the `<div>` (beneath the `className` prop) which references the `handleClick` function (`this.handleCLick`)

    b. Complete the `handleClick` function. If `this.state.isRed` is `true`, then it should be set to `false` using `this.setState`. If `this.state.isRed` is `false`, then it should be set to `true` using `this.setState`.
    
    **Demo:**

    ![ex1](https://user-images.githubusercontent.com/527082/78700587-37ea0800-78cb-11ea-83cc-1d0d68a1ffbd.gif)

2. 
    The `Box` component in the `week-3/exercises/exercise2.html` file displays a box with a label at its center. If you run this file and move your mouse cursor over the box, its color changes to red. The purpose of this exercise is to add another event prop and event handler function which removes the red color from the box once the mouse cursor is no longer over the box. You can use the existing `handleMouserOver` function and `onMouseOver` prop as examples of how to proceed.

    a. Add a `handleMouseOut` function to the `Box` component which changes the `isRed` state to `false`

    b. Add an `onMouseOut` prop to the `<div>` (below the `onMouseOver` prop) which references the `handleMouseOut` function you created

    **Demo:**

    ![ex2](https://user-images.githubusercontent.com/527082/78700576-33255400-78cb-11ea-95d8-882c3cd92c32.gif)

3.
    The `App` component contains a text `<input />` and a `<div>` beneath it with the text "You Typed:", followed by a `<p>` element. This component is meant to demonstrate how the `onChange` handler works. When text is typed into (or removed from) the input, this text should be displayed within the `<p>` element. However, the component is not yet complete.

    a. Finish the `handleChange` function. Use `this.SetState` to set the state value of `outputText`

    b. Add an `onChange` prop to the `<input />` which references the `this.handleChange` funnction

    c. Update the JSX to display the current value of `this.state.outputText` inside of the `<p>` element. Remember to use JSX interpolation (`{}`).

    **Note:** Don't forget to remove the code comments from the JSX (i.e. lines that start with `//`)

    **Demo:**

    ![ex3](https://user-images.githubusercontent.com/527082/78699309-49caab80-78c9-11ea-8f88-a134ac80b899.gif)
