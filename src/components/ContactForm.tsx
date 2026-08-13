"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    // Mock network request delay
    setTimeout(() => {
      console.log("Submitting B2B contact message:", formData);
      setStatus({
        type: "success",
        message: "Thank you! Your message has been received. Our sales representatives will respond shortly.",
      });
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl shadow-lg font-sans">
      <h3 className="text-lg font-bold text-primary-blue mb-2">Send a Message</h3>
      <p className="text-xs text-gray-500 mb-6">Have a general question about our services? Let us know below.</p>

      {status.type === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center text-center gap-2">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
          <h4 className="text-sm font-bold text-green-800">Message Transmitted</h4>
          <p className="text-xs text-green-700">{status.message}</p>
          <button
            onClick={() => setStatus({ type: "idle", message: "" })}
            className="mt-3 text-xs font-bold text-primary-red hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status.type === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3.5 flex items-center gap-2.5 text-red-700 text-xs">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{status.message}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
              placeholder="Rajesh Kumar"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
              placeholder="e.g. BioPharma Labs Pvt Ltd"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Business Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                placeholder="rajesh@biopharmalabs.com"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                placeholder="e.g. +91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Your Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
              placeholder="Detail your inquiry..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full bg-primary-red hover:bg-red-700 text-white text-xs font-bold py-3 px-4 rounded-md transition-all shadow flex items-center justify-center gap-1.5 disabled:bg-gray-300 disabled:cursor-not-allowed hover:scale-[1.01]"
          >
            {status.type === "loading" ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Inquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
