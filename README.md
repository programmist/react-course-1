# How to Use This Repo
The [react-course-1](https://github.com/programmist/react-course-1.git) repository contains a set of 5 `week-N` directories, each corresponding to one week worth of content (where N is the week number). Each of these `week-N` directories contains a `README.md` file along with several numbered subdirectores, each of which correspond to a lesson number in [*The Beginner's Guide to React (V1)*](https://egghead.io/playlists/the-beginner-s-guide-to-react-2017-99bf). These numbered lesson directories contain the starter code for that lesson, so that the learner can follow along with the video lessons and experiment with the code.

## Starter Code
The starter code for each lesson is the same as what you see at the beginning of that video lesson. All you need to do in order to run this is to download and open the HTML file containing the code in your web browser.

You can do this by dragging the file from your OS's file explorer to an open browser window, or by using your browser's **File** menu to find and open the file.

> **Note:** To download a file from the Github repo
> 1. Click on the numbered directory containing the file
> 1. Click on the file name
> 1. Click the **Raw** button
> 1. Download via the **File** menu or by using `Cmd + S` (`Ctrl + S` on Windows).
>
> ![download_file](https://user-images.githubusercontent.com/527082/76897610-106ec500-6862-11ea-91c3-812bb4baa2b9.gif)

To make changes to the code, open the file in the text editor (or IDE) or your choice. If you're unsure what to use, [vscode](https://code.visualstudio.com/) and [Sublime Text](https://www.sublimetext.com/3) are two good choices.

## Weekly Schedule
Each week a set of lessons from this tutorial will be "assigned", along with a set of exercises. On the following week, a recitation session will be scheduled via Google Meet in order to review the content and exercises; and to answer any questions that may arise.

## Exercises
Each weekly set of lessons will be accompanied by a small set of exercises. These will mostly be coding related, such as creating or debugging components, but may also include non-coding self-check questions for the learner to research.

## Capstone Project (optional)
At the end of the course, those who would like to, can participate in a "capstone project" to further exercise the concepts learned throughout this tutorial. I encourage you to work alone to get the most out of it, but group projects are also fine.

I'm happy to help with project ideas, but would ask that projects be chosen such that development time is no more than 2-3 weeks. During that time I will make myself available for questions and help during scheduled blocks that I'll add to my calendar. Once projects are complete, I'll be available to do final code reviews.

### A Note on Project Structure:
The capstone project will be completed using a more idiomatic, real-world React project structure, rather than embedded within a `<script>` tag within an HTML file, as the lessons do. I will demonstrate a simple way to achieve this using a CLI tool called **Create React App**. Please see the [`create-react-app.md`](https://github.com/programmist/react-course-1/blob/master/create-react-app.md) file in the repository root file for more information.

# Resources

## React
- [React Docs](https://reactjs.org/docs/hello-world.html)
  - The **Main Concepts**, and **API Reference** menus are most relevent to this tutorial
  - [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [JSX In Depth (advanced)](https://reactjs.org/docs/jsx-in-depth.html)

## Babel
- [Try it Out (repl)](https://babeljs.io/repl)
- [Docs](https://babeljs.io/docs/en/)

### React Developer Tools
The `React Developer Tools` browser extension, which aids in inspecting and debugging React code in your browser, does not work correctly with the code in these HTML files. Unfortunately there is no work-around for this due to the way the code is structured inside `<script>` tags within HTML files. Information on how to install and use this extension has been added to the `20-bonus` directory, and will also be discussed near the end of the course using some sample code. You'll also have the opportunity to use this extension with your capstone project.

## JavaScript
- [MDN JavaScript Documentation Home Page](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - A good starting point to digging into JS. Check out the menus in the **Related Topics** left-sidebar for subtopics such as **Complete Beginners**, **JavaScript Guide**, **Intermediate**, **Advanced**, etc.

- [JavaScript for Impatient Programmers](https://exploringjs.com/impatient-js/index.html)
  - Covers JS, but starts with modern features (through ES2019, the most recently-released language specification).
- [Speaking Javascript (free online book)](http://speakingjs.com/es5/index.html)
  - Covers JS from version ES1 through ES5. Doesn't cover any of the newer features from 2015 or later.
- [More Online JS books by Dr. Rauschmayer](https://exploringjs.com/)


## Browser Developer Tools
You can use your browser's developer tools to inspect and debug the code and its output. If you are unfamiliar with the developer tools for your browser, you can find more information here:
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [Microsoft Edge Developer Tools](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide)
