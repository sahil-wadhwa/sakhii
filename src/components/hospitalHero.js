export default function HospitalHero(){
    return(
        <div className="w-screen h-full overflow-x-hidden bg-white flex">
            <div className="w-full p-5">
                <div className="text-[7vh] text-black font-merriweather mt-[5vh] font-extrabold">Your Personal Health Companion</div>
                <div className="text-lg w-[40vw] text-gray-600">Track your period, connect with doctors, and join a supportive 
                    community. Get personalized health insights and education in 
                    your preferred language. </div>
                    <div className="flex gap-3 mt-[3vh]">
                        <div className="w-[10vw] h-[7vh] flex justify-center items-center font-roboto bg-black text-white rounded-xl">Get Started</div>
                        <div className="w-[10vw] h-[7vh] flex justify-center items-center font-roboto bg-purple-300 text-black rounded-xl">Learn More</div>
                    </div>
            </div>
            <img src="/hospital.png" alt="hospital" className="h-[558px] w-[720px]"></img>
        </div>
    )
}