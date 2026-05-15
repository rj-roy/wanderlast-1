import { getDest } from "@/app/lib/data";
import Image from "next/image";
import { Suspense, use } from "react";
import { MapPin, CalendarDays, Star, ArrowUpRight } from "lucide-react";
import CardSkeleton from "../ui/CardSkeleton";
import Link from "next/link";

const DestCard = ({ dest }) => {
    const destinations = use(getDest(`${dest}`));
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                destinations.map(desti =>
                     (
                    <Suspense key={desti._id} fallback={<CardSkeleton />} >
                        <Link href={`/destinations/${desti.slug}`}>
                            <div className="group bg-white overflow-hidden">
                                <div className="relative w-full h-60 overflow-hidden">
                                    {/* <Image
                                    src={desti.image_url}
                                    alt={desti.destination_name}
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                /> */}
                                    <Image
                                        src={desti.image_url}
                                        alt={desti.description}
                                        height={500}
                                        width={500}
                                        loading="eager"
                                        className="object-cover group-hover:scale-105 transition duration-500 h-full" />

                                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 flex items-center gap-1 text-sm font-medium">
                                        <span>4.5</span>
                                        <Star size={14} fill="black" />
                                    </div>
                                </div>

                                <div className="py-4">
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <MapPin size={15} />
                                        <span>{desti.country}</span>
                                    </div>

                                    <div className="flex justify-between items-start mt-2">
                                        <h2 className="text-2xl font-light">
                                            {desti.destination_name}
                                        </h2>

                                        <div>
                                            <span className="text-2xl font-light">
                                                ${desti.price}
                                            </span>

                                            <span className="text-gray-500 text-sm">
                                                /Person
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-500 mt-3 text-sm">
                                        <CalendarDays size={15} />
                                        <span>7 Days/6 Nights</span>
                                    </div>

                                    <button className="mt-5 flex items-center gap-2 text-sky-700 uppercase tracking-wide text-sm hover:gap-3 transition-all">
                                        Book Now
                                        <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </Suspense>

                ))
            }
        </div>
    );
};

export default DestCard;