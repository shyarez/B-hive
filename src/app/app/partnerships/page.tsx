import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { Building2, GraduationCap, Landmark, Handshake } from "lucide-react";

const partners = [
  {
    category: "Academic",
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    description: "Collaborations with leading universities for research, talent exchange, and joint incubation programs.",
    logos: [
      "https://picsum.photos/seed/iit/150/80",
      "https://picsum.photos/seed/nit/150/80",
      "https://picsum.photos/seed/mit/150/80",
    ],
  },
  {
    category: "Government",
    icon: <Landmark className="h-8 w-8 text-blue-600" />,
    description: "Supported by state and central government initiatives to foster entrepreneurship and innovation.",
    logos: [
      "https://picsum.photos/seed/startupindia/150/80",
      "https://picsum.photos/seed/msme/150/80",
      "https://picsum.photos/seed/dst/150/80",
    ],
  },
  {
    category: "Corporate",
    icon: <Building2 className="h-8 w-8 text-blue-600" />,
    description: "Industry leaders providing technology access, market reach, and corporate innovation challenges.",
    logos: [
      "https://picsum.photos/seed/google/150/80",
      "https://picsum.photos/seed/microsoft/150/80",
      "https://picsum.photos/seed/aws/150/80",
    ],
  },
  {
    category: "Funding",
    icon: <Handshake className="h-8 w-8 text-blue-600" />,
    description: "Venture capital firms, angel networks, and seed funds actively investing in our portfolio.",
    logos: [
      "https://picsum.photos/seed/sequoia/150/80",
      "https://picsum.photos/seed/accel/150/80",
      "https://picsum.photos/seed/nexus/150/80",
    ],
  },
];

export default function Partnerships() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Partnerships</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            We collaborate with the best to provide unparalleled resources and opportunities to our startups.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {partners.map((partner) => (
            <Card key={partner.category} className="hover:shadow-lg transition-all border-slate-200">
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 shadow-sm">
                  {partner.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl">{partner.category} Partners</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-8 leading-relaxed">{partner.description}</p>
                <div className="grid grid-cols-3 gap-4 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
                  {partner.logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`${partner.category} partner logo`}
                      className="max-h-12 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-32 max-w-4xl text-center bg-blue-600 rounded-3xl p-12 shadow-xl text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Become a Partner</h2>
          <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
            Join our ecosystem to discover innovative startups, co-create solutions, or invest in the next big thing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 text-base bg-white text-blue-600 hover:bg-blue-50 border-none">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
