# Create React App CLI
If you'd like to play around with React locally, but don't want to deal with Webpack, Babel, or configure a web server you can use the [Create React App](https://create-react-app.dev/) CLI tool. 

The `create-react-app` command creates the React project for you, handling all of those details for you so that you can focus on writing your React components. It also configures a local web server that can be started and stopped via the command line. The server also automatically reloads your page when it detects changes to your source code, which can be really helpful during development.

## Installation
Before using the `create-react-app` CLI you must have a recent version of node and npm installed. In this example, we'll use the `npx` command, which comes bundled with `npm` versions `5.2.0` and later. To create a new React project, open a terminal window and run `npx create-react-app` followed by the project name you wish to use. For instance to create a new React project called `my-app` you would run:

```bash
$ npx create-react-app my-app
```

Once the command is finished you can start the project by changing directories to `my-app` and then running the `npm start`.

```bash
$ cd my-app
$ npm start
```

See the [Getting Started](https://create-react-app.dev/docs/getting-started) documentation for more information

<img src="https://camo.githubusercontent.com/29765c4a32f03bd01d44edef1cd674225e3c906b/68747470733a2f2f63646e2e7261776769742e636f6d2f66616365626f6f6b2f6372656174652d72656163742d6170702f323762343261632f73637265656e636173742e737667">
