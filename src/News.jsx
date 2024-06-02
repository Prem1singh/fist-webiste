
function News() {
    return (
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-10 justify-between py-[50px] text-white px-5"><div><h2 className=" md:text-[40px] text-[30px] font-bold">Want to learn latest I.T. skills ?</h2>
            <p>Sign up to our newsletter and stay up to date</p></div>
            <div><div>
                <input type="email" name="" id="" placeholder="Enter Email" className="px-3 py-2 me-4"/>
                <button className="px-4 py-2 fonst-bold text-white bg-black rounded mt-5">Notify  Me</button></div>
                <p className="text-[14px] mt-4">We care about the protection of your data . Read our <br /> <span className="text-black">Privacy Policy</span> </p>

            </div>

        </div>
    )
}
export default News