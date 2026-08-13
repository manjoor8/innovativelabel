import React from "react";
import ContactForm from "@/components/ContactForm";
import { MapPin, Mail, Phone, Clock, Landmark } from "lucide-react";

export const metadata = {
  title: "Contact Sales & Prepress Teams",
  description: "Connect with our sales and technical teams at our Dombivli MIDC facility. View telephone numbers, email addresses, and location maps.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Factory Address",
      desc: "Innovative Label Solutions Pvt. Ltd., 25,000 sq. ft. Plant, Dombivli MIDC, Thane District, Maharashtra, India. (15 min walking distance from Dombivali Station).",
      icon: MapPin
    },
    {
      title: "Email Enquiries",
      desc: "General: info@labelsolutions.in\nSales: sales@labelsolutions.in",
      icon: Mail
    },
    {
      title: "Phone Numbers",
      desc: "[OFFICIAL PHONE NUMBER REQUIRED]\nSupport hours: Mon - Sat, 9:00 AM - 6:00 PM IST",
      icon: Phone
    },
    {
      title: "Business Hours",
      desc: "Monday - Saturday: 9:00 AM to 6:00 PM IST\nSunday: Closed (Production operates on shifts)",
      icon: Clock
    }
  ];

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Connect With Us
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Contact Our Technical Team
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            Reach out to our Dombivli facility for contract pricing, material reviews, artwork guidelines, or sample requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="border border-gray-150 p-5 rounded-xl bg-neutral-light/30 flex gap-4">
                    <div className="bg-red-50 text-primary-red p-2.5 rounded-lg h-max flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-primary-blue font-heading">{info.title}</h3>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed whitespace-pre-line">
                        {info.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Embed Map Placeholder */}
            <div className="border border-gray-150 rounded-xl overflow-hidden shadow-sm h-64 relative bg-gray-50 flex items-center justify-center text-gray-400">
              <Landmark className="w-8 h-8 text-primary-blue mb-1" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-center bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-xs font-bold text-white leading-tight">Dombivli MIDC Manufacturing Facility</span>
                <span className="text-[10px] text-white/70 mt-0.5">Map API integration requiring company account coordinates.</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-5">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
