// import Button from "../Components/Button"

import { useEffect, useState } from "react";



const Home = () => {
//  Using useState Hooks 
  // const [count, setCount] = useState(0);   
  
  // const handleCount = () => {
  //   setCount(count + 1);
  // }

  // const handleDecrement = () => {
  //   if(count > 0 ){
  //    return setCount(count - 1);
  //   }else {
  //     return ;
  //   }
  // }


  return (
    // <div>
    //   <nav>
    //     <ul>
    //      <li><a href="/">Home</a></li>
    //      <li><a href="/about">About</a></li>
    //      <li><a href="/contact">Contact</a></li>
    //     </ul>
    //   </nav>
    //     <h1>This is Home Page</h1> <br />

    //     <Button text="Learn More"/>
    //     {/* In Button text is the props which is passed in Button.jsx Component to make dynamic value witout repeatations  */}

    //     <Button text="View All" />
    //     {/* This is another button in which text props is  passed to make dynamic value.  */}

    // </div>
    // <div>
    //   <h3>{count}</h3>
    //   <button onClick={handleCount}>Increment</button>
    //   <button onClick={handleDecrement}>Decrement</button>

    // </div>

    //useEffect Hook

    useEffect (() => {
      console.log("hello");
    },[])
  )
}

export default Home
