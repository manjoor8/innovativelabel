export interface MachineSpec {
  name: string;
  colors: number;
  width: string;
  description: string;
  features: string[];
}

export interface Capability {
  slug: string;
  name: string;
  description: string;
  details: string;
  specifications?: string[];
  machines?: MachineSpec[];
  highlights?: string[];
}

export const capabilitiesData: Capability[] = [
  {
    slug: "flexographic-printing",
    name: "Flexographic Printing",
    description: "High-speed, multi-color rotary printing using UV-cured inks on synthetic films and paperboards.",
    details: "Flexography is the backbone of our manufacturing operation. Utilizing high-efficiency rotary plates and UV drying systems, we produce high-definition labels and packaging at high speeds, guaranteeing color consistency across large B2B production runs.",
    highlights: [
      "Up to 10 colors in a single pass",
      "Inline cold foiling, laminating, and die-cutting",
      "UV-cured inks for instant drying and chemical resistance",
      "Precise registration control for multi-layer labeling"
    ],
    machines: [
      {
        name: "Taiyo STF 340",
        colors: 10,
        width: "340 mm",
        description: "Our flagship Japanese-engineered flexo press. Ideal for complex multi-web labels, booklet labels, and high-color decorations.",
        features: ["10 UV print stations", "Dual die-cutting slots", "Booklet label insertion module", "Delam/Relam print features"]
      },
      {
        name: "Alliance A3",
        colors: 8,
        width: "330 mm",
        description: "High-speed web press optimized for filmic label runs and shrink sleeves, delivering high register accuracy.",
        features: ["8 UV print stations", "Chill drums for temperature-sensitive thin films", "Electronic register controls"]
      },
      {
        name: "Mark Andy 2200",
        colors: 8,
        width: "250 mm",
        description: "Reliable workhorse press designed for short to medium runs of self-adhesive labels and industrial tags.",
        features: ["8 UV and hot-air print stations", "Inline sheeting conveyor", "Double die-cut rotary module"]
      }
    ]
  },
  {
    slug: "label-printing",
    name: "Label Printing",
    description: "Production of custom self-adhesive, shrink-sleeve, and barcode labels optimized for container shapes.",
    details: "We manufacture labels designed to match the substrate, environment, and application method of your products. From standard paper stickers to filmic and specialty security labels, we deliver end-to-end labeling solutions.",
    specifications: [
      "Roll form configuration for automatic bottling machinery",
      "Sheet form layouts for manual packaging benches",
      "Custom die shape configurations built to bottle specs",
      "High-adhesion adhesives for demanding substrates"
    ]
  },
  {
    slug: "roll-label-printing",
    name: "Roll Label Printing",
    description: "Web-fed label rolls precisely wound and spaced for automatic labeling line integration.",
    details: "For B2B manufacturing, labels must be formatted correctly to prevent line stoppages. We configure roll core diameters, unwind directions, and spacing gaps to meet the specifications of your labeling equipment.",
    specifications: [
      "Core options: 1 inch (25mm), 1.5 inch (38mm), or 3 inch (76mm)",
      "Unwind directions: Industry standard configurations 1 through 8",
      "Matrix-free rolls to prevent label catching",
      "Precise gap control using electronic optical sensors during slitting"
    ]
  },
  {
    slug: "sheet-label-printing",
    name: "Sheet Label Printing",
    description: "Custom cut labels in flat sheet formats designed for easy peeling and manual application.",
    details: "For boutique runs, shipping labels, or manual processing, sheet-fed labels provide high convenience. We supply custom layouts on clean backing sheets that peel away without tearing.",
    specifications: [
      "A4, A5, and custom sheet layout formats",
      "Crack-and-peel backing slits for immediate manual use",
      "Mix of multiple label designs on a single sheet format",
      "Optimized for office laser or industrial desk printers"
    ]
  },
  {
    slug: "security-printing",
    name: "Security Printing",
    description: "Integration of overt and covert anti-counterfeit measures, including micro-text and security inks.",
    details: "Protecting brands from counterfeit markets requires security-grade printing. We integrate specialty chemicals and optical features during the flexo print process to make packages difficult to replicate.",
    specifications: [
      "Hologram foil application inline",
      "Coin-reactive ink layers that verify authenticity",
      "Fluorescent UV-reactive inks visible under blacklight",
      "Micro-text printing down to 0.5pt font heights"
    ]
  },
  {
    slug: "specialty-printing",
    name: "Specialty Printing",
    description: "Advanced finishing options, including metallic foils, resin domes, and multi-layer structural labels.",
    details: "Enhancing shelf presence requires decorative techniques. We offer custom embossings, tactile varnish layers, and multi-web assemblies to deliver features that look premium and solve packaging challenges.",
    specifications: [
      "Tactile Braille screen varnishing",
      "Resin dome labels for 3D branding badges",
      "Multi-layer peel-and-reveal booklet configurations",
      "Glitter, leather-effect, and soft-touch textured finishes"
    ]
  },
  {
    slug: "quality-inspection",
    name: "Quality Inspection",
    description: "100% optical camera verification to find and reject print, die-cut, or label alignment defects.",
    details: "Our quality inspection systems are fully automated. Every millimeter of printed web passes under high-speed inspection cameras, catching errors and ensuring only perfect labels leave our facility.",
    specifications: [
      "Re Italy digital camera scanning integration",
      "Automatic detection of missing labels or matrix flags",
      "Barcode readability verification (1D & 2D formats)",
      "Automated removal of defective sections on inspection rewinders"
    ]
  },
  {
    slug: "clean-room-manufacturing",
    name: "Clean Room Manufacturing",
    description: "Controlled Class 100,000 environmental facility to protect pharma and cosmetic labels from dust.",
    details: "Contamination on primary pharmaceutical or cosmetic packaging is unacceptable. We operate our core manufacturing lines under Class 100,000 clean-room conditions, maintaining positive air pressure, HEPA filtration, and strict cleanliness regulations.",
    specifications: [
      "Positive air pressure controls to keep ambient dust out",
      "HEPA air filtration running continuously",
      "Gowned, hairnetted, and clean-shoe workspace access",
      "Controlled raw material intake and waste disposal paths"
    ]
  },
  {
    slug: "artwork-plate-die-management",
    name: "Artwork, Plate & Die Management",
    description: "Secure custody and temperature-controlled storage for customer print tools and die blocks.",
    details: "Tooling represents a major investment for our clients. We store client plates, magnetic cylinders, and solid steel dies in a climate-controlled warehouse under CCTV monitoring, ensuring their longevity and readiness for repeat orders.",
    specifications: [
      "Climate-controlled storage (preventing polymer warping)",
      "Digital asset tracing linking plates to repeat order numbers",
      "CCTV-monitored secure storage shelves",
      "Regular inspection and clean maintenance of die tooling"
    ]
  }
];

export function getCapabilityBySlug(slug: string): Capability | undefined {
  return capabilitiesData.find(c => c.slug === slug);
}
