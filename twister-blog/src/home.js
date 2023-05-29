import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState(null)


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

    useEffect(() => {
        console.log("use effect ran")
        console.log(name)
        fetch("http://localhost:8000/blogs")
            .then(res => (
                res.json()
            ))
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
    }, [])

    return ( 
        <div className="home">
            <h1>Hello { name }!</h1>
            <p> Wow, you're {age} years old...</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(name, e)}>Click Me Again!</button>
            {blogs && <BlogList blogs={blogs} title="All Dem Blogs!" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" />}
        </div>
     );
}
 
export default Home;