export const product = {
  name: "DedSec",
  author: "Mauricio Vuljevas",
  authorUri: "https://www.mvuljevas.com",
  repositoryUri: "https://github.com/mvuljevas/DedSec",
  category:
    "PC repair, diagnostics, resource optimization, secure installer monitoring, safe cleanup, and system maintenance",
  desktopPlatforms: ["windows", "macos", "linux"] as const
} as const;

export type DesktopPlatform = (typeof product.desktopPlatforms)[number];

export const serviceAreas = [
  {
    id: "repair",
    label: "Repair tasks",
    description: "Guided workflows for PC repair operations."
  },
  {
    id: "maintenance",
    label: "Maintenance",
    description: "Routine maintenance flows for system health and readiness."
  },
  {
    id: "inventory",
    label: "System inventory",
    description: "Hardware, operating system, storage, and capability inventory."
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
