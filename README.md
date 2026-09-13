# Dev Stack Project

## Description
It is a simple one page web application where you can buy different technology items in your stack. You can also remove item by clicking. It is a simple CRUD opeation page where a client can buy his desired technological advancement. 

## Technologies Used
*   React
*   Tailwind CSS
*   React Toastify
*   React Icons
*   Javascript
*   Vite

## Features
1.  **Interactive Stack Builder :** Allows you to browse, select, and add technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps, and Tools) to build and customize your development stack.
2.  **Side-by-Side Comparison:** Provides structured technology profiles featuring ratings, skill levels (e.g., Beginner-Friendly, Intermediate), tags, and quick summaries to evaluate tools easily.
3.  **Stack Management::** Includes a dedicated stack overview panel that tracks selected technologies, displays their primary categories, and allows one-click removals or complete stack resets. 

---

## React Q&A

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks a lot like HTML. It is used in React because it makes it much easier to write and visualize the structure of the UI directly inside our JavaScript code.

**2. What is the difference between props and state?**
*   **Props** (properties) are passed *down* from a parent component to a child component and are read-only. 
*   **State** is managed *inside* a component. When state changes, the component re-renders to show the new data.

**3. What does the useState hook do, and where did you use it in this project?**
The `useState` hook allows functional components to store and update data (state) over time. In this project, I used it for fetching data for seleted items and also show a change if its state is changed. 

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook lets you perform side effects (like fetching data, setting timers, or manually changing the DOM) after the component renders. I needed it to load the JSON data. Though I use async await function where the same thing can be happened. 

**5. Why does every item in a .map() list need a unique key prop?**
React uses the `key` prop to keep track of which specific items in a list have changed, been added, or been removed. This helps React update the UI efficiently without re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is when you show different UI elements based on a specific condition (like an `if` statement). 
*Example:* ` {stack.length === 0 ? <p>Your stack is empty!</p> : <StackList />} `

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
*   **Parent to Child:** You pass data down using `props`.
*   **Child to Parent:** It is not possible to send data directly from child to parent since react is unidirectional. As a result we have to pass the props into the main parent item App.tsx to render the UI in a customized way. 
