'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'My Bookings', href: '/my-bookings' },
        { name: 'admin', href: '/admin' }
    ];

    const rendeerLinks = links.map((l, i) => (
        <Link
            key={i}
            href={l.href}
            className={`p-2 no-underline hover:text-white hover:bg-[#15a1bf] rounded-sm ${path === l.href ? "text-white bg-[#15a1bf] rounded-sm" : ""}`}
        >
            {l.name}
        </Link>
    ))

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                    <ul className="hidden items-start gap-4 md:flex">
                        {rendeerLinks}
                    </ul>

                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        <Link href="/signin" className={'no-underline'}>Login</Link>
                        <Button>
                            <Link href="/signup" className={'no-underline text-white'}>
                                Sign Up
                            </Link>
                        </Button>
                    </div>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            {rendeerLinks}
                            <li className="mt-4 grid gap-2 border-t border-separator pt-4">
                                <Button className="w-full">
                                    <Link href="/signin" className={'no-underline text-white'}>
                                        Log In
                                    </Link>
                                </Button>
                                <Button className="w-full">
                                    <Link href="/signup" className={'no-underline text-white'}>
                                        Sign Up
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default NavBar;