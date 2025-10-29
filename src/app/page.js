'use client'
import AnimatedButton from "@/components/AnimatedButton";
import CelebrationEffect from "@/components/CelebrationEffect";
import { getData } from "@/lib/Appwrite";
import useAppwrite from "@/lib/useAppwrite";

export default function Home() {
    const { data, loading, refetch } = useAppwrite(getData)

    return (
        <div className="md:py-[100px] py-12 md:px-14 px-4 bg-[#1F2124]">
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
                </div>
            ) :(
                <>
                    <CelebrationEffect />
                    <div className="md:text-3xl text-md text-center font-extrabold text-white">
                        {/* {data[0].textTop} */}
                        📮JUST IN📮 WE JUST SMASHED ANOTHER <span className="text-green-700">GRAND AUDIT GAME!</span> JOIN OUR TELEGRAM CHANNEL NOW TO ENJOY MORE FREE GAMES! CLICK THE BUTTON BELOW NOW 👇
                    </div>
                    <div className="flex items-center justify-center md:py-8 py-5">
                    
                        {/* <img className="rounded-lg" src={data[0].imageUrl} alt="Winnings" /> */}
                        <img className="rounded-lg" src={"/Images/winnings.jpg"} alt="Winnings" />
                    </div>
                    <div className="md:text-3xl text-md text-center font-extrabold text-white">
                        {/* {data[0].textDown} */}
                        JOIN BET ECLIPSE BY CLICKING THE BUTTON BELOW FOR FREE👇👇👇
                    </div>
                    <div className="flex justify-center items-center pt-5">
                        <AnimatedButton 
                            text={data[0]?.buttonText ?? "Join Our Telegram Channel for free"}
                            link={data[0]?.buttonUrl ?? "https://t.me/+tnx-XVb-_GtjN2Q0"}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
