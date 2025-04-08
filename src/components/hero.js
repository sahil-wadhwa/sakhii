import { Fascinate_Inline } from "next/font/google"


const fascinate= Fascinate_Inline ({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
  

export default function Hero(){
    return(
        <div className="flex bg-[url('/bgimage2.jpg')] bg-cover bg-center  mt-[-5vh] h-screen justify-end">
            <div className="flex flex-col w-screen items-center justify-center mt-[10vh] gap-5 p-10 h-[90vh] overflow-x-hidden">
            
            <div className="text-[#572121] text-[8vh] font-merriweather text-center font-extrabold uppercase z-2">Empowering Womens' Health and Education</div>
            <div className="text-[#2f4858] w-screen text-center font-merriweather text-2xl z-2">Your trusted companion for reproductive health, wellness education, and 
            expert medical guidance. </div>
            <div className="flex gap-5">
                <div className="w-[13vw] z-2 rounded-sm h-[7vh] bg-[url('/pills.gif')] bg-cover bg-center font-roboto font-extrabold uppercase text-white text-2xl hover:scale-110 text-end hover:bg-transparent hover:border hover:border-black hover:text-white duration-300 self-center flex justify-end pr-2 items-center cursor-pointer">Login</div>
                <div className="w-[13vw] z-2 rounded-sm h-[7vh] bg-trasparent font-roboto font-extrabold uppercase text-black border-2 border-[#7c768e] hover:bg-white text-center duration-300 hover:text-black self-center flex justify-center items-center cursor-pointer">Register</div>
            </div>
            </div>
            

        </div>
        
        
    )
}