"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Send, Loader2, CheckCircle } from "lucide-react";
import { INDIAN_STATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const openings = [
  {
    id: 1,
    title: "Sales Executive",
    department: "Sales",
    location: "Bihar, Jharkhand, UP",
    type: "Full Time",
    experience: "1-3 years",
    description: "Responsible for generating sales and developing dealer network in assigned territory.",
    requirements: ["Graduate with pharma background preferred", "Own 2-wheeler mandatory", "Good communication in Hindi"],
  },
  {
    id: 2,
    title: "Quality Control Analyst",
    department: "Quality Control",
    location: "Patna, Bihar",
    type: "Full Time",
    experience: "2-4 years",
    description: "Conduct physical, chemical and microbiological testing of raw materials and finished products.",
    requirements: ["B.Pharm/M.Sc Chemistry", "Knowledge of HPTLC, UV-Vis analysis", "GMP knowledge required"],
  },
  {
    id: 3,
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Patna, Bihar",
    type: "Full Time",
    experience: "3-5 years",
    description: "Supervise homeopathic medicine production operations ensuring GMP compliance.",
    requirements: ["B.Pharm or D.Pharm", "Experience in homeopathic manufacturing", "GMP compliance knowledge"],
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Patna / Remote",
    type: "Full Time",
    experience: "1-2 years",
    description: "Manage social media, SEO, content marketing and online presence of NHRL.",
    requirements: ["Digital marketing skills", "Social media management", "Content creation ability"],
  },
];

const careerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  position: z.string().min(2),
  experience: z.string().min(1),
  qualification: z.string().min(2),
  location: z.string().min(1),
  coverLetter: z.string().optional(),
});

type CareerFormData = z.infer<typeof careerSchema>;

export function CareersContent() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });

  const onSubmit = async (data: CareerFormData) => {
    setFormStatus("loading");
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setFormStatus("success"); reset(); }
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

  return (
    <div>
      {/* Culture */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { title: "Growth Oriented", desc: "Regular training and career advancement opportunities", icon: "📈" },
              { title: "Inclusive Culture", desc: "Diverse, respectful workplace where everyone thrives", icon: "🤝" },
              { title: "Health Benefits", desc: "Medical insurance, PF, and employee wellness programs", icon: "🏥" },
            ].map((item) => (
              <div key={item.title} className="feature-card text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-14">
            <h2 className="section-title mb-8">Current <span className="gradient-text">Openings</span></h2>
            <div className="space-y-4">
              {openings.map((job) => (
                <div key={job.id} className="bg-white rounded-2xl border border-gray-100 shadow-soft overflow-hidden">
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-gray-900 font-heading">{job.title}</h3>
                      <span className="badge-primary text-xs">{job.department}</span>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{job.type}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{job.experience}</span>
                      </div>
                      {expandedJob === job.id ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                  </button>
                  {expandedJob === job.id && (
                    <div className="px-5 pb-5 border-t border-gray-100">
                      <p className="text-sm text-gray-600 my-4">{job.description}</p>
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-gray-700 mb-2">Requirements:</div>
                        <ul className="space-y-1.5">
                          {job.requirements.map((req) => (
                            <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a href="#apply" className="btn-primary text-sm py-2 px-5">
                        Apply for this Position
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div id="apply">
            <h2 className="section-title mb-8">Apply <span className="gradient-text">Now</span></h2>
            {formStatus === "success" ? (
              <div className="bg-green-50 rounded-3xl p-12 text-center border border-green-200">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">Application Submitted!</h3>
                <p className="text-gray-500">We'll review your application and contact you within 3-5 business days.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-gray-100 max-w-2xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input {...register("fullName")} className={cn("form-input", errors.fullName && "border-red-300")} placeholder="Your full name" />
                      {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input {...register("email")} type="email" className={cn("form-input", errors.email && "border-red-300")} placeholder="your@email.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Mobile *</label>
                      <input {...register("phone")} type="tel" className={cn("form-input", errors.phone && "border-red-300")} placeholder="10-digit mobile" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Position Applied For *</label>
                      <input {...register("position")} className={cn("form-input", errors.position && "border-red-300")} placeholder="Position title" />
                      {errors.position && <p className="mt-1 text-xs text-red-500">{errors.position.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Experience *</label>
                      <select {...register("experience")} className={cn("form-input", errors.experience && "border-red-300")}>
                        <option value="">Select experience</option>
                        <option value="fresher">Fresher</option>
                        <option value="1-2">1-2 years</option>
                        <option value="2-5">2-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                      {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Preferred Location *</label>
                      <select {...register("location")} className={cn("form-input", errors.location && "border-red-300")}>
                        <option value="">Select state</option>
                        {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Qualification *</label>
                    <input {...register("qualification")} className={cn("form-input", errors.qualification && "border-red-300")} placeholder="Your highest qualification" />
                    {errors.qualification && <p className="mt-1 text-xs text-red-500">{errors.qualification.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Cover Letter</label>
                    <textarea {...register("coverLetter")} rows={4} className="form-input resize-none" placeholder="Tell us why you want to join NHRL..." />
                  </div>
                  {formStatus === "error" && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">Something went wrong. Please try again.</div>}
                  <button type="submit" disabled={formStatus === "loading"} className="btn-primary w-full justify-center py-4">
                    {formStatus === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</> : <><Send className="w-4 h-4" />Submit Application</>}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
