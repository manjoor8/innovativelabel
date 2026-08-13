"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <nav aria-label="Breadcrumb" className="bg-neutral-light border-b border-gray-150 py-3.5 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-gray-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="flex items-center gap-1 text-gray-600 hover:text-primary-red transition-all">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const label = path
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <React.Fragment key={path}>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
              {isLast ? (
                <span className="text-primary-blue font-bold tracking-wide" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link href={href} className="text-gray-600 hover:text-primary-red transition-all">
                  {label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
