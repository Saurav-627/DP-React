import Button from "../Components/Button"



const Home = () => {
  return (
    <div>
        <h1>This is Home Page</h1> <br />
        <Button text="Learn More"/>
        {/* In Button text is the props which is passed in Button.jsx Component to make dynamic value witout repeatations  */}

        <Button text="View All" />
        {/* This is another button in which text props is  passed to make dynamic value.  */}
    </div>
  )
}

export default Home
