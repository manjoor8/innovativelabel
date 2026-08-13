"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Compass,
  Building,
  TrendingUp,
  GitBranch,
  Users
} from "lucide-react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const sidebarLinks = [
    { name: "Company Profile", href: "/about/company-profile", icon: FileText },
    { name: "Vision, Mission & Values", href: "/about/vision-mission-values", icon: Compass },
    { name: "Infrastructure & Plant", href: "/about/infrastructure", icon: Building },
    { name: "Company Growth", href: "/about/company-growth", icon: TrendingUp },
    { name: "Management Structure", href: "/about/management", icon: GitBranch },
    { name: "Our Team", href: "/about/team", icon: Users },
  ];

  return (
    <div className="bg-white py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Side Navigation Bar */}
          <aside className="lg:col-span-1">
            <div className="bg-neutral-light border border-gray-150 p-6 rounded-xl shadow-sm sticky top-28 flex flex-col gap-2">
              <h3 className="text-xs font-bold text-primary-blue uppercase tracking-wider mb-4 border-b border-gray-150 pb-2">
                About Company
              </h3>
              <nav className="flex flex-col gap-1">
                {sidebarLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isActive
                          ? "bg-primary-red text-white shadow-sm"
                          : "text-gray-600 hover:text-primary-blue hover:bg-gray-150/40"
                      }`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Child Content Column */}
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-xl shadow-sm">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
