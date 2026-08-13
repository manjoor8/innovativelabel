export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "Labels" | "Specialty" | "Packaging" | "Security";
  description: string;
  shortIntro: string;
  applications: string[];
  advantages: string[];
  materials?: string[];
  finishes?: string[];
  printingCapabilities: string;
  suitableIndustries: string[];
  qualityConsiderations: string;
  faqs: ProductFAQ[];
  relatedProductSlugs: string[];
}

export const productsData: Product[] = [
  {
    slug: "pressure-sensitive-labels",
    name: "Pressure Sensitive Labels",
    category: "Labels",
    description: "Industry-standard self-adhesive labels requiring only light pressure for application on automated packaging lines.",
    shortIntro: "Pressure-sensitive labels are the modern standard for product decoration across packaging industries. They stick to surfaces with light pressure without needing water, heat, or solvents, making them perfect for high-speed automated application.",
    applications: [
      "Automated label application on high-speed bottling lines",
      "Pharmaceutical bottles, vials, and syringe labeling",
      "Cosmetics jars, squeeze tubes, and containers",
      "Food and beverage packaging jars and bottles"
    ],
    advantages: [
      "Precision die-cutting for seamless machine dispensing",
      "Excellent adhesion on glass, plastic, metal, and cardboard",
      "Supports multiple print processes and high-end finishes",
      "Available in roll form for automatic and semi-automatic systems"
    ],
    materials: ["PP (Polypropylene) Film", "PE (Polyethylene)", "PET (Polyester)", "Semi-Gloss Paper"],
    finishes: ["Gloss Lamination", "Matte Lamination", "UV Varnish", "Foil Stamping"],
    printingCapabilities: "Printed on state-of-the-art flexographic presses (Taiyo, Alliance, Mark Andy) supporting up to 10 colors.",
    suitableIndustries: ["Pharmaceuticals", "Cosmetics", "Food & Beverages", "Chemicals", "Wine & Liquor"],
    qualityConsiderations: "Inspected by the Re Italy 100% defect detection system to guarantee no missing labels or print errors.",
    faqs: [
      {
        q: "What is the difference between pressure-sensitive and self-adhesive labels?",
        a: "They are identical in B2B packaging terms. Both describe labels with pre-applied adhesive that stick with pressure alone."
      },
      {
        q: "Are these labels suitable for automatic labeling machines?",
        a: "Yes, they are supplied in roll form with precise spacing and release-liner tension optimized for high-speed automatic lines."
      }
    ],
    relatedProductSlugs: ["self-adhesive-labels", "specialty-labels", "laminated-labels"]
  },
  {
    slug: "self-adhesive-labels",
    name: "Self Adhesive Labels",
    category: "Labels",
    description: "Versatile adhesive labels available in roll form for industrial automation and sheet form for manual setups.",
    shortIntro: "Self-adhesive labels represent the core manufacturing line of Innovative Label Solutions. We manufacture them in roll form for automatic machinery and sheet form for manual labeling, tailored to client substrate requirements.",
    applications: [
      "Product labeling across consumer and commercial sectors",
      "Logistics and shipping barcode identification labels",
      "Manual product carton labeling in sheet form",
      "Promotional or branding sticker formats"
    ],
    advantages: [
      "Highly adaptable adhesive options (permanent, removable, freezer-grade)",
      "Vibrant color output matching brand guidelines",
      "High durability against moisture, friction, and mild chemicals",
      "Eco-friendly liner and substrate availability"
    ],
    materials: ["Coated Paper", "Direct Thermal Paper", "PP Clear/White", "Silver Metallized Paper"],
    finishes: ["Spot UV Varnish", "Gloss/Matte Lamination", "Embossing"],
    printingCapabilities: "Flexo printed up to 10 colors. High resolution text and barcode readability.",
    suitableIndustries: ["Cosmetics", "Food & Beverages", "Chemicals", "Consumer Products", "Agrochemicals"],
    qualityConsiderations: "Ensured scan-readability on all barcode sectors and complete text definition under ISO 9001 guidelines.",
    faqs: [
      {
        q: "Do you supply self-adhesive labels in sheet form?",
        a: "Yes, we print and supply them in sheet form for manual application, alongside our primary automatic roll configurations."
      }
    ],
    relatedProductSlugs: ["pressure-sensitive-labels", "barcode-labels", "clear-labels"]
  },
  {
    slug: "shrink-sleeves",
    name: "Shrink Sleeves",
    category: "Packaging",
    description: "Full-body 360-degree graphics sleeves that shrink conformally around complex container shapes.",
    shortIntro: "Shrink sleeves offer complete 360-degree graphics coverage for containers, conforming perfectly to unique contours when heat is applied. They combine branding, product details, and optional tamper-evident seals into a single premium solution.",
    applications: [
      "Full body contour packaging for beverage bottles",
      "Tamper-evident neck bands for pharmaceutical bottles",
      "Multi-pack promotional labeling",
      "Cosmetics containers with irregular curved shapes"
    ],
    advantages: [
      "Maximized branding space with 360-degree graphics wrap",
      "Built-in tamper-evidence option with neck perforations",
      "Scuff, moisture, and chemical resistant design (reverse printed)",
      "Strengthens glass containers against shattering"
    ],
    materials: ["PVC Shrink Film", "PET-G Shrink Film", "OPS (Oriented Polystyrene)"],
    finishes: ["Gloss Finish", "Matte Finish", "Pearlescent Ink Effects", "Metallic Foiling"],
    printingCapabilities: "Reverse printed on high-speed flexographic presses to protect graphics from friction and wear.",
    suitableIndustries: ["Food & Beverages", "Cosmetics", "Pharmaceuticals", "Consumer Products"],
    qualityConsiderations: "Shrink rates are mathematically calibrated to container dimensions to prevent graphic distortion during heat application.",
    faqs: [
      {
        q: "Which material is better: PVC or PET-G?",
        a: "PET-G offers higher shrinkage percentage (up to 78%) and is more eco-friendly, making it the preferred choice for complex contours and global brands. PVC is cost-effective for moderate shrink profiles."
      }
    ],
    relatedProductSlugs: ["specialty-labels", "tamper-proof-labels", "clear-labels"]
  },
  {
    slug: "cartons",
    name: "Cartons",
    category: "Packaging",
    description: "High-quality folding cartons, Metpet, and window boxes designed to protect and enhance shelf presence.",
    shortIntro: "Innovative folding cartons are engineered to protect products and create exceptional shelf appeal. We print and manufacture paperboard cartons, including premium Metpet and die-cut window cartons, customized to your physical product size.",
    applications: [
      "Pharmaceutical tablet and syrup outer unit cartons",
      "Cosmetics and perfume primary outer boxes",
      "Premium chocolate and food packaging",
      "Retail product display carton boxes"
    ],
    advantages: [
      "Excellent structural integrity to prevent product crushing",
      "Metpet laminations for high-end metallic branding visuals",
      "Window patching for direct product visibility",
      "Supports complex emboss/deboss and foil patterns"
    ],
    materials: ["SBS (Solid Bleached Sulfate) Board", "FBB (Folding Box Board)", "Duplex Board", "Metpet Board"],
    finishes: ["UV Drip Effect", "Foil Stamping", "Embossing", "Matte/Gloss Lamination", "Soft Touch Varnish"],
    printingCapabilities: "Printed on heavy-weight board substrates with inline die-cutting and folder-gluing capabilities.",
    suitableIndustries: ["Pharmaceuticals", "Cosmetics", "Food & Beverages", "Perfumery", "Consumer Products"],
    qualityConsiderations: "Strict calibration of crease scores and fold resistance to ensure high-speed processing on automated cartoning machines.",
    faqs: [
      {
        q: "What are Metpet cartons?",
        a: "Metpet cartons are made of cardboard laminated with a thin layer of metallized polyester film, giving a shiny metallic look. They are heavily used in premium cosmetic and liquor packaging."
      }
    ],
    relatedProductSlugs: ["innovative-cartons", "specialty-labels", "foil-stamping-labels"]
  },
  {
    slug: "security-labels",
    name: "Security Labels",
    category: "Security",
    description: "Anti-counterfeiting labels utilizing specialty inks, holograms, and tracking systems.",
    shortIntro: "Security labels prevent counterfeiting, theft, and unauthorized alteration. We combine holograms, specialty reactive inks, micro-text, and unique serial codes to protect brand integrity and secure high-value products.",
    applications: [
      "Pharmaceutical medicine packaging authentication",
      "High-value cosmetics seal protection",
      "Electronic components authentication tags",
      "Government or corporate document security seals"
    ],
    advantages: [
      "Multi-layered anti-counterfeit features",
      "Tamper-indicating adhesive residue (void/honeycomb pattern)",
      "High-resolution security micro-text printing",
      "Integration of holographic elements"
    ],
    materials: ["Tamper Void Film", "Destructible Paper", "Holographic Foil Stock"],
    finishes: ["Coin-Reactive Coatings", "UV Fluorescent Inks", "Overt/Covert Hologram Strips"],
    printingCapabilities: "Printed under clean-room conditions with strict inventory accountability and secure waste disposal.",
    suitableIndustries: ["Pharmaceuticals", "Cosmetics", "Chemicals", "Wine & Liquor"],
    qualityConsiderations: "ISO-standard process controls to prevent leakage of security materials or counterfeit replication.",
    faqs: [
      {
        q: "How do coin-reactive security labels work?",
        a: "Coin-reactive labels have a special invisible coating that turns gray or black when scratched with a metallic coin, proving product authenticity instantly."
      }
    ],
    relatedProductSlugs: ["tamper-proof-labels", "coin-reactive-labels", "glow-in-the-dark-labels"]
  },
  {
    slug: "specialty-labels",
    name: "Specialty Labels",
    category: "Specialty",
    description: "Highly customized label configurations utilizing complex structures, finishes, and functional designs.",
    shortIntro: "Specialty labels address unique, functional, and decorative requirements that exceed standard specifications. With over 15 specialty configurations, we manufacture labels with textured surfaces, multi-layers, built-in hangers, and more.",
    applications: [
      "Interactive multi-page booklet labels for consumer instructions",
      "Infusion bottle hanger setups in pharmaceutical environments",
      "Tactile hazard warning indicators (Braille)",
      "Product jars with unique leather/linen feel requirements"
    ],
    advantages: [
      "Solves complex functional packaging challenges",
      "Creates strong tactile and visual differentiation on shelves",
      "Engineered with multi-layer structures for regulatory information",
      "High durability under specialized temperature and physical exposures"
    ],
    materials: ["Textured Papers", "Structured Films", "Heavy-gauge Hanger Loops", "Multi-layer Paper-Film Laminates"],
    finishes: ["Dome Resins", "Embossed Finishes", "Glitter Inks", "Leather Effects"],
    printingCapabilities: "Configured with specialized multi-web tooling and inline die stations on Taiyo 10-color press.",
    suitableIndustries: ["Pharmaceuticals", "Cosmetics", "Perfumery", "Food & Beverages", "Wine & Liquor"],
    qualityConsiderations: "Strict validation of layer peeling tension and tactile height consistency.",
    faqs: [
      {
        q: "How many specialty products does Innovative Label Solutions manufacture?",
        a: "We manufacture over 15 specialty labels, including Braille, Dome, Embossed, Foil Stamping, Multi-layer, and Hanger labels."
      }
    ],
    relatedProductSlugs: ["braille-labels", "dome-labels", "multi-layer-labels"]
  }
];

// Slugs for automatically generated placeholder product pages
const placeholderSlugs = [
  "barcode-labels", "thermal-labels", "metallized-labels", "clear-labels",
  "opaque-labels", "pp-labels", "pet-film-labels", "braille-labels",
  "dome-labels", "embossed-labels", "foil-stamping-labels", "multi-layer-labels",
  "hanger-labels", "tamper-proof-labels", "temperature-sensitive-labels",
  "coin-reactive-labels", "glow-in-the-dark-labels", "transfer-labels",
  "textured-labels", "laminated-labels", "innovative-cartons"
];

// Hydrate the rest of the list dynamically to avoid thin page errors while adhering to the prompt rules
placeholderSlugs.forEach(slug => {
  const words = slug.split("-");
  const name = words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  let category: "Labels" | "Specialty" | "Packaging" | "Security" = "Specialty";
  if (slug.includes("labels") && !slug.includes("security") && !slug.includes("tamper") && !slug.includes("braille") && !slug.includes("dome")) {
    category = "Labels";
  } else if (slug.includes("carton")) {
    category = "Packaging";
  } else if (slug.includes("security") || slug.includes("tamper") || slug.includes("reactive") || slug.includes("sensitive")) {
    category = "Security";
  }

  productsData.push({
    slug,
    name,
    category,
    description: `Professional B2B ${name.toLowerCase()} manufactured to exact specifications at our Dombivli facility.`,
    shortIntro: `Our ${name} line provides specialized properties tailored to B2B customer requirements. Produced under ISO 9001:2015 standards, these components are designed for direct integration with commercial packaging lines.`,
    applications: [
      `Industrial packaging setups requiring ${name.toLowerCase()} properties`,
      "High-speed automated application pipelines",
      "Specialized branding and visual shelf layouts",
      "Regulatory-compliant container labeling"
    ],
    advantages: [
      "100% compliance with client physical dimensions",
      "High-resolution printing quality ensuring text legibility",
      "Optimized adhesive properties for clean application",
      "Inspected by 100% defect-detection camera systems"
    ],
    printingCapabilities: "Manufactured using our flexographic machinery fleet: Taiyo STF 340 (10 colour), Alliance A3 (8 colour), or Mark Andy 2200 (8 colour).",
    suitableIndustries: ["Pharmaceuticals", "Cosmetics", "Food & Beverages", "Chemicals", "Perfumery"],
    qualityConsiderations: "Manufactured in Class 100,000 clean rooms with automated visual defect analysis via Re Italy inspection lines.",
    faqs: [
      {
        q: `What is the lead time for custom ${name}?`,
        a: "Lead times are subject to artwork approval, material selection, and order volume. Please contact our sales team with your specifications for a precise quote."
      },
      {
        q: "Is technical data sheet (TDS) available for these materials?",
        a: "Yes, technical data sheets can be provided upon request during material selection and quote validation."
      }
    ],
    relatedProductSlugs: ["pressure-sensitive-labels", "self-adhesive-labels", "specialty-labels"],
    materials: ["Content to be confirmed by company"],
    finishes: ["Content to be confirmed by company"]
  });
});

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find(p => p.slug === slug);
}
