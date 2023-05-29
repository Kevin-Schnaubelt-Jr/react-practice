import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {

    const [blogs, setBlogs] = useState([    
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
        { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)

    }

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
    }, [name])

    return ( 
        <div className="home">
            <h1>Hello { name }!</h1>
            <p> Wow, you're {age} years old...</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain(name, e)}>Click Me Again!</button>
            <BlogList blogs={blogs} title="All Dem Blogs!" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;