# Week 3 Recitation

## Exercise Solutions
See [`react-course-1/week-3/exercises/solutions`](https://github.com/programmist/react-course-1/blob/master/week-3/exercises/solutions)

## Class vs Function Components
React components can be defined using functions or classes. Functions provide a simpler way to define components, requiring only that you return some JSX.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Function components, also receive props as a function parameter called `props`, which is an object containing key-value pairs, where the key is the prop-name and the value is the prop value.

Class components can also be simple, but even the simplest class component requires at least a `render` method that returns JSX. Class components also must access props via `this.props`.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Although function and class props are implemented differently, their usage is the same.

```html
<Welcome name="Gavin" />
```

### State and Lifecycle methods
The syntactic differences between function and class components mentioned above are fairly superficial. There are, however, two big functional differences between the two: [React state and lifecycle](https://reactjs.org/docs/state-and-lifecycle.html).

> **Note:** The new Hooks API (next week's topic), addresses these function component shortfalls; making them just as useful as class components, while also retaining their simplicity.

#### State
The state of a React component is one of the main drivers of its rendering cycle. Changing the value any property in a component's state object (using `this.setState`) triggers that component to re-render so that it can use the new state value. 

> **Note:** Component state properties must be updated via `this.setState` so that React is notified about the change and can then schedule a re-render. Attempting to update `this.state` directly will not work as expected.

For instance, consider the `ClickCounter` component below. It has one state property called `count`, which is initialized with a value of `0`, and is incremented each time the button is clicked. More specifically, when the button is clicked, the `updateCount` click handler function is called, which then calls `this.setState` and adds 1 to the existing value of `count`.

```jsx
class ClickCounter extends React.Component {
  state = {count: 0}

  updateCount = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.updateCount}>⚛️</button>
        </div>
        <div>Count: {this.state.count}</div>
      </div>
    )
  }
}
```

#### Lifecycle
Lifecycle methods are special methods that we can add to a class component in order to run some code at certain times during the component lifecycle; like when a component is mounted (when it's added to the DOM) or unmounted (when it's removed from the DOM). For these two scenarios React provides the `didComponentMount` and `willComponentUnmount` methods. 

The `Clock` component below uses the `componentDidMount` method in order to set up a timer (using the Javascript built-in `setInterval` function) which starts after the component has been mounted. The timer executes the callback function that is passed to `setInterval` every second; which updates the `time` state property with the latest time. The timer will continue forever until it is stopped using the Javascript built-in `clearInterval` function.

In order to stop the timer once the component has been unmounted, we use the `componentWillUnmount` lifecycle method. If we didn't use this method to stop the timer, it would continue to run in the background after the component had unmounted with no way of stopping it, which creates a memory/resource leak. It's a common paradigm in programming that developers must sometimes clean up any resources that have been allocated.

```jsx
class Clock extends React.Component {
  state = {time: new Date().toLocaleTimeString()}

  componentDidMount() {
    this.timerID = setInterval(
      () => this.setState({time: new Date().toLocaleTimeString()}),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time}</h2>
      </div>
    );
  }
}
```

The React lifecycle includes [several other methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle) that intercept the lifecycle at particular times (e.g. after a state update). However, most of these methods have been superseded by the Hooks API, which is the topic of next week's lessons.
