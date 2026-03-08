import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card";
import { FileText, Download, HelpCircle, BookOpen, FileCheck } from "lucide-react";

const resources = [
  {
    category: "Guides",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    items: [
      { title: "Startup Playbook: Idea to MVP", link: "#" },
      { title: "Go-To-Market Strategy Template", link: "#" },
      { title: "Pitch Deck Guidelines", link: "#" },
    ],
  },
  {
    category: "Funding Programs",
    icon: <FileCheck className="h-6 w-6 text-emerald-600" />,
    items: [
      { title: "Seed Fund Application Form", link: "#" },
      { title: "NIDHI-PRAYAS Guidelines", link: "#" },
      { title: "Startup India Seed Fund Scheme Details", link: "#" },
    ],
  },
  {
    category: "Policy Documents",
    icon: <FileText className="h-6 w-6 text-rose-600" />,
    items: [
      { title: "B-HIVE Incubation Policy", link: "#" },
      { title: "Intellectual Property Rights (IPR) Policy", link: "#" },
      { title: "Code of Conduct for Incubatees", link: "#" },
    ],
  },
];

const faqs = [
  {
    question: "Who can apply for incubation at B-HIVE?",
    answer: "Students, alumni, researchers, and external entrepreneurs with an innovative idea or a prototype can apply for our programs.",
  },
  {
    question: "Do I need a registered company to apply?",
    answer: "No, you can apply with just an idea for the Pre-Incubation program. However, for the Incubation program and funding, a registered entity (Private Limited or LLP) is required.",
  },
  {
    question: "What kind of funding support does B-HIVE provide?",
    answer: "We provide seed funding, prototyping grants, and connect startups with our network of angel investors and venture capitalists.",
  },
  {
    question: "Is physical presence required at the incubator?",
    answer: "While we encourage physical presence to maximize the benefits of our ecosystem, we also offer virtual incubation for startups based outside Bhubaneswar.",
  },
];

export default function Resources() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Resources</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Access guides, policies, and frequently asked questions to help you navigate your startup journey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {resources.map((section) => (
            <Card key={section.category} className="border-slate-200 shadow-sm">
              <CardHeader className="flex flex-row items-center gap-4 pb-4 border-b border-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                  {section.icon}
                </div>
                <CardTitle className="text-xl">{section.category}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <Download className="h-5 w-5 text-slate-400 group-hover:text-blue-600 shrink-0 mt-0.5 transition-colors" />
                      <a href={item.link} className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-32 max-w-3xl">
          <div className="flex items-center justify-center gap-3 mb-12">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Frequently Asked Questions</h2>
          </div>
          <dl className="space-y-8 divide-y divide-slate-200">
            {faqs.map((faq, idx) => (
              <div key={idx} className={idx > 0 ? "pt-8" : ""}>
                <dt className="text-lg font-semibold leading-7 text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
