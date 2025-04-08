import Link from "next/link";
import Image from "next/image";
import {Roboto,Merriweather} from 'next/font/google'
import myImage from "C:\\Users\\Sahil Wadhwa\\Desktop\\Sakhii\\sakhii\\public\\logo_pink.png"; // Import for local images

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-roboto', // optional: to use as CSS variable
    display: 'swap',          // improves loading
  })


export default function Navbar(){
    const buttons=[
        {
            name:'Doctors',
            link:'/doctors',
        },
        {
            name:'Education',
            link:'',
        },
        {
            name:'Library',
            link:'',
        },
        {
            name:'Community',
            link:'',
        },
        {
            name:'Contact',
            link:'',
        },

    ]
    return ( 
        <div className="flex justify-center mt-[5vh]">
        <div className="w-[80vw] rounded-[30vh] fixed z-[1000] h-[10vh] bg-[#F7E8E8] justify-between flex gap-5 p-5 overflow-x-hidden">
            <Image alt="Sakhii Foundation" src={myImage} width={50} height={100} style={{objectFit:'cover'}}></Image>
            <div className="flex gap-5">
                <div className="flex gap-8">
                {buttons.map((button)=>{
                    return(
                        <div key={button.name} className="flex flex-col group justify-center">
                            <Link key={button.name} className='font-merriweather rounded-[20vh] hover:text-white px-3 py-1 hover:bg-[#9d4e4e] text-black duration-300' href={button.link}>{button.name}</Link>
                            {/* <div className="border hidden group-hover:block border-black w-full"></div> */}
                        </div>
                        
                    )
                })}
                </div>
                <div className="w-[10vw] h-[5vh] bg-black text-white font-merriweather hover:bg-transparent hover:border hover:border-black hover:text-black text-center duration-300 rounded-2xl self-center flex justify-center items-center cursor-pointer"><a href="/login">Login</a></div>
                <div className="w-[10vw] h-[5vh] bg-trasparent font-merriweather text-black border-2 border-black hover:bg-black text-center duration-300 hover:text-white rounded-2xl self-center flex justify-center items-center cursor-pointer"><a href="/signup">Register</a></div>
            </div>
        </div>
        </div>
    )
}