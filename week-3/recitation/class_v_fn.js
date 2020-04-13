
function welcome(name) {
  return `Hello ${name}`;
}

// welcome is a regular function, not associated with a class
welcome("Kent");

const date = new Date();
// toLocaleTimeString() is a method because it's associated with the Date class
const time = date.toLocaleTimeString()

