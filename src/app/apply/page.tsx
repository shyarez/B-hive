"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  startupName: z.string().min(2, "Startup name is required."),
  stage: z.string().min(1, "Please select a stage."),
  sector: z.string().min(1, "Please select a sector."),
  description: z
    .string()
    .min(50, "Description must be at least 50 characters."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function Apply() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-slate-50 py-24 sm:py-32 min-h-[80vh] flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center border-emerald-100 shadow-lg">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-emerald-950">
              Application Received!
            </CardTitle>
            <CardDescription className="text-emerald-800/80 mt-2">
              Thank you for applying to B-HIVE. Our team will review your
              application and get back to you within 5-7 business days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Application
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Apply to B-HIVE
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Take the first step towards building your venture. Fill out the form
            below to apply for our incubation programs.
          </p>
        </div>

        <Card className="border-slate-200 shadow-xl">
          <CardHeader className="bg-slate-50 border-b border-slate-100 pb-8">
            <CardTitle className="text-2xl">Startup Details</CardTitle>
            <CardDescription>
              Please provide accurate information to help us evaluate your
              application.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Aditya Sethi"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="aditya@example.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startupName">Startup Name</Label>
                  <Input
                    id="startupName"
                    placeholder="TechCorp Inc."
                    {...register("startupName")}
                  />
                  {errors.startupName && (
                    <p className="text-sm text-red-500">
                      {errors.startupName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage">Current Stage</Label>
                  <select
                    id="stage"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    {...register("stage")}
                  >
                    <option value="">Select Stage...</option>
                    <option value="Idea">Idea / Concept</option>
                    <option value="Prototype">Prototype / MVP</option>
                    <option value="Early Revenue">Early Revenue</option>
                    <option value="Growth">Growth / Scaling</option>
                  </select>
                  {errors.stage && (
                    <p className="text-sm text-red-500">
                      {errors.stage.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sector">Primary Sector</Label>
                  <select
                    id="sector"
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    {...register("sector")}
                  >
                    <option value="">Select Sector...</option>
                    <option value="Digital">Digital & Emerging Tech</option>
                    <option value="Agri">Agriculture & Food</option>
                    <option value="Health">Health & Wellness</option>
                    <option value="Creative">Creative & Cultural</option>
                    <option value="Sustainability">
                      Sustainable Infra & Clean Energy
                    </option>
                    <option value="Social">Social Impact</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.sector && (
                    <p className="text-sm text-red-500">
                      {errors.sector.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Short Description (Problem & Solution)
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the problem you are solving and your proposed solution..."
                  className="min-h-[120px]"
                  {...register("description")}
                />
                {errors.description && (
                  <p className="text-sm text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any other details you'd like to share..."
                  {...register("message")}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
