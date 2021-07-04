import React, { useState } from 'react'

export default function Image({index, image, handleRemove}) {

    const [hovering, setHovering] = useState(false);

    return (        
        
        <div className="w-1/3 p-1 border flex justify-center" >
        <div className="relative" onMouseLeave={()=>setHovering(false)} onMouseEnter={()=> setHovering(true)}>
            <i className={`fas fa-times absolute right-0 cursor-pointer opacity-50 hover:opacity-100 ${hovering ? "" : "hidden"}`} onClick={() => handleRemove(index)}></i>
        <img src={image} width="150"></img>
        </div>

    </div>
    
    )
}
