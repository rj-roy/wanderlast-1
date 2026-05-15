import DestCard from "@/app/components/destinations/DestCard";
import CardSkeleton from "@/app/components/ui/CardSkeleton";
import { getDest } from "@/app/lib/data";
import { Suspense, use } from "react";

const DestinationPage = () => {
    const destinations = use(getDest())
    return (
        <>
            <div className="w-full max-w-5xl mx-auto px-6 lg:px-12 py-10">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-light text-black">
                        Explore All Destinations
                    </h1>

                    <p className="mt-3 text-gray-500 text-sm md:text-base">
                        Find your perfect travel experience from our curated collection
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300 overflow-hidden">
                    <div className="relative border-b md:border-b-0 md:border-r border-gray-300">
                        <select className="w-full appearance-none bg-white px-4 py-4 text-sm uppercase tracking-wide text-gray-700 outline-none">
                            <option>Category</option>
                        </select>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    <div className="relative border-b md:border-b-0 md:border-r border-gray-300">
                        <select className="w-full appearance-none bg-white px-4 py-4 text-sm uppercase tracking-wide text-gray-700 outline-none">
                            <option>Price Range</option>
                        </select>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    <div className="relative">
                        <select className="w-full appearance-none bg-white px-4 py-4 text-sm uppercase tracking-wide text-gray-700 outline-none">
                            <option>Sort By</option>
                        </select>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </div>

                <div>
                    <div className="mt-5">
                        <p className="text-sm text-gray-600">
                            Showing {destinations.length} destinations
                        </p>
                    </div>

                    <div className="mt-8 min-h-125">
                        <DestCard dest={destinations._id} />

                        {/* <Suspense key={destinations._id} fallback={<CardSkeleton />} >
                        </Suspense> */}
                        {/* {
                            destinations.map(dest => (
                                
                            ))
                        } */}

                    </div>
                </div>



            </div>
        </>
    );
};

export default DestinationPage;