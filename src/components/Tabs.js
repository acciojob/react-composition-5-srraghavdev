import React from 'react'
let Tabs= (props)=>{
    return (
        <ul>
            {   props.tabs.map(element=>{
                    return(<li onClick={()=>{props.onclick(element.content,props.id)}}>{element.content}</li>)
                })
             }
        </ul>
    )
}
export default Tabs