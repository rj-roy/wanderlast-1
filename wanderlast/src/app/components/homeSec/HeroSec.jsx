import herI from "@/assets/image/heroI.png"
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const HeroSec = () => {
    return (
        <div className="relaive w-full mx-auto grid place-content-center place-items-center h-[70dvh]">
            <Image
                src={herI}
                alt="heroImg"
                fill
                className="object-cover inset-0 absolute -z-99999"
            />
            <h2 className="text-6xl text-center text-white font-bold">
                Discover Your <br /> Next Adventure
            </h2>
            <p className="text-gray-300 text-center my-4"> 
                Explore breathtaking destinations and create unforgettable memories with <br/> our curated travel experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Link href={'/explore'}>
                    <Button className={'bg-primary rounded-sm w-full'}>
                        Explore Now
                    </Button>
                </Link>
                <Link href={'/destinations'}>
                    <Button className={'bg-gray-600 rounded-sm text-white blur-in-2xl w-full'}>
                        Destination
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default HeroSec;