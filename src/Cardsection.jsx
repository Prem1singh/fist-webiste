import single from './assets/single.png'
import double from './assets/double.png'
import triple from './assets/triple.png'
export default function Cardsection() {
    return (
        <div className="w-[100vw] bg-white py-[100px]">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between gap-[100px] items-center ">
                <div className='lg:w-[400px] w-[80vw] rounded-lg relative text-center border p-6 group duration-500 cursor-pointer hover:shadow-xl hover:scale-105 hover:bg-[#e1e1e1]' >
                    <div className=' absolute left-[45%] top-[-40px]'><img src={single} alt="" className='w-[80px]' />
                    </div>
                    <h2 className='mt-5 text-[22px] font-bold mb-4'>Web development</h2>
                    <h3 className='my-5 text-[25px] font-bold'>$149</h3>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simple.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy text for printing.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy.</p>
                    <button className='bg-[#63fb63] duration-500 group-hover:text-[white] group-hover:bg-black px-10 mt-5 rounded-md py-2'>Start Trial</button>
                </div>
                <div className='lg:w-[400px] w-[80vw] rounded-lg relative text-center border p-6 group duration-500 cursor-pointer hover:shadow-xl hover:scale-105 hover:bg-[#e1e1e1]' >
                    <div className=' absolute left-[45%] top-[-40px]'><img src={single} alt="" className='w-[80px]' />
                    </div>
                    <h2 className='mt-5 text-[22px] font-bold mb-4'>Web development</h2>
                    <h3 className='my-5 text-[25px] font-bold'>$149</h3>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simple.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy text for printing.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy.</p>
                    <button className='bg-[#63fb63] duration-500 group-hover:text-[white] group-hover:bg-black px-10 mt-5 rounded-md py-2'>Start Trial</button>
                </div>
                <div className='lg:w-[400px] w-[80vw] rounded-lg relative text-center border p-6 group duration-500 cursor-pointer hover:shadow-xl hover:scale-105 hover:bg-[#e1e1e1]' >
                    <div className=' absolute left-[45%] top-[-40px]'><img src={single} alt="" className='w-[80px]' />
                    </div>
                    <h2 className='mt-5 text-[22px] font-bold mb-4'>Web development</h2>
                    <h3 className='my-5 text-[25px] font-bold'>$149</h3>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simple.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy text for printing.</p>
                    <p className='py-4 border border-0 border-b-2'>Lorem ipsum is simply dummy.</p>
                    <button className='bg-[#63fb63] duration-500 group-hover:text-[white] group-hover:bg-black px-10 mt-5 rounded-md py-2'>Start Trial</button>
                </div>
                
                </div>
        </div>
    )
}