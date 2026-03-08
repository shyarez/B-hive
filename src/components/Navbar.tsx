"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Hexagon } from "lucide-react";
import { Button } from "@/app/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Facilities", path: "/facilities" },
    { name: "Focus Sectors", path: "/sectors" },
    { name: "Startups", path: "/startups" },
    { name: "News & Events", path: "/news" },
    { name: "Team", path: "/team" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Resources", path: "/resources" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 text-blue-700">
                        <Hexagon className="h-8 w-8 fill-blue-600 text-blue-600" />
                        <span className="text-xl font-bold tracking-tight">B-HIVE</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex lg:items-center lg:gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-blue-600",
                                pathname === link.path ? "text-blue-600" : "text-slate-600"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/apply">
                        <Button size="sm">Apply Now</Button>
                    </Link>
                </div>

                {/* Mobile Nav Toggle */}
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-600 hover:text-blue-600"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {isOpen && (
                <div className="lg:hidden border-t border-blue-50 bg-white px-4 py-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-sm font-medium",
                                    pathname === link.path ? "text-blue-600" : "text-slate-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/apply" onClick={() => setIsOpen(false)}>
                            <Button className="w-full">Apply Now</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}