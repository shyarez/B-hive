import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const teamCategories = [
  {
    category: "Advisory Board",
    members: [
      {
        name: "Dr. A.K. Sharma",
        role: "Chairman, B-HIVE",
        bio: "Former Director of IIT, with 30+ years of experience in technical education and innovation.",
        image: "https://picsum.photos/seed/sharma/400/400",
      },
      {
        name: "Ms. Priya Singh",
        role: "Managing Partner, Alpha Ventures",
        bio: "Leading early-stage tech investor with a portfolio of 50+ successful startups.",
        image: "https://picsum.photos/seed/priya/400/400",
      },
    ],
  },
  {
    category: "Management",
    members: [
      {
        name: "Rahul Verma",
        role: "CEO, B-HIVE",
        bio: "Serial entrepreneur turned ecosystem builder. Passionate about scaling deep-tech ventures.",
        image: "https://picsum.photos/seed/rahul/400/400",
      },
      {
        name: "Sneha Patel",
        role: "Head of Incubation",
        bio: "10+ years managing startup programs and corporate innovation initiatives.",
        image: "https://picsum.photos/seed/sneha/400/400",
      },
    ],
  },
  {
    category: "Mentors",
    members: [
      {
        name: "Vikram Das",
        role: "Product Strategy",
        bio: "Ex-Google PM, helping startups achieve product-market fit.",
        image: "https://picsum.photos/seed/vikram/400/400",
      },
      {
        name: "Anita Roy",
        role: "Growth Marketing",
        bio: "Growth hacker who has scaled 3 startups from zero to millions of users.",
        image: "https://picsum.photos/seed/anita/400/400",
      },
      {
        name: "Karan Mehta",
        role: "Legal & Compliance",
        bio: "Corporate lawyer specializing in startup structuring and IP protection.",
        image: "https://picsum.photos/seed/karan/400/400",
      },
    ],
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Team</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Meet the experienced professionals, industry leaders, and dedicated staff guiding our startups to success.
          </p>
        </div>

        {teamCategories.map((section) => (
          <div key={section.category} className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-12 border-b border-slate-200 pb-4">
              {section.category}
            </h2>
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {section.members.map((person) => (
                <li key={person.name} className="flex flex-col items-center text-center">
                  <img
                    className="mx-auto h-48 w-48 rounded-full object-cover shadow-md border-4 border-white ring-1 ring-slate-100"
                    src={person.image}
                    alt={person.name}
                    referrerPolicy="no-referrer"
                  />
                  <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-slate-900">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-6 text-blue-600 font-medium">{person.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600 px-4">{person.bio}</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-4">
                    <li>
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-5 w-5" />
                      </a>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
