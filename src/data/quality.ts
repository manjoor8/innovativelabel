export interface QualitySection {
  slug: string;
  name: string;
  title: string;
  intro: string;
  points: string[];
  certificateImg?: string;
  details?: string;
}

export const qualityData: QualitySection[] = [
  {
    slug: "quality-policy",
    name: "Quality Policy",
    title: "Our Quality Policy & Customer Commitment",
    intro: "Innovative Label Solutions Pvt. Ltd. is committed to producing high-quality labels that conform to customer requirements to achieve complete customer satisfaction within the shortest lead time and in a cost-effective manner. Our aim is to enhance the value of your products through our innovations and proper guidance.",
    points: [
      "Conformance to customer and regulatory requirements",
      "Short lead times and swift turnaround on product development",
      "First-time-right approach in B2B manufacturing",
      "Striving for continuous improvement in all areas including attitude, products, and services",
      "Cost-effective manufacturing to deliver optimal value to our clients"
    ]
  },
  {
    slug: "iso-9001-certification",
    name: "ISO 9001:2015 & cGMP Certification",
    title: "ISO 9001:2015 & cGMP Certified Manufacturing Facility",
    intro: "Our facility is certified under ISO 9001:2015 and current Good Manufacturing Practice (cGMP) standards, proving our adherence to international quality management systems and pharmaceutical-grade sanitation. This certification guarantees that our processes from raw material procurement to print, die-cutting, packaging, and dispatch follow documented protocols.",
    certificateImg: "/assets/images/quality/iso-certificate.jpg",
    points: [
      "Documented standard operating procedures (SOPs) for all production processes",
      "Regular internal audits and periodic external surveillance audits",
      "Traceability of all raw materials back to supplier batch numbers",
      "Corrective and preventive actions (CAPA) framework active in production"
    ],
    details: "Our ISO certification number is verified and audited periodically to ensure zero compliance gaps. The original certificate image can be viewed above."
  },
  {
    slug: "quality-inspection",
    name: "Quality Inspection",
    title: "100% Optical Defect Detection",
    intro: "We utilize automated defect-detection systems to replace manual visual inspection, which can miss high-frequency errors. Every printed label passes through high-speed digital scanner systems to check and flag print defects.",
    points: [
      "Re Italy defect-detection system with 100% success rate",
      "Checks color deviation, text blurring, and die-cut alignment",
      "Detects matrix residue, holes, and dust contamination on substrates",
      "Ensures barcode and QR code scan-readability prior to roll winding"
    ]
  },
  {
    slug: "quality-control-process",
    name: "Quality Control Process",
    title: "Stage-Wise Quality Gates (IQ, OQ, PQ)",
    intro: "Our quality control (QC) workflow consists of three distinct check stages to ensure no flawed products reach delivery shipping lines.",
    points: [
      "Incoming QC (IQC): inspection of all raw films, papers, inks, and adhesives from trusted suppliers",
      "In-Process QC (IPQC): press verification sheets checked against approved master artwork proofs at the start of each run",
      "Outgoing QC (OQC): final review of slit rolls for tension, label count, unwind direction, and packing box labeling accuracy"
    ]
  }
];

export function getQualityBySlug(slug: string): QualitySection | undefined {
  return qualityData.find(q => q.slug === slug);
}
