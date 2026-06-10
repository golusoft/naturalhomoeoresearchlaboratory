import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/utils";

export function ContactInfo() {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: SITE_CONFIG.contact.phone,
      secondary: SITE_CONFIG.contact.phone2,
      href: `tel:${SITE_CONFIG.contact.phone}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: SITE_CONFIG.contact.email,
      secondary: SITE_CONFIG.contact.emailSales,
      href: `mailto:${SITE_CONFIG.contact.email}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: SITE_CONFIG.address.full,
      href: `https://maps.google.com/?q=${encodeURIComponent(SITE_CONFIG.address.full)}`,
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: SITE_CONFIG.hours.weekdays,
      secondary: SITE_CONFIG.hours.sunday,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 font-heading mb-2">
          Contact Information
        </h2>
        <p className="text-gray-500 text-sm">
          Reach out to us through any of the following channels. We typically
          respond within 4 business hours.
        </p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-soft hover:shadow-medium transition-shadow group">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Icon className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium mb-0.5">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-gray-900">{item.value}</div>
                {item.secondary && (
                  <div className="text-xs text-gray-500 mt-0.5">{item.secondary}</div>
                )}
              </div>
            </div>
          );

          return (
            <div key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <a
        href={getWhatsAppLink(
          SITE_CONFIG.contact.whatsapp,
          "Hello! I have a query regarding your products/services."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366]/20 transition-colors"
      >
        <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">
            Chat on WhatsApp
          </div>
          <div className="text-xs text-gray-500">
            Quick responses, order inquiries
          </div>
        </div>
      </a>

      {/* Department Contacts */}
      <div className="p-5 bg-gray-50 rounded-2xl">
        <h3 className="font-semibold text-gray-900 text-sm mb-3">
          Department Contacts
        </h3>
        <div className="space-y-2.5">
          {[
            { dept: "Sales & Orders", email: SITE_CONFIG.contact.emailSales },
            { dept: "Distributor Inquiry", email: SITE_CONFIG.contact.email },
            { dept: "Customer Support", email: SITE_CONFIG.contact.emailSupport },
          ].map((item) => (
            <div key={item.dept} className="flex items-center justify-between">
              <span className="text-xs text-gray-500">{item.dept}</span>
              <a
                href={`mailto:${item.email}`}
                className="text-xs font-medium text-primary hover:underline"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
