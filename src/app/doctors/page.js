import { Bell, User } from "lucide-react";
import Link from "next/link";

export default function Doctors(){
    return(
    <div className="w-screen h-screen bg-gradient-to-r flex flex-col from-[#ecd2db] to-[#e7c5ce] via-[#edd3dc]">
        <div className="h-[10vh] flex justify-between items-center px-5 text-black font-roboto fixed z-1 bg-white w-screen">
                <div className="flex items-center gap-4">
                    <img src="/logo_pink.png" width={50} height={50} alt="Sakhii Foundation"></img>
                    <div className="ml-[3vw] flex gap-9">
                        <Link href=''>Home</Link>
                        <Link href=''>Track Period</Link>
                        <Link href=''>Consult Doctor</Link>
                        <Link href=''>Community</Link>
                    </div>
                    
                </div>
                <div className="flex gap-5 items-center">
                    <Bell size={20} className="bg-black rounded-[50vh]"  color="white"/>
                    <User/>
                </div>
                
            </div>
        <div className="flex">
            <img src="/banner.jpg" className="absolute" alt="banner"></img>
            <div className="flex flex-col z-[1] justify-end items-end w-screen h-[60vh] p-10">
                <div className="text-[7vh] text-black font-bungeeTint">Your Health, Our PRIORITY</div>
                
                <div className="w-[15vw] hover:shadow-2xl hover:scale-125 duration-300 rounded-md h-[7vh] bg-white text-[#BD0054] font-extrabold justify-center items-center flex">Book An Appointment</div>
            </div>
        </div>
    </div>
    )
}