"use client";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/ui/card";
import { Button } from "@/app/ui/button";
import { ArrowRight, BookOpen, Rocket, Trophy, Briefcase, Coins, Lightbulb } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const programs = [
  {
    title: "Pre-Incubation",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "For early-stage ideas. Validate your concept, build a prototype, and define your business model.",
    duration: "3-6 Months",
    benefits: ["Idea validation", "Basic prototyping support", "Business model canvas workshops"],
  },
  {
    title: "Incubation Program",
    icon: <Rocket className="h-6 w-6" />,
    description: "For startups with an MVP. Focus on product-market fit, early customer acquisition, and team building.",
    duration: "12-18 Months",
    benefits: ["Dedicated workspace", "Expert mentorship", "Seed funding access", "Legal & compliance support"],
  },
  {
    title: "Acceleration Program",
    icon: <Briefcase className="h-6 w-6" />,
    description: "For revenue-generating startups ready to scale. Focus on growth hacking, scaling operations, and Series A readiness.",
    duration: "6 Months",
    benefits: ["Growth marketing strategies", "Investor networking", "Global market access"],
  },
  {
    title: "Innovation Awards",
    icon: <Trophy className="h-6 w-6" />,
    description: "Annual competition recognizing the most innovative ideas from students and researchers.",
    duration: "Annual Event",
    benefits: ["Cash prizes", "Direct entry to incubation", "Media coverage"],
  },
  {
    title: "Workshops & Training",
    icon: <BookOpen className="h-6 w-6" />,
    description: "Regular sessions on essential entrepreneurial skills, emerging technologies, and business strategy.",
    duration: "Ongoing",
    benefits: ["Skill development", "Networking", "Industry insights"],
  },
  {
    title: "Funding Support",
    icon: <Coins className="h-6 w-6" />,
    description: "Assistance with securing grants, seed funding, and connecting with angel investors and VCs.",
    duration: "Ongoing",
    benefits: ["Pitch deck preparation", "Investor introductions", "Grant application assistance"],
  },
];

export default function Programs() {
  useDocumentTitle("Programs");
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Programs</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Comprehensive support tailored to every stage of your entrepreneurial journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col justify-between hover:shadow-lg transition-shadow border-blue-100">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  {program.icon}
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-sm font-medium text-blue-600 mt-1">
                  Duration: {program.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{program.description}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {program.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/apply" className="w-full">
                  <Button variant="outline" className="w-full group">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
