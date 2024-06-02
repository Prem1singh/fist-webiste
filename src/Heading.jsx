import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

function Heading(props) {
    const [toggle,settoggle]=useState(false)
    const toggler=()=>{
        settoggle(!toggle)
        props.navtoggler(toggle);
    }
    return(
      <div className="flex justify-between  items-center max-w-[1280px] mx-auto p-4">
        <div className="text-black text-[40px] font-bold">WsCube Tech</div>
        <div>
            <ul className="lg:flex hidden gap-6 text-white ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Comapny</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div  className="text-[30px] block lg:hidden" onClick={toggler}>{toggle?<FaXmark />:<FaBars />}</div>
        <div className="lg:hidden block fixed  top-[80px]  bg-black w-[100vw] h-[100vh] duration-300" style={{left:toggle?'0':'-100%'}}>
            
        <ul className="lg:hidden flex flex-col gap-[30px] text-white p-[30px] text-left text-[25px] ps-[50px]">
                <li><a href="#">Home</a></li>
                <li><a href="#">Comapny</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    )
}
export default Heading;