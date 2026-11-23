import { useState } from "react"

function AddTodoForm(props)
{
     const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const[newactivity,setnewactivity] = useState("")
    
    function handleChange(evt)
    {
        setnewactivity(evt.target.value)
        
    }

    function addActivity()
{
    setactivityArr([
        ...activityArr,
        {
            id: activityArr.length + 1,
            activity: newactivity
        }
    ])

    setnewactivity("")
}

    return(
        <div className="flex flex-col gap-3">
           
               
            <h1 className="text-2xl font-bold">Manage Activities</h1>
            <input type="text" onChange={handleChange} className="border-black  border rounded-sm" placeholder="Next Activity?"  value={newactivity}/>
            <button onClick={addActivity} className="bg-black text-white p-1">Add</button>
        
             </div>
    )
}
export default AddTodoForm