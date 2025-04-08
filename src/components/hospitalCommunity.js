import Features from "./features";
import {Bot,Calendar,Hospital} from 'lucide-react';
import Footer from "./footer";

export default function HospitalCommunity(){

    const features=[
        {
            name:'AI Health Assisstant',
            desc:'Get instant answers to your health questions from our AI-powered chatbot.',
            url:<Bot size={50}/>,
        },
        {
            name:'Period Tracker',
            desc:'Track your menstrual cycle and get personalized insights.',
            url:<Calendar size={50}/>,
        },
        {
            name:'Expert Consultation',
            desc:'Connect with qualified healthcare professionals online.',
            url:<Hospital size={50}/>,
        }
    ]
    return(
        <div className="w-screen h-full bg-[#0a0a0a]">
            <div className="text-[15vh] uppercase font-bungeeTint text-center pt-[10vh]">Our Features</div>
            <div className=" h-screen w-screen overflow-x-hidden">
            <div className='mt-[10vh]'>
                <div className='flex'>
                    <img src='/phone.png' className='w-[40vw] h-[85vh]'></img>
                    <div className='flex flex-col'>
                        <div className='text-white flex flex-col gap-9 mt-[10vh]'>
                            {features.map((feature)=>{
                                return(
                                    <div key={feature.name} className='flex gap-3 p-5 bg-white text-black rounded-2xl'>
                                        {feature.url}
                                        <div className='flex flex-col'>
                                            <div className='text-2xl font-bold font-merriweather'>{feature.name}</div>
                                            <div className='font-roboto text-xl'>{feature.desc}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
            
            </div>
            <Footer/>
        </div>
    )
}