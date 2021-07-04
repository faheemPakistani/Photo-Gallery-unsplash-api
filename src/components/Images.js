import React, { useEffect, useRef, useState } from 'react'
import useFetchingImages from '../utils/hooks/useFetchingImages';
import InfiniteScroll from "react-infinite-scroll-component";
import useScroll from '../utils/hooks/useScroll';
import Image from './Image';
import useDebounce from '../utils/hooks/useDebounce';


export default function Images() {
    // const [myInterval, setmyInterval] = useState(null)
    // const [images, setImages] = useState([])
    const [newImage, setNewImage] = useState("")
    const [page, setpage] = useState(1)
    const [searchImage, setSearchImage] = useState(null)

    //custom hooks.
    const [images,setImages, errors] = useFetchingImages(page,searchImage);
    // const scrollPosition = useScroll();


    const inputRef = useRef(null) // to focus in input field
    // const varRef = useRef(images.length) // to focus in input field

//useEffect for scroll
// useEffect(() => {
//     console.log(scrollPosition, window.innerHeight);
// }, [scrollPosition])

// useEffect(() => {
//     inputRef.current.focus();
//     // console.log(process.env)
// }, [])


// useEffect(() => {
//     varRef.current = varRef.current + 1;
// })
    // const Images=["https://images.unsplash.com/photo-1566568500004-fc65c6cbd230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"];


function handleRemove(index){

    setImages(images.filter((image, i)=> i!==index));

    // setImages([...images.slice(0,index),...images.slice(index+1, images.length)]);
    // console.log("reachin");
}


function ImageShow(){

    return (
    <InfiniteScroll dataLength={images.length} next={() => setpage(page + 1)} hasMore={true}
    className="flex flex-wrap">
        
        {
        images.map((img, index)=> (<Image image= {img.urls.regular} 
        handleRemove={handleRemove} index={index} key={index}/>))
        }
    </InfiniteScroll> 
    );
}
// function handleAdd(){
//     if(newImage !== ""){
//     setImages([...images, newImage])
//     // newImage="";
//     setNewImage("");
// }
// }

// function handleChange(event){
//     setNewImage(event.target.value);
// }

// function loadMore() {
//     setpage(page+1);
// }

// const [timeout, settimeout] = useState("")
const debounce = useDebounce()
function handleSearch(e) {
    const text = e.target.value
    debounce(()=>setSearchImage(text))
    
}
    return (
        <section>
            {/* {errors[0]} */}
          {/* <p>Updated {varRef.current} times</p> */}
          <div className="flex justify-center my-4">
                    <input type="text" placeholder="Search images" className="p-2 border border-gray-600 shadow rounded" onChange={handleSearch} ></input>
                </div>

                    <ImageShow/>
                
                
                
                
                {/* <div className="flex justify-between my-4">
                    <input  ref = {inputRef} type="text" className="p-2 border border-gray-600 shadow rounded" 
                    onChange={handleChange} value={newImage}></input>
                    <button 
                    disabled={newImage === ""}
                    className={`p-2 text-white ${newImage !== "" ? "bg-green-600":" bg-green-300"}`} onClick={handleAdd}>
                        Add New
                    </button>
                </div> */}
           
        </section>
    )
}


// export default class Images extends Component {
//     constructor(props){
//         super(props);
//         this.state={interval:null}
//     }

//     componentDidMount(){
//         this.setState({
//             interval: setInterval(()=>{
//                 console.log("Faheem");
//             },1000)
//         })
//     }
//     componentWillUnmount(){

//         console.log(" image Unmount")

//         clearInterval(this.state.interval);
//     }
//     // componentDidUpdate(){
//     //     console.log("image updated")
//     // }
//     render() {
//         return (
//             <img src="https://images.unsplash.com/photo-1566568500004-fc65c6cbd230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80">
//                         </img>
//         )
//     }
// }
