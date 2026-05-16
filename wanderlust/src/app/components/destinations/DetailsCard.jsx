// 'use client'
import { getDestBySlug } from "@/lib/data";
import { ArrowRight, CalendarDays, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DateFieldD from "../DateFieldD";
import { use } from "react";

const DetailsCard = ({ slug }) => {
    const dest =  use(getDestBySlug(slug));
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-8">
                    <Link href={'/destinations'} className="cursor-pointer">
                        <button className="text-sm text-gray-500 hover:text-black transition">
                            ← Back to Destinations
                        </button>
                    </Link>

                    <div className="flex items-center gap-3">
                        <Link href={'/edit'}>
                            <button className="border border-gray-300 px-5 py-2 text-sm hover:bg-gray-100 transition">
                                Edit
                            </button>
                        </Link>

                        <button className="border border-red-300 text-red-500 px-5 py-2 text-sm hover:bg-red-50 transition">
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Banner Image */}
                <div className="relative w-full h-125 overflow-hidden">
                    {
                        !dest.image_url ? <MapPin size={70} className="object-cover group-hover:scale-105 transition duration-500 h-full w-full p-10 text-red-500" />
                            : <Image src={dest.image_url}
                                alt={dest.destination_name}
                                fill
                                priority
                                className="object-cover"
                            />
                    }

                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 mt-12">
                    {/* Left */}
                    <div>
                        {/* Country */}
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <MapPin size={14} />
                            <span>{dest.country}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-6xl font-light mt-3">
                            {dest.destination_name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-5 mt-5 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <Star
                                    size={15}
                                    fill="green"
                                    className="text-green-600"
                                />

                                <span className="font-medium text-black">
                                    4.9
                                </span>

                                <span>(234 reviews)</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays size={15} />
                                <span>7 Days / 6 Nights</span>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mt-14">
                            <h2 className="text-3xl font-light mb-5">
                                Overview
                            </h2>

                            <p className="text-gray-600 leading-8">
                                {dest.description}
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="mt-14">
                            <h2 className="text-3xl font-light mb-8">
                                Highlights
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10 text-gray-700">
                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <p>Luxury beachfront accommodation</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <p>Visit Uluwatu Temple at sunset</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <p>Traditional Balinese spa treatment</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <p>Private beach dinner experience</p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <p>Sunrise trek to Mount Batur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Booking Card */}
                    <div className="border border-gray-200 p-8 h-fit shadow-sm">
                        <p className="text-sm text-gray-400">
                            Starting from
                        </p>

                        <h2 className="text-5xl font-light text-cyan-700 mt-2">
                            ${dest.price}
                        </h2>

                        <p className="text-sm text-gray-400 mt-1">
                            per person
                        </p>

                        {/* Date */}
                        <div className="border border-gray-200 px-4 py-4 mt-8 text-gray-600">
                            <DateFieldD />
                        </div>

                        {/* Button */}
                        <button className="w-full bg-cyan-800 hover:bg-cyan-900 text-white py-4 mt-8 transition flex items-center justify-center gap-2">
                            Book Now
                            <ArrowRight size={18} />
                        </button>

                        {/* Features */}
                        <div className="mt-8 space-y-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Free cancellation up to 7 days</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>Travel insurance included</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                <span>24/7 customer support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;