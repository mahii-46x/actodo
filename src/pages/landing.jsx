import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"
function Landing()
{
     const location = useLocation();

    const user = location.state?.user;

   
    return(
        
        
<div className="bg-black p-10">
    <div className="bg-slate-50 p-10 border rounded-md">
       <Header name={user?.username} />

       <div className="flex gap-2 flex-wrap justify-between my-5">
       <Card bgcolor={"#90caf9"} title={"26*"} subtitle={"Ariyalur"}/>
       <Card  bgcolor={"#a5d6a7"} title={"15 November"} subtitle={"03:51 PM"} />
       <Card  bgcolor={"#ffcc80"} title={"Build With"} subtitle={"React"}/>
    </div>
    <Todocontainer />

    </div>
  </div>
    )
}

export default Landing
