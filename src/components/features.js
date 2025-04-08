import {Bot,Calendar,Hospital} from 'lucide-react';
export default function Features(){

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
    
    return (
        <div className="bg-[#f6efef] h-screen w-screen overflow-x-hidden">
            <div className='mt-[10vh]'>
                <div className='flex'>
                    <img src='phone.png' className='w-[40vw] h-[85vh]'></img>
                    <div className='flex flex-col'>
                      <div className="text-[10vh] text-center text-[#BD0054] font-extrabold font-merriweather">Our Features</div>
                        <div className='text-black flex flex-col gap-9 mt-[10vh]'>
                            {features.map((feature)=>{
                                return(
                                    <div key={feature.name} className='flex gap-3'>
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
    )   
}