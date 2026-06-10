"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { ContactFormData } from "@/types";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(10, "Phone number must be 10 digits")
    .max(13, "Phone number is too long")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 font-heading mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-500">
          Thank you for contacting us. We will get back to you within 4 business hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">
          Send Us a Message
        </h2>
        <p className="text-gray-500 text-sm">
          Fill out the form below and our team will respond promptly.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="form-label">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              className={cn("form-input", errors.name && "border-red-300 focus:border-red-400 focus:ring-red-300")}
              {...register("name")}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="form-label">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              className={cn("form-input", errors.phone && "border-red-300 focus:border-red-400 focus:ring-red-300")}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            className={cn("form-input", errors.email && "border-red-300 focus:border-red-400 focus:ring-red-300")}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="form-label">
            Subject <span className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="What is this regarding?"
            className={cn("form-input", errors.subject && "border-red-300 focus:border-red-400 focus:ring-red-300")}
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="form-label">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Write your message here..."
            className={cn("form-input resize-none", errors.message && "border-red-300 focus:border-red-400 focus:ring-red-300")}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Error State */}
        {status === "error" && (
          <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            Something went wrong. Please try again or contact us directly.
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </form>
    </div>
  );
}
