# Week 5

## Lesson 17: Use the key prop when Rendering a List with React
**Video**: [Use the key prop when Rendering a List with React](https://egghead.io/lessons/react-use-the-key-prop-when-rendering-a-list-with-react?pl=the-beginner-s-guide-to-react-2017-99bf)
- Here's the [Hooks version of this lesson](https://egghead.io/lessons/react-use-the-key-prop-when-rendering-a-list-with-react-12564a86).

### Resources

#### 1. Using `map`
[The `map` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is a function built-in to JavaScript arrays, which allows you to create a new array from an existing array.

The following example uses `map` on an array of integers to create another array which contains the same integers multiplied by 2.

```js
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map((num) => num * 2);

// Output: [2, 4, 6, 8, 10]
console.log(doubles)
```

The function you pass to `map` is called on every element of the array and its return value is used to produce the new array. In the previous example the function simply returns the number multiplied by 2. So you might say each element in the array maps to its double in the new array. 

Here's another example using objects instead of numbers. This example maps an array of user objects to an array of last names.

```js
const users = [
  {first: "Gavin", last: "Carothers", username: "gcarothers"},
  {first: "Jason", last: "Maples", username: "jmaples"},
  {first: "Tony", last: "Childs", username: "programmist"},
];
const lastNames = users.map((user) => user.last)

// Output: ["Carothers", "Maples", "Childs"]
console.log(lastNames)
```

There are a couple of things worth noting about the `map` function. First, `map` always returns a new array (It doesn't change the original). Even if you created a map function that didn't make any changes to the returned elements, the array that is returned is still a copy of the original. The second (probably obvious) thing to note is that the array returned by `map` will always be the same size as the original. Every element in the original array maps to an analog in the second array.

#### 1. Rendering Lists
In React, the idiomatic way of rendering arrays of things is to use the Array `map` function. For instance, using the `users` array from the previous section, we could create a list of links to github profiles.

```jsx
function Users({users}) {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li>
            <a href={`http://github.com/${user.username}`}>
              {user.first}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const users = [
  {first: "Gavin", last: "Carothers", username: "gcarothers"},
  {first: "Jason", last: "Maples", username: "jmaples"},
  {first: "Tony", last: "Childs", username: "programmist"},
];

React.render(
  <Users userList={users} />,
  document.getELementById("root");
)
```

The HTML markup returned from the `Users` component in this example would be:

```html
<ul>
  <li><a href="http://github.com/gcarothers">Gavin</a></li>
  <li><a href="http://github.com/jmaples">Jason</a></li>
  <li><a href="http://github.com/programmist">Tony</a></li>
</ul>
```

Which would render as:
- [Gavin](http://github.com/gcarothers)
- [Jason](http://github.com/jmaples)
- [Tony](http://github.com/programmist)

See the [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) documentation gives a more thorough description of rendering lists of things in React.


## Lesson 18: Make HTTP Requests with React
**Video**: [Make HTTP Requests with React](https://egghead.io/lessons/react-make-http-requests-with-react?pl=the-beginner-s-guide-to-react-2017-99bf)

### Resources
- [Axios library documentation](https://github.com/axios/axios)
- [Using the `fetch` API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  - `fetch` is a built-in Javascript function to make HTTP requests. The axios library is probably more fully-featured, but I wanted to mentioned `fetch` as you can use it to test HTTP calls from the developer console of your browser without having to import anything.



## Lesson 19: Build and deploy a React Application
**Video**: [Build and deploy a React Application](https://egghead.io/lessons/react-build-and-deploy-a-react-application?pl=the-beginner-s-guide-to-react-2017-99bf)
