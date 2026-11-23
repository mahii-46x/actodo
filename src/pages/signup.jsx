import { Link } from "react-router-dom"

function Signup()
{
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="font-bold text-2xl">Hello Hi 👋</h1>
                <p>Signup here :)</p>
                
                <input type="text" placeholder="Username" className="m-1 border-black border rounded-md"></input> <br></br>
                <input type="text" placeholder="password"  className="m-1 border-black border rounded-md"></input> <br></br>
                <input type="text" placeholder="Confirm password"  className="m-1 border-black border rounded-md"></input> <br></br>
                <button className="bg-violet-600 p-1.5 border rounded-md m-1 w-24 ">Signup</button>
                <p>Already have an Account? <Link to={"/"} className="underline">login</Link> </p>  
               </div>
            
        </div>
    )
}
export default Signup