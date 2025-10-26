import AnimatedButton from "@/components/AnimatedButton";
import CelebrationEffect from "@/components/CelebrationEffect";

export default function Home() {
    return (
        <div className="md:py-[100px] py-12 md:px-14 px-4 bg-[#1F2124]">
            <CelebrationEffect />
            <div className="md:text-3xl text-md text-center font-extrabold text-white">
                📮JUST IN📮 WE JUST SMASHED ANOTHER GRAND AUDIT GAME! JOIN OUR TELEGRAM CHANNEL NOW TO ENJOY MORE FREE GAMES! CLICK THE BUTTON BELOW NOW 👇
            </div>
            <div className="flex items-center justify-center md:py-8 py-5">
                <img className="rounded-lg" src="/Images/winnings.jpg" alt="Winnings" />
            </div>
            <div className="md:text-3xl text-md text-center font-extrabold text-white">
                JOIN BET ECLIPSE BY CLICKING THE BUTTON BELOW FOR FREE👇👇👇
            </div>
            <div className="flex justify-center items-center pt-5">
                <AnimatedButton />
            </div>
        </div>
    );
}
