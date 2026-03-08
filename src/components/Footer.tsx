"use client"
import Link from "next/link";
import { Hexagon, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
                    {/* Brand */}
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            <Hexagon className="h-8 w-8 fill-blue-600 text-blue-600" />
                            <span className="text-xl font-bold tracking-tight">B-HIVE</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Birla Hub for Innovation, Venturing & Entrepreneurship.
                            Empowering students, researchers, and entrepreneurs to turn ideas into real ventures.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                            <li><Link href="/programs" className="hover:text-blue-400">Programs</Link></li>
                            <li><Link href="/startups" className="hover:text-blue-400">Startups</Link></li>
                            <li><Link href="/news" className="hover:text-blue-400">News & Events</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/facilities" className="hover:text-blue-400">Facilities</Link></li>
                            <li><Link href="/sectors" className="hover:text-blue-400">Focus Sectors</Link></li>
                            <li><Link href="/partnerships" className="hover:text-blue-400">Partnerships</Link></li>
                            <li><Link href="/resources" className="hover:text-blue-400">Guides & FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>Birla Global University Campus, IDCO Plot No. 2, Gothapatna, Bhubaneswar, Odisha 751029</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 shrink-0 text-blue-500" />
                                <span>bhive@bgu.ac.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} B-HIVE, Birla Global University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
