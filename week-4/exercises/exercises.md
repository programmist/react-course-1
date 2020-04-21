# Week 4 Exercises

1. 
    Change this familiar input example from weeks 3 and 3.5 to use ` ref instead of `event.target`. 

      **a.** Use the `ref` prop to create a reference to the input element called `this.inputRef`

      **b.** in the `handleClick` function `this.setState` to set the value of `outputText`. However, rather than obtaining the value from `event.target`, get it from `this.inputRef` instead. You can also omit the `event` parameter of the function.
    
    **Demo:**

    <img src="https://user-images.githubusercontent.com/527082/78699309-49caab80-78c9-11ea-8f88-a134ac80b899.gif" height="120px">

2. 
    The `EmailForm` component contains a text input, a submit button, and an output area at the top which displays the value of the email that has been submitted. Complete this form by adding a submit handler which updates the state when the button is clicked.

    **a.** Add a `ref` called `this.inputRef` to the `<input>` element.

    **b.** Create a `handleSubmit` function in the `EmailForm` class. You can use the `value` property of `this.inputRef` to get the current value of the text input. Don't forget to use `event.PreventDefault()`.

    **c.** Add an `onSubmit` prop to the `<form>` element which calls `this.handleSubmit` when the button is clicked.

    **Demo:**

    <img src="https://user-images.githubusercontent.com/527082/79883562-b067c300-83b9-11ea-9b0d-2e3c1dd03e1c.gif" height="150px">

3. Using the code in `exercise3.html` and the provided `validateEmail` function, enhance `EmailForm` so that it only allows submission of a valid email.

    **a.** Create a `handleChange` function in the `EmailForm` class, which gets the current email value from `this.inputRef.value` and uses the value returned from `validateEmail` to set the state of `isEmailValid` using `this.setState`. The `validateEmail` takes an email string and returns `true` if that email is valid, or `false` if it is not. e.g.

    ```js
    const validEmail = "tony@lm.com";
    const invalidEmail = "tony@";
    validateEmail(validEmail); // returns true
    validateEmail(invalidEmail); // returns false
    ```

    **b.** Add an `onChange` prop to the input element which calls `this.handleChange`

    **c.** Add a `disabled` prop to the `<button>` element. Using the `isEmailValid` state, pass a value to the `disabled` prop that is `false` if the email is VALID, and `true` if the email is INVALID (hint: This is the opposite of value of `isEmailValid`, so use the boolean [NOT (`!`) operator)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT). 


    <img src="https://user-images.githubusercontent.com/527082/79886053-b8296680-83bd-11ea-9c29-a1644ad5b50c.gif" height="150px">