// import { useEffect, useState } from "react";

const Contact = () => {
  // Using useState Hooks
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // const handleCount = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   return setCount1(count1 - 1);
  // };

  //jati khera nni render huda run huncha , kehi ko state change huda run huncha (1st)
  // useEffect(() => {
  //    console.log("hello");

  // })

  //First choti reload huda yo vitra ko code run huncha(2nd) MOST USED IN PROJECTS
  // useEffect(() => {
  //   console.log("Hello");

  // },[])

  //jaba tyo stateName ko state change/render hucncha (3rd)
  //count click garxa console or vitra ko code re-render huncha nava hudeina
  // useEffect(() => {
  //   console.log("hello2");

  // },[count])

  return (
    <div>
      <h1>This is contact Page</h1>
      {/* <div>
     <h3>{count}</h3>
     <h3>{count1}</h3>
      <button onClick={handleCount}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>

     </div> */}
    </div>
  );
};

export default Contact;
