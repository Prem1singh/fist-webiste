import computer from './assets/laptop.jpg'
function Card() {
    return (
        <div className='w-[100vw] bg-white py-[100px] mt-[200px]'>
            <div className='max-w-[1280px] mx-auto  flex lg:flex-row flex-col justify-between items-center px-2'>
            <div><img src={computer} alt="" className='lg:w-[40vw]'/></div>
            <div className='lg:w-[40vw]'><h2 className='text-[#40f540] font-bold uppercase'>Learn form experts</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil doloremque ea sapiente, tempora facilis est voluptatum quibusdam tenetur iste, natus ipsam eius animi ipsum. Alias, natus! Eligendi, consequuntur minima?</p>
            <button className="px-[40px] py-2 fonst-bold text-white bg-black rounded mt-5">Get started</button></div>
            </div>
        </div>
    )
}
export default Card;