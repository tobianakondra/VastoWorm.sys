import { generateSVG } from './svg.js';
import fs from 'fs';
import path from 'path';

const mockState = {
  infectionRate: 52.4,
  integrity: 78,
  cpuLoad: 45,
  defense: 30,
  stage: "MUTATING",
  history: [
    "SYSTEM SECURITY BYPASS IN US-NY [OK]",
    "DECAY WARNING: Integrity degraded to 78%",
    "PAYLOAD INJECTED by hacker123 -> UK-LDN online"
  ]
};

const svgContent = generateSVG(mockState);
const assetsDir = './assets';

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

fs.writeFileSync(path.join(assetsDir, 'virus.svg'), svgContent);
console.log("Mock SVG successfully compiled and saved to assets/virus.svg");
