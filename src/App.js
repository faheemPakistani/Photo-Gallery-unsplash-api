import React, { useEffect, useRef } from "react";

import "./assets/css/style.css";
import Images from "./components/Images";

// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={title:"Faheem", isShowing:false}
//         // this.handleClick = this.handleClick.bind(this); we will bind because "this" is not in the scope of normal function
//     }
//     // if we bound to use normal function, not arrow function then do line 10
    
//     // handleClick(){
//     //     this.setState({isShowing:!this.state.isShowing})
//     // }
//     componentDidMount(){
//         console.log("AppMounted")
//         // this.setState({title:"Hello"})
//     }

//     componentDidUpdate(){
//         console.log("appUpdated")
//     }
//     handleClick = ()=>{
//         this.setState({isShowing:!this.state.isShowing})
//     }

    
//     render(){
//         console.log("app render")
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2 text-center">
//                     <div className="text-center">
//                     <div className="my-4">{this.state.title}</div>
//                     <div>
//                         <button className= "my-2 p-1 bg-blue-700 text-white" onClick={this.handleClick}>Toggle image</button>
                        
//                     </div>
//                     </div>
//                     {
//                         this.state.isShowing ?
                    
//                     (<Images/>):null
//                         }
//                 </div>
//             </section>
//         )
//     }
// }




function App(){
    const [title, setTitle] = React.useState("Hello React");
    return (
        <section className="flex justify-center">
                <div className="">
                    <div className="text-center">
                    <div className="my-4">{title}</div>
                    <Images/>
                </div>
                </div>
            </section>
    )

}
// function App(){
//     const [title, setTitle] = React.useState("Hello React");
//     const [isShowing, setIsShowing] = React.useState(false);
//     const mountRef = useRef(false); // to check updated

//     function handleClick() {
//         setIsShowing(!isShowing);
//     }

//     // component Mounting
//     useEffect(()=>{
//         console.log("App Mounted")
//     },[]); // when the second param "[]" is empty then it will work as Mounting

// // component updated
// useEffect(() => {
//     if(mountRef.current){
//         console.log("App Updated")
//     }
//     else{
//         mountRef.current = true;
//     }
// }, [isShowing]); //use it for updated

//     return (
//         <section className="flex justify-center">
//                 <div className="w-10/12 text-center">
//                     <div className="text-center">
//                     <div className="my-4">{title}</div>
//                     <div>
//                         <button className= "my-2 p-1 bg-blue-700 text-white" onClick={handleClick}>Toggle image</button>
                        
//                     </div>
//                     </div>
//                     {
//                         isShowing ?
                    
//                     (<Images/>):null
//                         }
//                 </div>
//             </section>
//     )
// }

export default App;