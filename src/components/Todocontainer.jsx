
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"


function Todocontainer()
{

 const [activityArr,setactivityArr] = useState([
        {
            id:1,
            activity:"Getup on 6'o Clock"
        },
         {
            id:2,
            activity:"Eat healthy food"
        },
         {
            id:3,
            activity:"Shower to Cold"
        }
    ])
    return(
        <div>
        <div className="flex gap-5 flex-wrap">
           
             <AddTodoForm activityArr={activityArr} setactivityArr={setactivityArr} />
             <TodoList activityArr={activityArr} setactivityArr={setactivityArr} />

        
        </div>
        </div>
    )
}

export default Todocontainer