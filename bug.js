```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a return statement inside the useEffect dependency array
    return () => {
      console.log('Component unmounted');
      // Perform cleanup actions here 
    };
  }, [count]); // Incorrect placement of the return statement 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```