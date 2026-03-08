import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Startup Pitch Day 2024",
    date: "October 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "B-HIVE Auditorium",
    description: "Watch our top 10 incubated startups pitch their ideas to a panel of esteemed investors and industry leaders.",
    image: "https://picsum.photos/seed/pitch/600/400",
    type: "Event",
  },
  {
    id: 2,
    title: "Masterclass: Scaling Your SaaS Business",
    date: "November 5, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    description: "Learn the strategies and tactics for growing your SaaS startup from 0 to $1M ARR with industry expert Jane Doe.",
    image: "https://picsum.photos/seed/saas/600/400",
    type: "Workshop",
  },
  {
    id: 3,
    title: "B-HIVE Partners with TechCorp for AI Research",
    date: "September 20, 2024",
    time: "",
    location: "",
    description: "We are thrilled to announce a strategic partnership with TechCorp to provide our startups with access to cutting-edge AI tools and mentorship.",
    image: "https://picsum.photos/seed/ai/600/400",
    type: "News",
  },
  {
    id: 4,
    title: "AgriSense Raises Seed Funding",
    date: "September 10, 2024",
    time: "",
    location: "",
    description: "Congratulations to our incubated startup AgriSense for successfully raising $500K in seed funding led by Green Ventures.",
    image: "https://picsum.photos/seed/funding/600/400",
    type: "News",
  },
];

export default function NewsEvents() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">News & Events</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Stay updated with the latest happenings, upcoming workshops, and success stories from the B-HIVE community.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {events.map((item) => (
            <article key={item.id} className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
                  {item.type}
                </div>
              </div>
              <div className="max-w-xl p-8">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime={item.date} className="text-slate-500 flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </time>
                  {item.time && (
                    <span className="text-slate-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </span>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-slate-900 group-hover:text-blue-600 transition-colors">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
                {item.location && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    {item.location}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
