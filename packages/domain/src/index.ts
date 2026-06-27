export const product = {
  name: "DedSec",
  author: "Mauricio Vuljevas",
  authorUri: "https://www.mvuljevas.com",
  repositoryUri: "https://github.com/mvuljevas/DedSec",
  category:
    "Mobile phone repair, maintenance, identification, diagnostics, and optimization",
  desktopPlatforms: ["windows", "macos", "linux"] as const
} as const;

export type DesktopPlatform = (typeof product.desktopPlatforms)[number];

export const serviceAreas = [
  {
    id: "repair",
    label: "Repair tasks",
    description: "Guided workflows for mobile phone repair operations."
  },
  {
    id: "maintenance",
    label: "Maintenance",
    description: "Routine maintenance flows for device health and readiness."
  },
  {
    id: "identification",
    label: "Device identification",
    description: "Device model, platform, and capability identification."
  },
  {
    id: "diagnostics",
    label: "Diagnostics",
    description: "Local diagnostic reports controlled by the user."
  },
  {
    id: "optimization",
    label: "Optimization",
    description: "Optimization tools with explicit user consent."
  }
] as const;

export type ServiceAreaId = (typeof serviceAreas)[number]["id"];
