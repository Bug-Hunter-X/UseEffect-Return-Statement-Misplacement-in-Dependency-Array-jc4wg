# React useEffect Return Statement Misplacement
This example demonstrates a common error in React's `useEffect` hook: misplacing the return statement within the dependency array.  The return function is for cleanup, not part of the dependencies.

The erroneous code attempts to place the cleanup function inside the dependency array which is incorrect. The dependencies array should list variables that trigger the useEffect to run again; The cleanup function is executed when the component unmounts or before the next effect runs if the dependencies change. 

The solution correctly moves the return statement outside of the dependency array, ensuring proper cleanup.