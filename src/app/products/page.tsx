import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { ChevronRight, Settings, ShieldAlert, Package, Layers } from "lucide-react";

export const metadata = {
  title: "Products Portfolio | Custom Label & Packaging",
  description: "Browse our extensive portfolio of pressure-sensitive labels, shrink sleeves, security seals, folding cartons, and specialty finishes.",
};

export default function ProductsIndex() {
  const categories = [
    { name: "Labels", icon: Layers, desc: "Standard and synthetic self-adhesive label formats for automated lines." },
    { name: "Specialty", icon: Settings, desc: "Functional configurations including tactile Braille, dome badges, and hangers." },
    { name: "Security", icon: ShieldAlert, desc: "Tamper-evident seals, holograms, and coin-reactive authentication tags." },
    { name: "Packaging", icon: Package, desc: "Folding board cartons, premium Metpet surfaces, and window boxes." },
  ];

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
            Manufacturing Catalog
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary-blue mt-1 font-heading">
            Our Products Portfolio
          </h1>
          <p className="text-sm text-gray-500 mt-2 max-w-xl mx-auto leading-relaxed">
            We manufacture custom packaging components to exact physical specifications. Browse our portfolio of 27+ product variants below.
          </p>
        </div>

        {/* Categories loop */}
        <div className="space-y-16">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const items = productsData.filter((p) => p.category === cat.name);

            return (
              <div key={cat.name} className="border-t border-gray-150 pt-10 first:border-t-0 first:pt-0">
                {/* Category Header */}
                <div className="flex gap-4 items-start mb-8 text-left max-w-xl">
                  <div className="bg-red-50 text-primary-red p-3 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-primary-blue font-heading">{cat.name} Products</h2>
                    <p className="text-xs text-gray-500 mt-1">{cat.desc}</p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((prod) => (
                    <div
                      key={prod.slug}
                      className="bg-white border border-gray-150 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left group"
                    >
                      <div>
                        <h3 className="text-sm font-bold text-primary-blue group-hover:text-primary-red transition-colors font-heading">
                          {prod.name}
                        </h3>
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                          {prod.description}
                        </p>
                      </div>
                      <Link
                        href={`/products/${prod.slug}`}
                        className="mt-4 text-xs font-bold text-primary-blue hover:text-primary-red flex items-center gap-1 group-hover:translate-x-1 transition-all"
                      >
                        Technical Specs
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
