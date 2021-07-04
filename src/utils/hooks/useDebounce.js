import React, { useState } from 'react'

export default function useDebounce() {
    const [typing, settyping] = useState(null);

    function debounce(func, wait=1000){
        clearTimeout(typing);
    const time = settyping(()=>{
        func();
    },wait)
    settyping(time)
    }
    return debounce;
}
