export interface SupplierCategory {
  slug: string;
  name: string;
  description: string;
  logoPaths: string[];
}

export const suppliersData: SupplierCategory[] = [
  {
    slug: "raw-material-suppliers",
    name: "Raw Material Suppliers",
    description: "Multinational raw substrate providers ensuring high-quality self-adhesive papers, films, and release liners.",
    logoPaths: [
      "/assets/images/suppliers/raw-materials/raw_material_1.jpg",
      "/assets/images/suppliers/raw-materials/raw_material_2.jpg",
      "/assets/images/suppliers/raw-materials/raw_material_3.jpg",
      "/assets/images/suppliers/raw-materials/raw_material_4.jpg"
    ]
  },
  {
    slug: "inks-varnishes-suppliers",
    name: "Inks & Varnishes Suppliers",
    description: "Global chemical and ink manufacturers supplying UV-cured inks, specialized finishes, and varnishes.",
    logoPaths: [
      "/assets/images/suppliers/inks/ink_1.jpg",
      "/assets/images/suppliers/inks/ink_2.jpg",
      "/assets/images/suppliers/inks/ink_3.jpg",
      "/assets/images/suppliers/inks/ink_4.jpg"
    ]
  }
];

export function getSupplierCategoryBySlug(slug: string): SupplierCategory | undefined {
  return suppliersData.find(s => s.slug === slug);
}
