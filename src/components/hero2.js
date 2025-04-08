import {Calendar,GitGraph,Bell,CalendarDays} from 'lucide-react';
import { headers } from 'next/headers';

export default function Hero2(){
    const list=[
        {
            name:'Accurate Predictions',
            desc:'AI-powered cycle predictions based on your data',
            url:<Calendar/>
        },
        {
            name:'Symptom Tracking ',
            desc:'Monitor your symptoms and mood changes',
            url:<GitGraph/>
        },
        {
            name:'Smart Reminders',
            desc:'Get notifications for upcoming periods and fertile windows',
            url:<Bell/>
        }
    ]
    return(
       <div className='bg-[#F7E8E8] w-screen h-full flex p-10'>
        <div className='w-full flex flex-col justify-center pl-[5vw]'>
            <div className='text-[7vh] text-[#bb0053] font-extrabold flex items-center gap-5'>Your <span><img src='/logo_pink.png' alt='sakhii' width={100} height={100}></img></span></div>
            <div className='text-[7vh] mt-[-4vh] text-black font-bungeeTint font-extrabold'>Your Friend...</div>
            <div className='text-md w-[40vw] mt-[2vh] text-[#BD0054]'>Your trusted health companion for period tracking, doctor consultations, 
            and expert guidance—now in your language!</div>
            <div className='flex gap-4 mt-[2vh]'>
                <img src='/play.png' alt='playstore'></img>
                <img src='/appstore.png' alt='appstore'></img>
            </div>
        </div>
        <img src='sakhiiphone.png' alt='Sakhii Phone' className='w-[600px] h-[700px] bg-blend-color'></img>
       </div>
    )
}