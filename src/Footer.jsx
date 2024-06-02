import { FaFacebookSquare ,FaInstagram , FaTwitterSquare, FaGithubSquare} from "react-icons/fa";

export default function Footer(){
    return(
        <div className="foot p-10 flex flex-col lg:flex-row text-white gap-[40px] lg:gap-[100px]">
            <div><h1 className="text-[30px] font-bold text-black">WsCube Tech.</h1>
            <p className="max-w-[400px] my-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quos vitae quaerat a animi asperiores quod, ad necessitatibus praesentium id. </p>
            <div className="flex gap-10 text-[25px]"><FaFacebookSquare /><FaInstagram /><FaTwitterSquare /><FaGithubSquare /></div>
            </div>
            <div><ul>
                <li><a href="" className="font-bold" style={{color:'black'}}>Solution</a></li>
                <li><a href="">Analytics</a></li>
                <li><a href="">Marketing</a></li>
                <li><a href="">Commerce</a></li>
                <li><a href="">Insights</a></li>
            </ul></div>
            <div><ul>
                <li><a href="" className="font-bold" style={{color:'black'}} >Support</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Guides</a></li>
                <li><a href="">API Status</a></li>
            </ul></div>
            <div><ul>
                <li><a href="" className="font-bold" style={{color:'black'}} >Company</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Press</a></li>
                <li><a href="">Careers</a></li>
            </ul></div>
        </div>
    )
}