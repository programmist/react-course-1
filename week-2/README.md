# Week 2

## Lesson 5: Validate Custom React Component Props with PropTypes
**Video**: [Validate Custom React Component Props with PropTypes](https://egghead.io/lessons/react-validate-custom-react-component-props-with-proptypes?pl=the-beginner-s-guide-to-react-2017-99bf)

### Resources
- [React Prop-Types guide](https://reactjs.org/docs/typechecking-with-proptypes.html)


## Lesson 6: Conditionally Render A React Component
### Video 6.1
[Conditionally Render A React Component](https://egghead.io/lessons/react-conditionally-render-a-react-component?pl=the-beginner-s-guide-to-react-2017-99bf)

### Video 6.2
[Understand and Use Interpolation in JSX](https://egghead.io/lessons/react-understand-and-use-interpolation-in-jsx)

This video is from the new version of the React course. The conditional rendering content does overlap with that of the first somewhat, but it also contains more information on JSX and interpolation.

### Resources
- [Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [JSX In Depth (advanced)](https://reactjs.org/docs/jsx-in-depth.html)
- [Javascript Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Notes
Using [Javascript Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) you can insert strings or other values (including variables and React props) into a static string "template."

> Note: Template strings use the backtick (\`) character at the beginning and end, instead of quotes like normal strings. In order to interpolate a value within the template literal string, put that value within curly braces with a dollar sign in front (`${}`). Template literal interpolation is different from JSX interpolation, which only uses curly braces with no dallar sign (`{}`).

##### Template literal Interpoliation
```js
// In the template literal below, note the use of both a variable and a literal value.
const name = "Tony"
// Output: "Hello Tony, your ticket number is 42"
console.log(`Hello ${name}, your ticket number is ${42}`)
```

##### JSX Interpoliation
```jsx
function Hello(props) {
  return (
    <div>Hello {props.name}</div>
  );
}

...

// Output: <div>Hello Tony</div>
<Hello name="Tony" />
```


## Lesson 7: Rerender a React Application
**Video**: [Rerender a React Application](https://egghead.io/lessons/react-rerender-a-react-application?pl=the-beginner-s-guide-to-react-2017-99bf)


## Lesson 8: Style React Components with className and In Line Styles
**Video**: [Style React Components with className and In Line Styles](https://egghead.io/lessons/react-style-react-components-with-classname-and-in-line-styles?pl=the-beginner-s-guide-to-react-2017-99bf)

### Resources
- [Styling FAQ](https://reactjs.org/docs/faq-styling.html)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)


## Bonus Lesson: `React.Fragment`
This lesson was linked at the bottom of `week-1/recitation_notes.md`, but I'm re-adding here for convenience

**Video:** [Render two elements side-by-side with React Fragments](https://egghead.io/lessons/react-render-two-elements-side-by-side-with-react-fragments)
