import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Badge } from "@/ui/badge";
import { ExternalLink } from "lucide-react";

// Mock data for startups
const startups = [
  {
    id: 1,
    name: "AgriSense",
    sector: "Agriculture & Food Systems",
    stage: "Seed",
    description: "IoT-based precision farming solution helping farmers optimize water and fertilizer usage.",
    logo: "https://picsum.photos/seed/agrisense/100/100",
    website: "#",
  },
  {
    id: 2,
    name: "MedConnect",
    sector: "Health & Wellness",
    stage: "Series A",
    description: "Telemedicine platform connecting rural patients with specialized doctors in urban centers.",
    logo: "https://picsum.photos/seed/medconnect/100/100",
    website: "#",
  },
  {
    id: 3,
    name: "EduPlay",
    sector: "Creative & Cultural Enterprises",
    stage: "Pre-Seed",
    description: "Gamified learning app teaching regional languages and cultural history to children.",
    logo: "https://picsum.photos/seed/eduplay/100/100",
    website: "#",
  },
  {
    id: 4,
    name: "EcoCharge",
    sector: "Sustainable Infrastructure",
    stage: "Seed",
    description: "Network of solar-powered EV charging stations for two-wheelers in tier-2 cities.",
    logo: "https://picsum.photos/seed/ecocharge/100/100",
    website: "#",
  },
  {
    id: 5,
    name: "FinInclus",
    sector: "Social Impact",
    stage: "Pre-Seed",
    description: "Micro-lending platform utilizing alternative data scoring for unbanked micro-entrepreneurs.",
    logo: "https://picsum.photos/seed/fininclus/100/100",
    website: "#",
  },
  {
    id: 6,
    name: "CyberShield",
    sector: "Digital Technologies",
    stage: "Series A",
    description: "AI-driven threat detection system for small and medium enterprises.",
    logo: "https://picsum.photos/seed/cybershield/100/100",
    website: "#",
  },
];

export default function Startups() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Startups</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover the innovative companies building the future at B-HIVE.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {startups.map((startup) => (
            <Card key={startup.id} className="flex flex-col hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <img
                  src={startup.logo}
                  alt={`${startup.name} logo`}
                  className="h-16 w-16 rounded-full object-cover border border-slate-100"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <CardTitle className="text-xl">{startup.name}</CardTitle>
                  <CardDescription className="text-sm font-medium text-blue-600 mt-1">
                    {startup.sector}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <p className="text-slate-600 mb-6">{startup.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
                    {startup.stage}
                  </span>
                  <a
                    href={startup.website}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center gap-1"
                  >
                    Visit <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
