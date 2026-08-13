export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface Industry {
  slug: string;
  name: string;
  share?: string;
  description: string;
  introduction: string;
  requirements: string[];
  relevantProductSlugs: string[];
  capabilities: string[];
  qualityConsiderations: string[];
  applications: string[];
  faqs: IndustryFAQ[];
}

export const industriesData: Industry[] = [
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    share: "30%",
    description: "Highly regulated labels requiring Class 100,000 clean-room production, low-migration inks, and complete print accuracy.",
    introduction: "Pharmaceutical label packaging demands absolute precision, complete visual clarity, and flawless text legibility. Since errors in medication labels pose severe health risks, our production processes are designed around strict regulatory compliance, low-migration adhesives, and anti-counterfeiting security features.",
    requirements: [
      "Low-migration, non-toxic adhesives and inks suitable for primary medical containers",
      "100% legibility of micro-text, barcodes, dosage warnings, and batch numbers",
      "Sterile manufacturing environment to prevent physical or biological contamination",
      "Anti-counterfeit features and tamper-indicating seal mechanisms"
    ],
    relevantProductSlugs: ["pressure-sensitive-labels", "security-labels", "braille-labels", "tamper-proof-labels", "multi-layer-labels", "hanger-labels"],
    capabilities: [
      "Class 100,000 Clean Room manufacturing standards",
      "Taiyo 10-color flexographic press for complex back-side printing and multi-layer processing",
      "Re Italy 100% optical defect detection checks with zero failure tolerance",
      "Dual-web laminators for leaflet/booklet label assembly"
    ],
    qualityConsiderations: [
      "Strict compliance with ISO 9001:2015 B2B quality standards",
      "Automated camera scan verification for every single barcode and serialization sequence",
      "Raw material trace records from trusted multinational vendors"
    ],
    applications: [
      "Vials and ampoule wraps with high-tack adhesive for small-radius glass",
      "Syringe and infusion bottle labeling with integrated hangers",
      "Multi-layer booklet labels for multi-lingual medical guides",
      "Tamper-evident carton seals and security holograms"
    ],
    faqs: [
      {
        q: "Do you manufacture Braille labels for pharmaceutical packaging?",
        a: "Yes, we produce Braille labels with tactile screen varnish layers that meet international standards for the visually impaired."
      },
      {
        q: "What clean room standards does your facility follow?",
        a: "Our pharmaceutical labels are manufactured within a dedicated Class 100,000 clean-room area with strict air filtration and employee gowning protocols."
      }
    ]
  },
  {
    slug: "cosmetics",
    name: "Cosmetics",
    share: "30%",
    description: "High-appeal branding labels featuring metallic foils, textured finishes, and squeeze-tube flexibility.",
    introduction: "In the cosmetics sector, packaging is the primary brand ambassador. Our cosmetics labels are designed for premium shelf appeal, using clear-on-clear substrates for a 'no-label' look, high-gloss metallized effects, foil accents, and tactile varnishes that withstand contact with oils, water, and direct friction.",
    requirements: [
      "Resistance to water, cosmetic oils, essential chemicals, and squeezing deformation",
      "Vibrant high-definition color matching across diverse product ranges",
      "No-label appearance using high-clarity clear polypropylene film",
      "Tactile texture finishes that reinforce the luxury brand image"
    ],
    relevantProductSlugs: ["clear-labels", "self-adhesive-labels", "shrink-sleeves", "cartons", "foil-stamping-labels", "dome-labels", "textured-labels"],
    capabilities: [
      "Alliance 8-colour and Taiyo 10-colour high-definition flexo printing",
      "In-line hot and cold foil stamping systems",
      "Specialty textured varnish coatings and dome resin application",
      "Rotary die-cutting for complex, custom label shapes"
    ],
    qualityConsiderations: [
      "Accurate color calibration using spectrophotometer verification",
      "Strict tape-test checks to verify ink adhesion on filmic substrates",
      "Friction resistance tests (rub test) to ensure visual durability on retail shelves"
    ],
    applications: [
      "Shampoo and shower gel squeezable bottle labels",
      "Clear-on-clear labels for glass skin-care jars",
      "Full-body shrink sleeves for curved contour containers",
      "Premium Metpet folding boxes for skin cream and lotion kits"
    ],
    faqs: [
      {
        q: "Can your cosmetics labels withstand moisture in bathrooms?",
        a: "Yes, we use synthetic PP and PET filmic materials combined with waterproof lamination that protects the print from humidity and direct water contact."
      }
    ]
  },
  {
    slug: "perfumery",
    name: "Perfumery",
    share: "18%",
    description: "Ultra-premium decorations with metallic foil, rich textures, and chemical-resistant finishes for luxury perfume packaging.",
    introduction: "Perfume bottles are luxury items that require highest-tier labeling and packaging solutions. We offer high-end decoration techniques like deep embossing, luxury metallic foil borders, and chemical-resistant top coatings that survive contact with perfume formulations containing high alcohol content.",
    requirements: [
      "Absolute chemical resistance to alcohol-based perfume sprays",
      "Premium texture papers and structured films reflecting luxury status",
      "Zero-defect clarity on glass applications",
      "High-precision embossing and foil stamping alignment"
    ],
    relevantProductSlugs: ["foil-stamping-labels", "embossed-labels", "textured-labels", "cartons", "innovative-cartons", "specialty-labels"],
    capabilities: [
      "Precision multi-color printing with inline foil embellishment",
      "Heavy emboss tool setups for raised letter and borders",
      "Chemical-resistant UV coating inline curing",
      "Metpet cardstock cartons with window patch integrations"
    ],
    qualityConsiderations: [
      "Alcohol rub-testing validation for all perfume labels",
      "Strict registration control of foil overlaying print lines",
      "Consistent emboss height check on premium structured papers"
    ],
    applications: [
      "Luxury perfume bottle front and base labels",
      "Embossed neck wraps and collar ribbons",
      "Metpet folding boxes with custom structural textures",
      "Authenticity security seal labels"
    ],
    faqs: [
      {
        q: "What types of foil stamping do you offer for perfumes?",
        a: "We offer both hot and cold foil stamping in gold, silver, rose gold, and custom metallic colors to create high-contrast luxury patterns."
      }
    ]
  },
  {
    slug: "food-beverages",
    name: "Food & Beverages",
    share: "10%",
    description: "High-durability labels compliant with food safety, resisting moisture, condensation, and low temperatures.",
    introduction: "Food and beverage labels must remain intact and legible from storage to consumption. Our label solutions accommodate cold storage moisture, grease, condensation, and direct sunlight, while using food-safe components that satisfy industrial packaging compliance.",
    requirements: [
      "Food-contact-safe inks and adhesives compliant with regional regulations",
      "Adhesion on cold, wet, or oily surfaces",
      "High moisture and condensation resistance for chilled beverages",
      "Clear branding and nutrition facts legibility"
    ],
    relevantProductSlugs: ["pressure-sensitive-labels", "shrink-sleeves", "metallized-labels", "thermal-labels", "laminated-labels", "cartons"],
    capabilities: [
      "High-capacity printing running up to 10 million labels/day",
      "Water-resistant gloss/matte film lamination",
      "High-speed rotary die cutters for classic bottle formats",
      "Automatic roll splicing for high-speed client production lines"
    ],
    qualityConsiderations: [
      "Adhesion validation on chilled glass and plastic substrates",
      "Sitemap print density checks to keep food brand graphics uniform",
      "Odor-free, low-migration ink usage on all food labels"
    ],
    applications: [
      "Water, juice, and craft soda bottle labels",
      "Condiment jar labels resisting oil stains",
      "Frozen food containers using low-temperature adhesives",
      "Multipack promotional shrink sleeve wraps"
    ],
    faqs: [
      {
        q: "Are your food labels resistant to freezing temperatures?",
        a: "Yes, we specify freezer-grade adhesives that perform from -20°C up to room temperature, ensuring labels don't peel off in cold storage."
      }
    ]
  },
  {
    slug: "chemicals",
    name: "Chemicals",
    share: "10%",
    description: "Industrial-grade labels designed to resist corrosive chemicals, solvents, weathering, and heavy handling.",
    introduction: "Chemical packaging operates under harsh conditions. Labels must remain legible and firmly attached when exposed to corrosive acids, alkaline substances, motor oils, industrial solvents, and outdoor UV rays. Our chemical label systems use heavy-duty polymers and robust adhesives for maximum performance.",
    requirements: [
      "Chemical, solvent, acid, and alkaline resistance",
      "Extreme durability under scuffing, weather, and UV exposure",
      "GHS (Globally Harmonized System) compliant hazard warnings and color coding",
      "Extra-tack adhesives for textured plastic drums"
    ],
    relevantProductSlugs: ["self-adhesive-labels", "pp-labels", "pet-film-labels", "tamper-proof-labels", "laminated-labels"],
    capabilities: [
      "Heavy-duty synthetic stock processing (thick PP / PET)",
      "High-durability outdoor-rated chemical inks",
      "Over-lamination coating inline systems to protect warning labels",
      "Flexible sizing layout for large shipping drums"
    ],
    qualityConsiderations: [
      "Chemical wash tests to verify label print durability",
      "Adhesion tests on rough HDPE plastic surfaces",
      "Legibility check of GHS symbols under environmental wear"
    ],
    applications: [
      "HDPE plastic drum labels for raw chemical transport",
      "Motor oil and lubricant bottle labels",
      "Pesticide and agrochemical small bottle packaging",
      "Safety warning labels on heavy industrial machinery"
    ],
    faqs: [
      {
        q: "Do you supply GHS-compliant chemical labels?",
        a: "Yes, our flexo systems print GHS warning symbols in high contrast and color-fast ink to ensure compliance with global transport codes."
      }
    ]
  },
  {
    slug: "wine-liquor",
    name: "Wine & Liquor",
    share: "Served",
    description: "Premium textured papers, thick hot foil accents, and high-impact packaging solutions for distilleries.",
    introduction: "The wine and spirits industry demands premium, sensory-rich label finishes. We manufacture wine labels using heavy textured antique paper stocks, metallic embossings, tactile varnishes, and custom die cuts that capture craftsmanship and history.",
    requirements: [
      "Performance in wet-ice buckets (label must not fall off or tear when submerged)",
      "Premium materials like textured wood-free paper and metallized substrates",
      "Precision alignment of complex overlapping decorations",
      "High-speed line compatibility"
    ],
    relevantProductSlugs: ["textured-labels", "foil-stamping-labels", "embossed-labels", "innovative-cartons", "multi-layer-labels", "specialty-labels"],
    capabilities: [
      "Heavy-gauge texture paper handling inline printing",
      "Hot foil stamping and mechanical embossing",
      "Ice-water resistant adhesives configured for glass bottles",
      "Metpet folding cartons with deep embossing for premium bottles"
    ],
    qualityConsiderations: [
      "Ice-bucket immersion test (label remains intact for 4+ hours)",
      "Accurate color calibration for deep wine reds and luxury golds",
      "Zero-flaking of hot foil prints on textured surfaces"
    ],
    applications: [
      "Whiskey, vodka, and gin bottle front labels",
      "Textured paper wine bottle wraps",
      "Neck necklet foil wraps",
      "Luxury gift carton packaging"
    ],
    faqs: [
      {
        q: "Do your wine labels stay on when placed in an ice bucket?",
        a: "Yes, we use special ice-proof adhesive formulations that prevent labels from bubbling, peeling, or sliding off in cold water."
      }
    ]
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industriesData.find(i => i.slug === slug);
}
