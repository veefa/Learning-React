function Count() {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount]
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return (   
    <div>
      <div>{`The current count is ${count}`}</div>
      <button onClick={increment} value={value}>Increment count</button>
      <button onClick={decrement} value={value}>decrement count</button>
    </div>
  )
}

ReactDOM.render(
  <Count/>,
  document.getElementById('root'),
);
