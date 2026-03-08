"use client";
import { Building, Cpu, Wifi, Users, Monitor, Coffee } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const facilities = [
  {
    name: "Co-working Space",
    description: "Modern, fully furnished open-plan workspaces designed for collaboration and focus. Includes ergonomic seating, dedicated desks, and hot-desking options.",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/coworking/600/400",
  },
  {
    name: "Prototype Lab",
    description: "State-of-the-art makerspace equipped with 3D printers, CNC machines, electronics workstations, and hand tools for rapid hardware prototyping.",
    icon: <Cpu className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/lab/600/400",
  },
  {
    name: "Digital Infrastructure",
    description: "High-speed enterprise Wi-Fi, cloud computing credits, software licenses, and secure server access to build and deploy digital products.",
    icon: <Wifi className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/server/600/400",
  },
  {
    name: "Event Space",
    description: "A versatile auditorium and seminar halls equipped with advanced AV systems for hosting workshops, pitch days, and networking events.",
    icon: <Building className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/event/600/400",
  },
  {
    name: "Meeting Rooms",
    description: "Private, soundproofed meeting rooms with video conferencing facilities for team huddles, investor pitches, and client meetings.",
    icon: <Monitor className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/meeting/600/400",
  },
  {
    name: "Cafeteria & Lounge",
    description: "Relaxing breakout areas and a fully stocked cafeteria to unwind, network informally, and recharge during long working hours.",
    icon: <Coffee className="h-6 w-6 text-blue-600" />,
    image: "https://picsum.photos/seed/cafe/600/400",
  },
];

export default function Facilities() {
  useDocumentTitle("Facilities");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">World-Class Facilities</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to build, test, and scale your startup under one roof.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {facilities.map((facility) => (
            <div key={facility.name} className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <img
                src={facility.image}
                alt={facility.name}
                className="h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                    {facility.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">{facility.name}</h3>
                </div>
                <p className="text-base leading-7 text-slate-600">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
