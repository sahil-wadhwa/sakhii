import HospitalCommunity from "@/components/hospitalCommunity";
import HospitalHero from "@/components/hospitalHero";
import { Bell, User } from "lucide-react";
import Link from "next/link";

export default function Home(){
    return (
        <div className="w-full h-full bg-white overflow-x-hidden">
            <div className="h-[10vh] flex justify-between items-center px-5 text-black font-roboto">
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
            <HospitalHero/>
            <HospitalCommunity/>
        </div>
    )
}