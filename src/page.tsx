"use client";
import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, Users, Building2, Globe2, ShieldCheck } from "lucide-react";
import { Button } from "@/app/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Home");
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:pb-32 xl:pb-36">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/workspace/1920/1080?blur=4')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-white/90" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
            Igniting Ideas. <span className="text-blue-600">Empowering Innovators.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            B-HIVE is the innovation and entrepreneurship hub of Birla Global University helping students, researchers and entrepreneurs turn ideas into real ventures.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/apply">
              <Button size="lg" className="h-12 px-8 text-base">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose B-HIVE?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We provide the ecosystem, resources, and mentorship needed to scale your startup.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            <Card className="border-blue-100 bg-white/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-blue-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <CardTitle>Expert Mentorship</CardTitle>
                <CardDescription>
                  Access to industry leaders, successful founders, and domain experts.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-blue-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle>State-of-the-art Facilities</CardTitle>
                <CardDescription>
                  Modern co-working spaces, prototype labs, and digital infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white/50 backdrop-blur-sm transition-all hover:shadow-md hover:border-blue-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Rocket className="h-6 w-6" />
                </div>
                <CardTitle>Funding Support</CardTitle>
                <CardDescription>
                  Seed funding, investor connections, and grant application assistance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-2">50+</span>
              <span className="text-blue-100 font-medium">Startups Incubated</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-2">100+</span>
              <span className="text-blue-100 font-medium">Expert Mentors</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-2">₹10Cr+</span>
              <span className="text-blue-100 font-medium">Funding Raised</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-white mb-2">20+</span>
              <span className="text-blue-100 font-medium">Corporate Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 px-6 py-16 sm:p-20 text-center shadow-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to build the future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Join B-HIVE today and get the support you need to turn your innovative idea into a successful venture.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/apply">
                <Button size="lg" className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white border-none">
                  Start Your Application
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
