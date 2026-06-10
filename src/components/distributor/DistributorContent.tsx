"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Package,
  HeadphonesIcon,
  FileText,
  Users,
  Truck,
  CheckCircle,
  Send,
  Loader2,
} from "lucide-react";
import { INDIAN_STATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const distributorSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit mobile number required"),
  alternatePhone: z.string().optional(),
  state: z.string().min(1, "State is required"),
  district: z.string().min(2, "District is required"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(10, "Full address is required"),
  pincode: z.string().regex(/^\d{6}$/, "Valid 6-digit pincode required"),
  gstNumber: z.string().min(15, "Valid GST number required"),
  drugLicense: z.string().min(5, "Drug license number required"),
  businessType: z.string().min(1, "Business type is required"),
  investmentCapacity: z.string().min(1, "Investment capacity is required"),
  message: z.string().optional(),
});

type DistributorFormData = z.infer<typeof distributorSchema>;

const benefits = [
  {
    icon: TrendingUp,
    title: "High Profit Margins",
    description: "Competitive pricing structure with attractive margins of 15-25% on all products",
    color: "text-teal-600 bg-teal-50",
  },
  {
    icon: Package,
    title: "Stock Support",
    description: "Initial stock on credit terms for established distributors. Flexible payment options.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Dedicated sales representative and customer support for all distribution queries",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: FileText,
    title: "Marketing Materials",
    description: "Complete marketing kit including brochures, product literature, and promotional materials",
    color: "text-orange-600 bg-orange-50",
  },
  {
    icon: Users,
    title: "Product Training",
    description: "Regular product training sessions and updates on new launches and formulations",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: Truck,
    title: "Logistic Support",
    description: "Pan-India logistics network with fast and reliable delivery to your warehouse",
    color: "text-red-600 bg-red-50",
  },
];

export function DistributorContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DistributorFormData>({
    resolver: zodResolver(distributorSchema),
  });

  const onSubmit = async (data: DistributorFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/distributor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="section-tag mx-auto w-fit">Why Distribute With Us</div>
            <h2 className="section-title mt-4">
              The NHRL{" "}
              <span className="gradient-text">Distributor Advantage</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4 text-center">
              We provide everything you need to build a successful distribution business
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="feature-card"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${benefit.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 font-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Requirements */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
              <h3 className="font-bold text-gray-900 font-heading text-lg mb-4">
                Eligibility Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Valid Drug License (Wholesale)",
                  "GST Registration",
                  "Minimum investment capacity of ₹2-5 lakhs",
                  "Dedicated warehouse/storage space",
                  "Sales team of minimum 2-3 people",
                  "Coverage of at least 1 district",
                ].map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
              <h3 className="font-bold text-gray-900 font-heading text-lg mb-4">
                Investment & Returns
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Minimum Investment", value: "₹2 - 5 Lakhs" },
                  { label: "Profit Margin", value: "15% - 25%" },
                  { label: "Credit Period", value: "30 - 45 Days" },
                  { label: "Return on Investment", value: "Expected 30-40% p.a." },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-secondary/10 last:border-0">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gray-50" id="apply">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="section-tag mx-auto w-fit">Apply Now</div>
              <h2 className="section-title mt-4">
                Distributor{" "}
                <span className="gradient-text">Application Form</span>
              </h2>
              <p className="section-subtitle mx-auto mt-3 text-center">
                Fill in your details and our team will contact you within 24 hours
              </p>
            </motion.div>

            {status === "success" ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-soft border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">
                  Application Received!
                </h3>
                <p className="text-gray-500">
                  Thank you for your interest. Our team will review your application
                  and contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-gray-100">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Company & Contact */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Company/Firm Name *</label>
                      <input {...register("companyName")} className={cn("form-input", errors.companyName && "border-red-300")} placeholder="Your company name" />
                      {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Contact Person *</label>
                      <input {...register("contactPerson")} className={cn("form-input", errors.contactPerson && "border-red-300")} placeholder="Your name" />
                      {errors.contactPerson && <p className="mt-1 text-xs text-red-500">{errors.contactPerson.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input {...register("email")} type="email" className={cn("form-input", errors.email && "border-red-300")} placeholder="your@email.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Mobile Number *</label>
                      <input {...register("phone")} type="tel" className={cn("form-input", errors.phone && "border-red-300")} placeholder="10-digit mobile" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label className="form-label">State *</label>
                      <select {...register("state")} className={cn("form-input", errors.state && "border-red-300")}>
                        <option value="">Select State</option>
                        {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.state && <p className="mt-1 text-xs text-red-500">{errors.state.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">District *</label>
                      <input {...register("district")} className={cn("form-input", errors.district && "border-red-300")} placeholder="District" />
                      {errors.district && <p className="mt-1 text-xs text-red-500">{errors.district.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">City *</label>
                      <input {...register("city")} className={cn("form-input", errors.city && "border-red-300")} placeholder="City" />
                      {errors.city && <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div className="sm:col-span-2">
                      <label className="form-label">Full Address *</label>
                      <input {...register("address")} className={cn("form-input", errors.address && "border-red-300")} placeholder="Full business address" />
                      {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Pincode *</label>
                      <input {...register("pincode")} className={cn("form-input", errors.pincode && "border-red-300")} placeholder="6-digit pincode" maxLength={6} />
                      {errors.pincode && <p className="mt-1 text-xs text-red-500">{errors.pincode.message}</p>}
                    </div>
                  </div>

                  {/* Business Details */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">GST Number *</label>
                      <input {...register("gstNumber")} className={cn("form-input", errors.gstNumber && "border-red-300")} placeholder="15-digit GST number" maxLength={15} />
                      {errors.gstNumber && <p className="mt-1 text-xs text-red-500">{errors.gstNumber.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Drug License Number *</label>
                      <input {...register("drugLicense")} className={cn("form-input", errors.drugLicense && "border-red-300")} placeholder="Drug license number" />
                      {errors.drugLicense && <p className="mt-1 text-xs text-red-500">{errors.drugLicense.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Business Type *</label>
                      <select {...register("businessType")} className={cn("form-input", errors.businessType && "border-red-300")}>
                        <option value="">Select type</option>
                        <option value="wholesale">Wholesale Distributor</option>
                        <option value="regional">Regional Distributor</option>
                        <option value="stockist">Stockist</option>
                        <option value="c&f">C&F Agent</option>
                      </select>
                      {errors.businessType && <p className="mt-1 text-xs text-red-500">{errors.businessType.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Investment Capacity *</label>
                      <select {...register("investmentCapacity")} className={cn("form-input", errors.investmentCapacity && "border-red-300")}>
                        <option value="">Select range</option>
                        <option value="1-2L">₹1 - 2 Lakhs</option>
                        <option value="2-5L">₹2 - 5 Lakhs</option>
                        <option value="5-10L">₹5 - 10 Lakhs</option>
                        <option value="10L+">₹10 Lakhs+</option>
                      </select>
                      {errors.investmentCapacity && <p className="mt-1 text-xs text-red-500">{errors.investmentCapacity.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Additional Message</label>
                    <textarea {...register("message")} rows={3} className="form-input resize-none" placeholder="Any additional information..." />
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center py-4">
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting Application...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Submit Distributor Application</>
                    )}
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
