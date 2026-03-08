"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Cpu, Leaf, HeartPulse, Palette, Zap, Users } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const sectors = [
  {
    name: "Digital & Emerging Technologies",
    icon: <Cpu className="h-8 w-8 text-blue-600" />,
    description: "AI/ML, Blockchain, IoT, AR/VR, Cybersecurity, SaaS platforms, and deep tech solutions.",
    color: "bg-indigo-50 border-indigo-200",
  },
  {
    name: "Agriculture & Food Systems",
    icon: <Leaf className="h-8 w-8 text-emerald-600" />,
    description: "Agri-tech, precision farming, food processing, supply chain optimization, and sustainable agriculture.",
    color: "bg-emerald-50 border-emerald-200",
  },
  {
    name: "Health & Wellness",
    icon: <HeartPulse className="h-8 w-8 text-rose-600" />,
    description: "Health-tech, telemedicine, medical devices, biotechnology, mental health solutions, and personalized medicine.",
    color: "bg-rose-50 border-rose-200",
  },
  {
    name: "Creative & Cultural Enterprises",
    icon: <Palette className="h-8 w-8 text-amber-600" />,
    description: "Ed-tech, media, entertainment, design, gaming, digital arts, and platforms promoting cultural heritage.",
    color: "bg-amber-50 border-amber-200",
  },
  {
    name: "Sustainable Infrastructure & Clean Energy",
    icon: <Zap className="h-8 w-8 text-cyan-600" />,
    description: "Renewable energy, smart cities, waste management, green mobility, and climate-tech solutions.",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    name: "Social Impact & Inclusion",
    icon: <Users className="h-8 w-8 text-violet-600" />,
    description: "Fin-tech for the unbanked, assistive technologies, platforms for marginalized communities, and social enterprises.",
    color: "bg-violet-50 border-violet-200",
  },
];

export default function FocusSectors() {
  useDocumentTitle("Focus Sectors");
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Focus Sectors</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We support startups solving critical problems across diverse industries. While we are sector-agnostic, we have specialized resources for these key areas.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector) => (
            <Card key={sector.name} className={`hover:shadow-lg transition-all ${sector.color}`}>
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                  {sector.icon}
                </div>
                <CardTitle className="text-2xl">{sector.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  {sector.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
