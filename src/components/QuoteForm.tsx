"use client";

import React, { useState } from "react";
import { Send, Upload, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    productRequired: "",
    labelType: "",
    quantity: "",
    format: "roll", // roll or sheet
    dimensions: "",
    material: "",
    finishing: "",
    artworkAvailable: "no", // yes or no
    requirements: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // File size validation (limit 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setStatus({ type: "error", message: "File exceeds 10MB limit." });
        return;
      }
      // Allowed formats (images or pdf)
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(selectedFile.type)) {
        setStatus({ type: "error", message: "Invalid file type. Only JPG, PNG, and PDF are allowed." });
        return;
      }
      setFile(selectedFile);
      setStatus({ type: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting your quote request..." });

    // Mock network request delay
    setTimeout(() => {
      // Log for audit purposes
      console.log("Submitting B2B quote data:", formData, file ? file.name : "no-file");
      setStatus({
        type: "success",
        message: "Thank you! Your quote request has been submitted. Our technical team will contact you in 24 hours.",
      });
      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        industry: "",
        productRequired: "",
        labelType: "",
        quantity: "",
        format: "roll",
        dimensions: "",
        material: "",
        finishing: "",
        artworkAvailable: "no",
        requirements: "",
      });
      setFile(null);
    }, 1500);
  };

  return (
    <div className="bg-white border border-gray-100 p-6 md:p-10 rounded-xl shadow-lg max-w-4xl mx-auto font-sans">
      <div className="flex items-center gap-3 border-b border-gray-100 pb-6 mb-8">
        <div className="bg-red-50 p-2.5 rounded-lg text-primary-red">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-primary-blue">Request a Technical Quote</h3>
          <p className="text-xs text-gray-500 mt-1">Provide your label specifications for a detailed commercial review.</p>
        </div>
      </div>

      {status.type === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex flex-col items-center text-center gap-3">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
          <h4 className="text-base font-bold text-green-800">Quote Request Submitted</h4>
          <p className="text-sm text-green-700 max-w-md">{status.message}</p>
          <button
            onClick={() => setStatus({ type: "idle", message: "" })}
            className="mt-4 text-xs font-bold text-primary-red hover:underline"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {status.type === "error" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{status.message}</span>
            </div>
          )}

          {/* Section 1: Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-primary-red uppercase tracking-wider mb-4">1. Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. Rajesh Kumar"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. BioPharma Labs Pvt Ltd"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. rajesh@biopharmalabs.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. +91 98765 43210"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Specifications */}
          <div className="border-t border-gray-100 pt-6">
            <h4 className="text-xs font-bold text-primary-red uppercase tracking-wider mb-4">2. Label Specifications</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Industry Vertical *</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                >
                  <option value="">Select Industry</option>
                  <option value="pharmaceuticals">Pharmaceuticals</option>
                  <option value="cosmetics">Cosmetics</option>
                  <option value="perfumery">Perfumery</option>
                  <option value="food-beverage">Food & Beverage</option>
                  <option value="chemicals">Chemicals & Agrochemicals</option>
                  <option value="wine-liquor">Wine & Liquor</option>
                  <option value="other">Other / Retail</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Product Type Required *</label>
                <select
                  name="productRequired"
                  value={formData.productRequired}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                >
                  <option value="">Select Product</option>
                  <option value="pressure-sensitive">Pressure Sensitive Labels</option>
                  <option value="self-adhesive">Self Adhesive Labels</option>
                  <option value="shrink-sleeves">Shrink Sleeves</option>
                  <option value="folding-cartons">Folding Cartons</option>
                  <option value="security-labels">Security Labels</option>
                  <option value="specialty-labels">Specialty / Custom Labels</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Specific Variant (if known)</label>
                <input
                  type="text"
                  name="labelType"
                  value={formData.labelType}
                  onChange={handleInputChange}
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. Braille, Clear, Tamper Evident"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Approximate Quantity *</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. 50,000 units"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Supply Format *</label>
                <div className="flex gap-4 items-center py-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="format"
                      value="roll"
                      checked={formData.format === "roll"}
                      onChange={handleInputChange}
                      className="accent-primary-blue"
                    />
                    <span>Roll Form (Machine Apply)</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="format"
                      value="sheet"
                      checked={formData.format === "sheet"}
                      onChange={handleInputChange}
                      className="accent-primary-blue"
                    />
                    <span>Sheet Form (Manual Apply)</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Dimensions (W x H mm) *</label>
                <input
                  type="text"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleInputChange}
                  required
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. 40mm x 80mm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Material Substrate (if decided)</label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. Clear PP, Silver Metpet Paper"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Finishes & Coatings</label>
                <input
                  type="text"
                  name="finishing"
                  value={formData.finishing}
                  onChange={handleInputChange}
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. Gloss Lamination, Matte Varnish"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Artwork Ready? *</label>
                <div className="flex gap-6 items-center py-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="artworkAvailable"
                      value="yes"
                      checked={formData.artworkAvailable === "yes"}
                      onChange={handleInputChange}
                      className="accent-primary-blue"
                    />
                    <span>Yes, Ready</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input
                      type="radio"
                      name="artworkAvailable"
                      value="no"
                      checked={formData.artworkAvailable === "no"}
                      onChange={handleInputChange}
                      className="accent-primary-blue"
                    />
                    <span>No, Need Design Support</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: File Upload and Notes */}
          <div className="border-t border-gray-100 pt-6">
            <h4 className="text-xs font-bold text-primary-red uppercase tracking-wider mb-4">3. Files & Guidelines</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Upload Artwork or Container Shape (Max 10MB)</label>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-50/50 hover:border-primary-blue/50 transition-all relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".jpg,.jpeg,.png,.pdf"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <span className="text-xs text-gray-600 font-bold">
                    {file ? file.name : "Click to upload files"}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1">Accepted types: JPG, PNG, PDF</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Additional Requirements or Quality parameters</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full text-sm border border-gray-200 rounded-md px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-blue/30 focus:border-primary-blue transition-all"
                  placeholder="e.g. Low temperature label adhesion, specific unwind direction 3, specific validation tests required."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 flex justify-end">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="bg-primary-red hover:bg-red-700 text-white text-sm font-bold py-3 px-8 rounded-md transition-all shadow flex items-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              {status.type === "loading" ? (
                <>Processing...</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Quote Request
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
