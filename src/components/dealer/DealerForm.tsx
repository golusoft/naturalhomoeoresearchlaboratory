"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { INDIAN_STATES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const dealerSchema = z.object({
  shopName: z.string().min(2, "Shop name is required"),
  ownerName: z.string().min(2, "Owner name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Valid 10-digit mobile required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(2, "District is required"),
  city: z.string().min(2, "City is required"),
  address: z.string().min(10, "Full address required"),
  pincode: z.string().regex(/^\d{6}$/, "Valid 6-digit pincode required"),
  gstNumber: z.string().optional(),
  drugLicense: z.string().min(5, "Drug license required"),
  businessType: z.string().min(1, "Business type required"),
  message: z.string().optional(),
});

type DealerFormData = z.infer<typeof dealerSchema>;

export function DealerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<DealerFormData>({
    resolver: zodResolver(dealerSchema),
  });

  const onSubmit = async (data: DealerFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/dealer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Column */}
          <div className="lg:col-span-2">
            <div className="section-tag">Why Join as Dealer</div>
            <h2 className="section-title mt-4">
              Dealer <span className="gradient-text">Benefits</span>
            </h2>
            <div className="mt-6 space-y-4">
              {[
                { title: "Direct from Manufacturer", desc: "Get products at manufacturer prices with the best margins" },
                { title: "No MOQ for First Order", desc: "Start with any quantity. No minimum order for first purchase." },
                { title: "Regular Supply", desc: "Consistent and timely supply from our warehouses" },
                { title: "Product Support", desc: "Complete product information and doctor consultation support" },
                { title: "Marketing Materials", desc: "Free product brochures and promotional materials" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="bg-white rounded-3xl p-12 text-center shadow-soft">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">Registration Received!</h3>
                <p className="text-gray-500">Our sales team will contact you within 24 hours.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Dealer Registration Form</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Shop/Medical Store Name *</label>
                      <input {...register("shopName")} className={cn("form-input", errors.shopName && "border-red-300")} placeholder="Shop name" />
                      {errors.shopName && <p className="mt-1 text-xs text-red-500">{errors.shopName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Owner Name *</label>
                      <input {...register("ownerName")} className={cn("form-input", errors.ownerName && "border-red-300")} placeholder="Owner's name" />
                      {errors.ownerName && <p className="mt-1 text-xs text-red-500">{errors.ownerName.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input {...register("email")} type="email" className={cn("form-input", errors.email && "border-red-300")} placeholder="your@email.com" />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Mobile Number *</label>
                      <input {...register("phone")} type="tel" className={cn("form-input", errors.phone && "border-red-300")} placeholder="10-digit number" />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                    </div>
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
                    <div>
                      <label className="form-label">Pincode *</label>
                      <input {...register("pincode")} className={cn("form-input", errors.pincode && "border-red-300")} placeholder="6-digit pincode" maxLength={6} />
                      {errors.pincode && <p className="mt-1 text-xs text-red-500">{errors.pincode.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Drug License No. *</label>
                      <input {...register("drugLicense")} className={cn("form-input", errors.drugLicense && "border-red-300")} placeholder="Drug license number" />
                      {errors.drugLicense && <p className="mt-1 text-xs text-red-500">{errors.drugLicense.message}</p>}
                    </div>
                    <div>
                      <label className="form-label">Business Type *</label>
                      <select {...register("businessType")} className={cn("form-input", errors.businessType && "border-red-300")}>
                        <option value="">Select type</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="medical-store">Medical Store</option>
                        <option value="homeopathic-clinic">Homeopathic Clinic</option>
                        <option value="superstore">Health Superstore</option>
                      </select>
                      {errors.businessType && <p className="mt-1 text-xs text-red-500">{errors.businessType.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Full Address *</label>
                    <input {...register("address")} className={cn("form-input", errors.address && "border-red-300")} placeholder="Complete shop address" />
                    {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Message (Optional)</label>
                    <textarea {...register("message")} rows={3} className="form-input resize-none" placeholder="Any special requirements..." />
                  </div>
                  {status === "error" && <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">Something went wrong. Please try again.</div>}
                  <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center py-4">
                    {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" />Submitting...</> : <><Send className="w-4 h-4" />Submit Dealer Registration</>}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
