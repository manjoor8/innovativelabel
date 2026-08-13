import React from "react";
import Link from "next/link";
import { AlertTriangle, Home, FileText, Settings } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center py-16 px-4 text-center font-sans">
      <div className="bg-red-50 text-primary-red p-4 rounded-full mb-6 animate-pulse">
        <AlertTriangle className="w-12 h-12" />
      </div>
      
      <span className="text-xs font-bold uppercase tracking-wider text-primary-red">
        404 Error
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary-blue mt-2 font-heading leading-tight">
        Looks like this label got misplaced.
      </h1>
      <p className="text-sm text-gray-500 mt-3 max-w-md leading-relaxed">
        The page you are trying to reach doesn't exist or has been archived. Check our links below to navigate back to B2B specifications.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          Back to Home
        </Link>
        <Link
          href="/products"
          className="bg-neutral-light border border-gray-150 text-gray-700 hover:text-primary-red font-bold py-2.5 px-6 rounded text-xs transition-all flex items-center gap-2"
        >
          <Settings className="w-4 h-4" />
          Explore Products
        </Link>
        <Link
          href="/request-a-quote"
          className="bg-primary-red hover:bg-red-700 text-white font-bold py-2.5 px-6 rounded text-xs transition-all shadow flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          Request a Quote
        </Link>
      </div>
    </div>
  );
}
