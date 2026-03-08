"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About Us");
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">About B-HIVE</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Birla Hub for Innovation, Venturing & Entrepreneurship (B-HIVE) is the dedicated incubation center of Birla Global University. We exist to foster a culture of innovation and entrepreneurship.
          </p>
        </div>

        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">Our Mission</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Empowering the next generation of founders</p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                To create a vibrant ecosystem that nurtures innovative ideas, provides world-class mentorship, and facilitates access to capital, enabling entrepreneurs to build sustainable and impactful ventures.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                    Innovation First.
                  </dt>
                  <dd className="inline"> We prioritize ideas that solve real-world problems using technology and sustainable practices.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                    Community Driven.
                  </dt>
                  <dd className="inline"> We believe in the power of collaboration, bringing together students, alumni, industry experts, and investors.</dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-slate-900">
                    <CheckCircle2 className="absolute left-1 top-1 h-5 w-5 text-blue-600" />
                    Global Perspective.
                  </dt>
                  <dd className="inline"> While rooted locally, we aim to build startups that can scale globally and make a worldwide impact.</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="https://picsum.photos/seed/university/800/600"
            alt="B-HIVE Campus"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mx-auto mt-32 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Vision</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            To be recognized globally as a premier hub for innovation and entrepreneurship, driving economic growth and social progress through the success of our incubated ventures.
          </p>
        </div>
      </div>
    </div>
  );
}
