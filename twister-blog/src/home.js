import { useState } from "react"

const Home = () => {

    // let name = "Kevin"
    const [name, setName] = useState("Kevin")
    const [age, setAge] = useState(25)

    let handleClick = (e) => {
        console.log("Hello, World", e)
        setName("MONDUNGUS")
        setAge(26000)
    }

    let handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>Hello { name }! Wow, you're {age} years old...</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(name, e)}>Click Me Again!</button>
        </div>
     );
}
 
export default Home;