 function Button() {
   // a- state object(getter), b- updater function (setter) = useState()
   // counter, setCounter = useState()
   const [counter, setCounter] = useState(0);
   return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
 }
 ReactDOM.render(
   <Button />,
   document.getElementById("mountNode"),);
