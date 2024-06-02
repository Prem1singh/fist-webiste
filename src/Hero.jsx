import { ReactTyped } from "react-typed";
function Hero() {
    return(
        <div className="mt-[100px] max-w-[1280px] mx-auto text-center">
    <p className="text-black text-[25px] font-bold my-3">Learn with us</p>
    <h1 className="text-white lg:text-[50px] text-[30px] font-bold my-3">Grow with us</h1>
    <div className="text-white lg:text-[40px] text-[25px] font-bold " ><h2>Learn   <div className="text-[#21f521] inline"><ReactTyped strings={['Web development ', 'Digital Marketing ','Ethical Hacking']} typeSpeed={100} loop={true} backSpeed={50} /></div></h2>
    
     {/* <Typed
    strings={['Web development','hacking']}
    typedSpeed={100}
    loop={true}
    backSpeed={50}
    ></Typed> */}
</div>
<button className="px-3 py-2 fonst-bold text-white bg-black rounded mt-5">Get started</button>
    </div>
    )
}
export default Hero;