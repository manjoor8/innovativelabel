export interface GalleryItem {
  id: number;
  src: string;
  category: "factory" | "machinery" | "production" | "products" | "labels" | "team";
  title: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/assets/images/gallery/factory-1.jpg",
    category: "factory",
    title: "Manufacturing Plant Layout",
    description: "Overview of our 25,000 sq. ft. clean and climate-controlled production floor in Dombivli MIDC."
  },
  {
    id: 2,
    src: "/assets/images/gallery/factory-2.jpg",
    category: "factory",
    title: "Class 100,000 Clean Room Area",
    description: "Positive air pressure zone dedicated to pharmaceutical and cosmetic label printing."
  },
  {
    id: 3,
    src: "/assets/images/gallery/machinery-1.jpg",
    category: "machinery",
    title: "Taiyo STF 340 10-Color Press",
    description: "Flagship multi-web flexographic press supporting double-sided printing and high-end decorations."
  },
  {
    id: 4,
    src: "/assets/images/gallery/machinery-2.jpg",
    category: "machinery",
    title: "Alliance A3 Flexo Press",
    description: "8-color flexographic printing line with precision chill rollers optimized for synthetic packaging film."
  },
  {
    id: 5,
    src: "/assets/images/gallery/production-1.jpg",
    category: "production",
    title: "High-Speed Slitting and Rewinding",
    description: "Web slitting section configuring core diameter and rewind tension for client labeling machines."
  },
  {
    id: 6,
    src: "/assets/images/gallery/production-2.jpg",
    category: "production",
    title: "Re Italy Defect detection Scanning",
    description: "100% automated visual scanner system checking every print lane for visual defects."
  },
  {
    id: 7,
    src: "/assets/images/gallery/product-sample-1.jpg",
    category: "products",
    title: "Cosmetic Label Rolls",
    description: "High-clarity clear polypropylene cosmetic label rolls waiting for dispatch packaging."
  },
  {
    id: 8,
    src: "/assets/images/gallery/product-sample-2.jpg",
    category: "products",
    title: "Premium Folding Cartons",
    description: "Finished folding paperboard cartons featuring metallic Metpet finishes."
  },
  {
    id: 9,
    src: "/assets/images/gallery/label-sample-1.jpg",
    category: "labels",
    title: "Specialty Booklet Labels",
    description: "Multi-layer peel-and-reveal booklet labels packed with multi-lingual regulatory drug warnings."
  },
  {
    id: 10,
    src: "/assets/images/gallery/label-sample-2.jpg",
    category: "labels",
    title: "Tamper-Evident Security Seals",
    description: "Specialty security labels leaving a warning print residue if peeled."
  },
  {
    id: 11,
    src: "/assets/images/team/team-group.jpg",
    category: "team",
    title: "Innovative Label Solutions Team",
    description: "Our dedicated workforce of 75+ printing and packaging industry professionals."
  }
];

export const galleryCategories = [
  { slug: "all", name: "All Images" },
  { slug: "factory", name: "Factory Floor" },
  { slug: "machinery", name: "Machinery Fleet" },
  { slug: "production", name: "Production & Rewinding" },
  { slug: "products", name: "Product Formats" },
  { slug: "labels", name: "Label Formats" },
  { slug: "team", name: "Our Team" }
];
